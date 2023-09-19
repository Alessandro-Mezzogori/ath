
#[tauri::command]
pub async fn load_file_contents(path: &str) -> Result<String, String>{
  match std::fs::read_to_string(path) {
    Ok(contents) => Ok(contents),
    Err(_) => Err("Failed to read file".to_string())
  }
}

#[tauri::command]
pub async fn save_contents_to_file(path: &str, contents: &str) -> Result<(), String> {
  match std::fs::write(path, contents) {
    Ok(_) => Ok(()),
    Err(_) => Err("Failed to write file".to_string())
  }
}


