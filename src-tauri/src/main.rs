// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

mod files;
use files::{load_file_contents, save_contents_to_file};

fn main() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![
      load_file_contents,
      save_contents_to_file,
    ])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
