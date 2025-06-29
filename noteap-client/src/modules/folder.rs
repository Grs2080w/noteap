use std::env::current_dir;

use colored::Colorize;


pub fn path_folder(folder_name: &str) -> String {

    let home_dir = dirs::home_dir();
    let obsidian_path = home_dir.unwrap().join("workspace").join("Obsidian");

    let mut path_folder: String = String::new();

    println!("{}", path_folder.black().bold());

    if !obsidian_path.exists() {
        path_folder = current_dir().unwrap().join(folder_name).to_str().unwrap().to_string();
        return path_folder
    }

    path_folder = obsidian_path.join(folder_name).to_str().unwrap().to_string();
    path_folder

    
}