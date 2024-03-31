<script>
  let walletKey = ``;
  let existing = false;

  const sampleWallet = "1BoatSLRHtKNngkdXEeobR76b53LETtpyT";
  const samplePhrase =
    "carpet cat flower chair foot river make image amazing three say shoe";

  function handleWalletCopy() {
    navigator.clipboard.writeText(sampleWallet);
    alert("Wallet address copied to clipboard");
  }
  function handlePhraseCopy() {
    navigator.clipboard.writeText(samplePhrase);
    alert("Recovery seed phrase copied to clipboard");
  }
</script>

<h1 class="text-5xl font-medium pt-24">Wallet Setup</h1>
<div class="flex flex-col gap-8 items-center">
  <button
    on:click={() => (existing = !existing)}
    class="flex flex-row gap-3 items-center"
  >
    <input
      type="checkbox"
      bind:checked={existing}
      class="form-checkbox bg-transparent rounded-sm"
    />
    <p class="text-3xl">Import existing wallet</p>
  </button>
  {#if existing}
    <div class="flex flex-col items-center gap-4">
      <label for="username" class="text-3xl">Recovery seed phrase</label>
      <textarea
        class="w-[520px] px-4 py-2 resize-none rounded-xl form-textarea text-xl font-extralight italic text-white focus:text-white bg-transparent"
        rows="3"
        {walletKey}
      ></textarea>
      <a href="/home">
        <button
          type="submit"
          class="bg-green-400 text-green-950 text-4xl font-black py-4 px-12 rounded-xl drop-shadow-xl"
          >ADD WALLET</button
        >
      </a>
    </div>
  {:else}
    <div class="w-[90vw] flex flex-row gap-4 items-stretch">
      <div class="flex flex-col w-1/2 h-80 gap-4 p-4 border rounded-lg">
        <div class="flex flex-row items-center gap-4">
          <p class="text-3xl">Public key</p>
          <button on:click={handleWalletCopy}
            ><span class="material-symbols-outlined">
              content_copy
            </span></button
          >
        </div>
        <p class="opacity-60 text-4xl text-ellipsis overflow-hidden max-w-fit">
          {sampleWallet}
        </p>
        <p class="font-sans opacity-90 pt-8">
          * use this address to recieve payments
        </p>
      </div>
      <div class="flex flex-col w-1/2 h-80 gap-4 p-4 border rounded-lg">
        <div class="flex flex-row items-center gap-4">
          <p class="text-3xl">Recovery seed phrase</p>
          <button on:click={handlePhraseCopy}
            ><span class="material-symbols-outlined">
              content_copy
            </span></button
          >
        </div>
        <p class="opacity-60 text-4xl text-ellipsis overflow-hidden max-w-fit">
          {samplePhrase}
        </p>
        <p class="font-sans opacity-90 pt-8">
          * keep this in a safe place, anyone with this code can access this
          wallet
        </p>
      </div>
    </div>
    <a href="/home">
      <button
        type="submit"
        class="bg-green-400 text-green-950 text-4xl font-black py-4 px-12 rounded-xl drop-shadow-xl"
        >PROCEED</button
      >
    </a>
  {/if}
</div>

<style>
  .material-symbols-outlined {
    font-variation-settings:
      "FILL" 1,
      "wght" 400,
      "GRAD" 0,
      "opsz" 48;
  }
</style>
