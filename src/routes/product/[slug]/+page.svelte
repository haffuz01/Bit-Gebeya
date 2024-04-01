<script>
  import { onMount } from "svelte";
  import ItemCard from "../../../components/ItemCard.svelte";
  import { page } from "$app/stores";
  import { responseData } from "../../../assets/store";

  //   export let product;

  //   /** @types {import ('./$types').PageServerLoad} */

  //   async function load({ params }) {
  $: slug = $page.params.slug;
  console.log(slug);
  let products;
  let item;
  let response;
  responseData.subscribe((value) => {
    console.log(value);
    if (value != null) {
      response = value;
      const wantedProduct = parseInt(slug);
      products = response;
      console.log(products, wantedProduct);
      item = products.find((p) => p.id == slug);
      console.log("Item: ", item);
    }
  });
  //   }

  //   import ItemCard from "../../../components/ItemCard.svelte";
  //   import item from "../../../routes/home/+page.svelte";
  //   console.log({ load });
</script>

<!-- <h1>{item}</h1> -->

{#if item == undefined}
  <p>Loading...</p>
{:else}
  <div class="flex flex-col items-center gap-6 p-16">
    <ItemCard {item} />
    <button
      type="submit"
      class="bg-green-400 text-green-950 text-4xl font-black py-4 px-12 rounded-xl drop-shadow-xl"
      >PURCHASE</button
    >
  </div>
{/if}
