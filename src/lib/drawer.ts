import type { SvelteComponent } from "svelte";
import { writable } from "svelte/store";

export type DrawerStore = {
    isOpen: boolean;
    key?: string;
}

function createDrawerStore(){
    const drawerStore = writable<DrawerStore>({
        isOpen: false,
        key: undefined,
    });

    return drawerStore;
}

// TODO drawer typesafe for keys with as const 

export const drawer = createDrawerStore();