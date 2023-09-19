import { openMarkdown } from "./commandFunctions";

export type Command = {
    name: string;
    command: () => void;
    shortcut?: string;
}

export type CommandGroup = {
    name: string;
    commands: Command[];
}

export const commandGroups: CommandGroup[] = [
    {
        name: 'File',
        commands: [
            {
                name: 'Open md',
                command: openMarkdown,
                shortcut: 'CommandOrControl+O'
            },
            {
                name: 'New file',
                command: () => console.log('New file'),
                shortcut: 'CommandOrControl+A'
            }
        ]
    },
    {
        name: 'Edit',
        commands: [
            {
                name: 'Undo',
                command: () => console.log('Undo'),
            }
        ]
    }
]