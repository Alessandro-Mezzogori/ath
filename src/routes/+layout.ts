import type { ShortcutTrigger } from '$lib/actions/shortcut.js';
import { commandGroups } from '$lib/menu/commands.js';

export const prerender = true;
export const ssr = false;

export async function load({params}){
    
    let shortcutTriggers = commandGroups
        .flatMap(x => x.commands)
        .filter(x => x.trigger)
        .map(x => {
            return {
                ...x.trigger!,
                callback: x.callback,
            } satisfies ShortcutTrigger;
        });

    return {
        shortcutTriggers
    };
}



