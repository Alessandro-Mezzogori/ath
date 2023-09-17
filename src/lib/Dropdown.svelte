<script lang="ts">

    export let isOpen: boolean = false;
</script>


<div class="dropdown" class:open={isOpen}>
    <slot />
</div>

<style>
    .dropdown {
        visibility: hidden;
        opacity: 0;
        position: absolute;
        transition: all 0.5s ease;
        margin-top: 1rem;
        left: 0;
        display: none;
    }
    
    .dropdown .open {
        visibility: visible;
        display: block;
        opacity: 1;
    }
</style>