<script>
  import { onMount } from "svelte";
  import ItemCard from "../../../components/ItemCard.svelte";
  import { page } from "$app/stores";
  import { purchase, responseData } from "../../../assets/store";

  let productItem = {
    buyer_id: "",
    quantity: "1",
    product_id: "",
  };

  $: slug = $page.params.slug;
  let products;
  let item;
  let response;
  responseData.subscribe((value) => {
    console.log(value);
    if (value != null) {
      response = value;
      const wantedProduct = parseInt(slug);
      products = response;
      // console.log(products, wantedProduct);
      item = products.find((p) => p.id == slug);
      // console.log("Item: ", item);
    }
  });

  function handleSubmit() {
    if (item != undefined) {
      // console.log(item.user_id)
      // console.log("Slug: ", slug);
      productItem.buyer_id = item.user_id;
      productItem.product_id = slug;
    }
    // @ts-ignore
    purchase(productItem);
  }
</script>

<!-- <h1>{item}</h1> -->

{#if item == undefined}
  <p>Loading...</p>
{:else}
  <div class="flex flex-col items-center gap-6 p-16">
    <ItemCard {item} />
    <!-- <div class="flex flex-col gap-16 items-center">
      <div class="flex flex-row gap-4 items-center">
        <p class="text-4xl">Quantity</p>
        <input
          type="number"
          class="w-16 rounded-xl text-3xl form-input text-white focus:text-white bg-transparent"
          bind:value={productItem.quantity}
        />
      </div> -->
    <button
      on:click={handleSubmit}
      type="submit"
      class="bg-green-400 text-green-950 text-4xl font-black py-4 px-12 rounded-xl drop-shadow-xl"
      >PURCHASE</button
    >
  </div>
  <!-- </div> -->
{/if}
