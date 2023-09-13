import type { SvelteComponent } from "svelte";
import { writable } from "svelte/store";

export type DrawerStore = {
    isOpen: boolean;
    element: SvelteComponent | undefined;
}

function createDrawerStore(){
    const drawerStore = writable<DrawerStore>({
        isOpen: false,
        element: undefined,
    });

    return drawerStore;
}

export const drawer = createDrawerStore();