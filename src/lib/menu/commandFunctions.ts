import { open } from '@tauri-apps/api/dialog';
import { invoke } from '@tauri-apps/api/tauri';

export async function openMarkdown(){
        console.log("openMarkdown");
        const selected = await open({
            multiple: false,
            filters: [{
                name: 'Markdown',
                extensions: ['md']
            }]
        });
        
        if(!Array.isArray(selected) && selected !== null){
           console.log(selected);
           
           // TODO open file in editor in new tab? 
           invoke("load_file_contents", {
               path: selected
           }).then(x => console.log(x))
           .catch(err => console.error(err));
        }
    }
    