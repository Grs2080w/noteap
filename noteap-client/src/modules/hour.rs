use chrono::{Utc};

pub fn get_hour() -> String {
    Utc::now().format("%H:%M:%S").to_string()
}