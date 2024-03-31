<script>
  import Header from "../components/Header.svelte";
  import "../app.css";
  import { page } from "$app/stores";
</script>

{#if $page.url.pathname !== "/"}
  <Header />
{/if}
<div
  class="flex flex-col items-center justify-center gap-4 text-xl h-screen w-screen pb-24"
>
  <slot />
</div>
