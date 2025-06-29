use std::fs;
use serde_json::Value;

pub fn is_the_same(json: &Value, path_folder: &String) -> bool {

    let mut error = false;

    for note in json.as_array().unwrap() {
        let title = note.get("title").unwrap().as_str().unwrap();
        let title = title.replace(&['/', '\\', ':', '*', '?', '"', '<', '>', '|'][..], "_");
        let text = note.get("text").unwrap().as_str().unwrap();
        let path = format!("{}/{}.md", path_folder ,title);
        let content = fs::read_to_string(path).unwrap();

        if content.is_empty() {
            error = true;
        }

        if !content.contains(text) {
            error = true;
        }
    }

    error
}


