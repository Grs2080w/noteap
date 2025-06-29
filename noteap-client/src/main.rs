mod modules;

use serde_json::Value;
use std::fs;
use colored::*;

use notify_rust::Notification;
use notify_rust::Timeout;

use crate::modules::brand::name_brand;
use crate::modules::check::is_the_same;
use crate::modules::folder::path_folder;
use crate::modules::write::write_files;
use crate::modules::hour::get_hour;
use crate::modules::req;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {

    let folder_name = "_NewNotes";
    let noteap = name_brand();

    println!("{}", noteap);

    let info = format!("[{}]Searching Notes...", get_hour());
    println!("{}", info.yellow());
    
    let path_folder = path_folder(folder_name);

    let resp = req::make_requests("all").await;
    
    let json: Value = serde_json::from_str(&resp)?;

    if json.as_array().unwrap().iter().count() == 0 {
        
        println!("");
        let info = format!("[{}]The notes from server have been downloaded or Deleted from the server, no notes were found.", get_hour());
        println!("{}", info.yellow().bold());
        
        std::process::exit(0);
        
    }

    if !resp.is_empty() {
        let info = format!("[{}]Notes received! Writing files...", get_hour());
        println!("{}", info.yellow())
    }

    if !fs::exists(&path_folder).unwrap() {
        fs::DirBuilder::new()
        .recursive(true)
        .create(&path_folder).unwrap();
    }
    
    println!("");
    println!(" {} __________", "Notes".italic().bold());
    println!("");

    write_files(&json, &path_folder);

    let error_onwrite = is_the_same(&json, &path_folder);

    if error_onwrite {
        let info = format!("[{}]Error on write notes!", get_hour());
        println!("{}", info.red().bold());
    }

    println!("");
    println!("_________________");
    println!("");

    println!("{} notes added!", json.as_array().unwrap().iter().count().to_string().bold());
    
    println!("Notes added to path: {}", path_folder.purple().bold());


    if !error_onwrite {
        req::make_requests("delete").await;
    }

    let resp = req::make_requests("all").await;
    let json: Value = serde_json::from_str(&resp)?; 
    
    if json.as_array().unwrap().iter().count() == 0 {

        println!("");
        let info = format!("[{}]Old Notes Deleted with sucess!", get_hour());
        println!("{}", info.green().bold());
        
    }

    Notification::new()
    .summary("Noteap")
    .body("The notes from server have been downloaded and written with sucess!")
    .timeout(Timeout::Milliseconds(6000))
    .show().unwrap();
    
    Ok(())

}
