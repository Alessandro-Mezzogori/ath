import type { ShortcutTrigger } from "$lib/actions/shortcut";
import { openMarkdown } from "./commandFunctions";

export interface Command {
    name: string;
    trigger?: Omit<ShortcutTrigger, 'callback'> & { shortcutText: string };
    callback: () => void;
}

export interface CommandGroup {
    name: string;
    commands: Command[];
}

export const commandGroups: CommandGroup[] = [
    {
        name: 'File',
        commands: [
            {
                name: 'Open md',
                callback: openMarkdown,
                trigger: {
                    key: 'o',
                    modifier: ['ctrl'],
                    shortcutText: 'Ctrl+O',
                }
            },
            {
                name: 'New file',
                callback: () => console.log('New file'),
                trigger: {
                    key: 'a',
                    modifier: ['ctrl'],
                    shortcutText: 'Ctrl+A',
                },
            },
        ]
    },
    {
        name: 'Edit',
        commands: [
            {
                name: 'Undo',
                callback: () => console.log('Undo'),
            }
        ]
    }
]