<script context="module" lang="ts">

</script>

<script lang="ts">

</script>

<div class="container">
    <div class="titlebar">
        <slot name="titlebar" />
    </div>
    <div class="sidebar">
        <slot name="sidebar" />
    </div>
    <div class="drawer">
        <slot name="drawer" />
    </div>
    <div class="main">
        <slot name="main"/>
    </div>
    <div class="footer">
        <slot name="footer" />
    </div>
</div>

<style>
    .container {
        height: 100%;
        display: grid;
        grid-template-rows: auto 1fr auto;
        grid-template-columns: auto auto 1fr;
        grid-template-areas: 
            "titlebar titlebar titlebar"
            "sidebar drawer main"
            "footer footer footer";
    }
    
    .titlebar {
        grid-area: titlebar;
        background: var(--titlebar-bg);
        color: var(--titlebar-color);
        padding: var(--titlebar-padding);
    }
    
    .sidebar {
        grid-area: sidebar;
        background: var(--app-rail-bg);
        color: var(--app-rail-color);
    }
    
    .drawer {
        grid-area: drawer;
        background: var(--drawer-bg);
        color: var(--drawer-color);
    }
    
    .main {
        grid-area: main;
        background: var(--main-bg);
        color: var(--main-color);
    }
    
    .footer {
        grid-area: footer;
        background: var(--footer-bg);
        color: var(--footer-color);
    }
</style>