<script lang="ts">
    import "../app.css";
    import AppRail, { type AppRailButtonData } from "$lib/AppRail.svelte";
	import Drawer, { drawerComponent, type DrawerComponent } from "$lib/Drawer.svelte";
	import Footer from "$lib/Footer.svelte";
    import Titlebar from "$lib/Titlebar.svelte";
    import IconFiles from '~icons/codicon/files';
    import type { LayoutData } from './$types';
	import TestDrawerComponent from "$lib/TestDrawerComponent.svelte";
	import TestDrawerComponent2 from "$lib/TestDrawerComponent2.svelte";
	import MainLayout from "$lib/layout/MainLayout.svelte";
	import { shortcut } from "$lib/actions/shortcut";
    
    export let data: LayoutData;
        
    
    // TODO: apprailDAta e drawercomponent in a store 
    let appRailData: AppRailButtonData[]  = [
        {
            icon: IconFiles,
            key: "0",
        },
        {
            icon: IconFiles,
            key: "1",
        },
    ];

    let drawerComponents: DrawerComponent<any>[] = [
        drawerComponent<TestDrawerComponent>({
            key: "0",
            component: TestDrawerComponent,
            props: {
                test: 3
            },
        }),
        drawerComponent<TestDrawerComponent>({
            key: "1",
            component: TestDrawerComponent2,
        })
    ]
</script>

<svelte:window 
    use:shortcut={{
        trigger: data.shortcutTriggers
    }}
    />

<MainLayout>
    <Titlebar slot="titlebar"/>
    <AppRail data={appRailData} slot="sidebar"/>
    <Drawer components={drawerComponents}  slot="drawer"/>
    <Footer slot="footer"/>
    <slot slot="main"/>
</MainLayout>

<style>
    :global(:root) {
        /* general */
        --font: 'Consolas', 'Courier New', monospace;
        --font-size: 14px;

        /* title bar */
        --titlebar-bg: #1f1f1f;
        --titlebar-height: 30px;
        --titlebar-padding: 0px 0px 0px 0px;
        --titlebar-color: #d3d3d3;
        
        /* title bar buttons */	
        --titlebar-button-border: none;
        --titlebar-button-width: fit;
        --titlebar-button-height: var(--titlebar-height);
        --titlebar-button-background: transparent;
        --titlebar-button-hover-bg: #444444;
        --titlebar-button-border: #d3d3d3;
        --titlebar-button-padding: 5px 10px 5px 10px;
        --titlebar-button-border-radius: 5px;
        
        /* title bar icon buttons */
        --titlebar-icon-button-border: none;
        --titlebar-icon-width: var(--titlebar-height);
        --titlebar-icon-height: var(--titlebar-height);
        
        /* Menu */

        /* Menu Item */
        --menuitem-hover: #04395e;
        
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