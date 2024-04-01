<script lang="ts">
  import type { PageData } from "./$types";
  import { createItem } from "../../assets/store";
  import { goto } from "$app/navigation";

  async function handleSubmit(event) {
    event.preventDefault();

    // let [idstr, idnum] = productid.split("_");
    // const nextidnum = parseInt(idnum) + 1;

    // productid = `${idstr}_${nextidnum}`;

    // Call the postData function to make the POST request
    await createItem(item);

    // goto(`/product/${item.productid}`);
    goto(`/home`);
  }

  // let productid = "btgb_001";

  let item = {
    // productid: { productid },
    name: "",
    price: "",
    image: "",
  };

  export let data: PageData;
</script>

<h1 class="text-5xl font-medium p-8">Input your credentials</h1>

<div class="flex flex-col gap-4 items-center">
  <div class="flex flex-col gap-2">
    <label for="name" class="text-3xl">Product name</label>
    <input
      type="text"
      class="w-96 rounded-xl form-input h-14 text-white focus:text-white bg-transparent"
      bind:value={item.name}
    />
  </div>
  <div class="flex flex-col gap-2">
    <label for="price" class="text-3xl">Price</label>
    <input
      type="number"
      class="w-96 rounded-xl form-input h-14 text-white focus:text-white bg-transparent"
      bind:value={item.price}
    />
  </div>
  <div class="flex flex-col gap-2">
    <label for="image" class="text-3xl">Image URL</label>
    <input
      type="url"
      class="w-96 rounded-xl form-input h-14 text-white focus:text-white bg-transparent"
      bind:value={item.image}
    />
  </div>
  <button
    on:click={handleSubmit}
    type="submit"
    class="bg-green-400 text-green-950 text-4xl font-black py-4 px-12 rounded-xl drop-shadow-xl"
    >ADD PRODUCT</button
  >
</div>
