<script context="module" lang="ts">
</script>

<script lang="ts">
    export let test: number = 10;
</script>

<ol>
    {#each {length: test} as _, i}
        <li>hello</li>
    {/each}
</ol>