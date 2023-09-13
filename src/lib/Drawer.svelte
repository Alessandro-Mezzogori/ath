<script lang="ts">
    import { drawer } from "./drawer"; 
</script>

<div class="drawer" class:open={$drawer.isOpen}>
    <ul>
        <li>test</li>
        <li>test</li>
        <li>test</li>
        <li>test</li>
        <li>test</li>
        <li>test</li>
        <li>test</li>
        <li>test</li>
        <li>test</li>
    </ul>
</div>

<style>
    .drawer {
        background: var(--drawer-bg);
        color: var(--drawer-color);
        width: 0;
    }

    .open {
        width: var(--drawer-open-width);
    }
</style>