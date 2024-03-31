<script>
  import { page } from "$app/stores";
  import logo from "../assets/logo.png";
</script>

<div
  class="absolute top-0 p-4 flex flex-row w-full items-center justify-between justify-self-start"
>
  <a href="/" class="gap-2 flex flex-row items-center">
    <img src={logo} alt="Bit Gebeya Logo" class="w-10" />
    <p class="text-2xl">Bit Gebeya</p>
  </a>
  {#if $page.url.pathname == "/home"}
    <button
      class="bg-green-400 text-green-950 text-2xl font-black py-2 px-6 rounded-xl drop-shadow-xl"
      >SELL ITEM</button
    >
  {/if}
</div>
