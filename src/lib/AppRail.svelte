<script lang="ts">
    import IconFiles from '~icons/codicon/files';
    import { drawer } from './drawer';

    let lastClicked: string | undefined = undefined;
    function test(key: string){
        let isOpen = $drawer;
        let currentElement = $drawer.element;
        if(isOpen && lastClicked === key){
            drawer.set({
               isOpen: false,
               element: currentElement 
            });

            return;
        }
        
        lastClicked = key;
        if(!isOpen){
            drawer.set({
               isOpen: true,
               element: currentElement 
            });

        }
    }
</script>

<div class="apprail">
    {#each {length: 3} as _, i}
    <button class="apprail-button" on:click={() => test(i.toString())}>
       <IconFiles /> 
    </button>
    {/each}
</div>

<style>
    .apprail {
        background: var(--app-rail-bg);
        color: var(--app-rail-color);
    }

    .apprail-button {
        display: inline-block;
        text-align: center;
        width: var(--apprail-button-width);
        height: var(--apprail-button-height);
        border: var(--apprail-button-border);
        border-radius: var(--apprail-button-border-radius);
        color: var(--apprail-button-color);
        padding: var(--apprail-button-padding);
        background: var(--apprail-button-background);
    }
    
    .apprail-button:hover {
        filter: brightness(1.4);
    }
</style>