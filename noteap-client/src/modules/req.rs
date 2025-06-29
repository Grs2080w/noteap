use reqwest;

pub async fn make_requests(path_url: &str) -> String {

    let url = format!("your_url/{}", path_url);
    let resp = reqwest::get(url)
    .await
    .unwrap()
    .text()
    .await;
    
    match resp {
        Ok(resp) => resp,
        Err(err) => {
            println!("Error line 73 lib.rs: {}", err);
            String::from("")
        },
    }
    

}
