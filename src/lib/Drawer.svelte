<script context="module" lang="ts">
	import type { SvelteComponent } from "svelte";
    
    export type DrawerComponent<T extends SvelteComponent<any, any, any>> = {
        key: string;
        component: typeof SvelteComponent<any, any, any>;
        props?: T extends SvelteComponent<infer P, any, any> ? P : never;
        // events?: T extends SvelteComponent<any, infer E, any> ? E : never;
        // slots?: T extends SvelteComponent<any, any, infer S> ? S : never;
    };

    export function drawerComponent<F extends SvelteComponent<any, any, any>>(v: DrawerComponent<F>): DrawerComponent<F> {
        return v;
    }
</script>

<script lang="ts">
    import { drawer } from "./drawer"; 
    
    export let components: DrawerComponent<any>[];
    
    let key: string | undefined = undefined;
    let currentComponent: DrawerComponent<any> | undefined;
    $: { 
        key = $drawer.key;
        currentComponent = components.find((component) => component.key === key);
    }
</script>


<div class="drawer">
    <svelte:component 
        this={currentComponent?.component} 
        {...currentComponent?.props}
        />
</div>

<style>
    .drawer {
        cursor: default;
        background: var(--drawer-bg);
        color: var(--drawer-color);
        height: 100%;
        line-height: 100%;
    }
</style>