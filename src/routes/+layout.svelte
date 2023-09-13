<script lang="ts">
    import AppRail from "$lib/AppRail.svelte";
	import Footer from "$lib/Footer.svelte";
import Titlebar from "$lib/Titlebar.svelte";
    import "../app.css";
    import type { LayoutData } from './$types';
    
    export let data: LayoutData;
</script>

<div class="main-container">
    <Titlebar />
    <main class="test">
        <AppRail />
        <div style="flex-grow: 1;">
            <slot />
        </div>
    </main>
    <Footer />
</div>

<style>
    .main-container {
        display: flex;
        flex-direction: column;
        height: 100%;
    }

    .test {
        display: flex;
        flex-grow: 1;
    }

    .test2 {
        display: flex;
        flex-direction: column;
    }

    :global(:root) {
        /* general */
        --font: 'Consolas', 'Courier New', monospace;
        --font-size: 14px;

        /* title bar */
        --title-bar-bg: #1e1e1e;
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
        
        /* footer */
        --footer-bg: #181818;
        --footer-color: #d3d3d3;
        
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