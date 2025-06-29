use std::fs;
use serde_json::Value;
use std::io::Write;
use colored::*;


pub fn write_files(json: &Value, path_folder: &String) {
    for note in json.as_array().unwrap() {
    
        let title = &note.get("title").unwrap().as_str().unwrap();
        let title = title.replace(&['/', '\\', ':', '*', '?', '"', '<', '>', '|'][..], "_");
        let text = &note.get("text").unwrap().as_str().unwrap();

        let path = format!("{}/{}.md", path_folder ,title);

        let mut file = fs::File::create(path).unwrap();
        file.write_all(text.as_bytes()).unwrap();
        
        println!("{} {}","+".bold().bright_green() , note.get("title").unwrap());
    }
}