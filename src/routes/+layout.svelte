<script lang="ts">
    import "../app.css";
    import AppRail from "$lib/AppRail.svelte";
	import Drawer from "$lib/Drawer.svelte";
	import Footer from "$lib/Footer.svelte";
    import Titlebar from "$lib/Titlebar.svelte";
    import IconFiles from '~icons/codicon/files';
    import type { LayoutData } from './$types';
	import type { SvelteComponent } from "svelte";
	import type { SvelteHTMLElements } from "svelte/elements";
	import TestDrawerComponent from "$lib/TestDrawerComponent.svelte";

    
    export let data: LayoutData;
    
    type appRailData = {
        icon: SvelteComponent<SvelteHTMLElements['svg']>;
        drawer: SvelteComponent;
    };

    let appRailData = [
        {
            icon: IconFiles,
            drawer: TestDrawerComponent
        },
        {
            icon: IconFiles,
            drawer: TestDrawerComponent
        },
        {
            icon: IconFiles,
            drawer: TestDrawerComponent
        },
    ];
</script>

<div class="root-container">
    <Titlebar />
    <div class="central-container">
        <AppRail />
        <Drawer />
        <main class="main">
            <slot />
        </main>
    </div>
    <Footer />
</div>

<style>
    .root-container {
        display: flex;
        flex-direction: column;
        height: 100%;
    }
    
    .central-container {
        display: flex;
        flex-grow: 1;
    }
    
    .main {
        background: var(--main-bg);
        color: var(--main-color);
    }

    :global(:root) {
        /* general */
        --font: 'Consolas', 'Courier New', monospace;
        --font-size: 14px;

        /* title bar */
        --title-bar-bg: #1f1f1f;
        --title-bar-height: 30px;
        --title-bar-padding: 5px 0 5px 0;
        
        /* title bar buttons */	
        --title-bar-button-border: none;
        --title-bar-button-width: fit;
        --title-bar-button-height: var(--title-bar-height);
        --title-bar-button-background: transparent;
        --title-bar-button-text-color: #d3d3d3;
        --title-bar-button-hover-bg: #444444;
        --title-bar-button-border: #d3d3d3;
        --title-bar-button-padding: 5px 10px 5px 10px;
        --title-bar-button-border-radius: 5px;
        
        /* app rail */
        --app-rail-bg: #181818;
        --app-rail-color: #d3d3d3;

        /* apprail buttons */	
        --apprail-button-border: none;
        --apprail-button-width: 50px;
        --apprail-button-height: 50px;
        --apprail-button-background: transparent;
        --apprail-button-color: #d3d3d3;
        --apprail-button-hover-bg: #444444;
        --apprail-button-border: #d3d3d3;
        --apprail-button-padding: 5px 10px 5px 10px;
        --apprail-button-border-radius: 5px;
        
        /* drawer */
        --drawer-bg: var(--app-rail-bg);
        --drawer-color: var(--app-rail-color);
        --drawer-open-width: 300px;

        
        /* footer */
        --footer-bg: #181818;
        --footer-color: #d3d3d3;
        
        /* main */
        --main-bg: #1f1f1f;
        --main-color: #d3d3d3;
        
        /* separator */
        --tile-separator-bg: #333333;
        
        font-family: var(--font);
        font-size: var(--font-size);
    }
    
    :global(body){
        margin: 0;
        padding: 0;
        height: 100%;
    }
    
    :global(html){
        height: 100%;
    }
</style>