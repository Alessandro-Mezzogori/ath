<script lang="ts">
    export let isOpen: boolean = true;
    export let name: string;
    
    const close = () => { 
        isOpen = false
    }

    const toggle = () => { 
        isOpen = !isOpen
    };
</script>

<div>
    <button on:click|stopPropagation={toggle} class="titlebar-button">{name}</button>
    {#if isOpen}
        <div class="dropdown" role="button" tabindex="0" on:mouseleave={() => {}}>
            <ul>
                <slot />
            </ul>
        </div>
    {/if}
</div>

<style>
    .dropdown {
        background-color: var(--titlebar-bg);
        position: absolute;
        transition: all 0.5s ease;
        padding: 5px;
    }
    
    .dropdown > ul {
        margin: 0;
        padding: 0;
    }

    .titlebar-button {
        display: inline-block;
        text-align: center;
        width: var(--titlebar-button-width);
        height: var(--titlebar-button-height);
        border: var(--titlebar-button-border);
        border-radius: var(--titlebar-button-border-radius);
        color: var(--titlebar-button-text-color);
        padding: var(--titlebar-button-padding);
        font-family: var(--font);
        font-size: var(--font-size);
        background: transparent;
    }

    .titlebar-button:hover {
        background-color: var(--titlebar-button-hover-bg);
    }
</style>