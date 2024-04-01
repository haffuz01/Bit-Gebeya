<script>
  import { responseData } from "../../assets/store";

  // Call the postData function to make the POST request

  import ItemCard from "../../components/ItemCard.svelte";

  let products;

  let response;
  responseData.subscribe((value) => {
    response = value;
    products = response;
    console.log(products);
  });

  const filteredProducts = products.filter((obj) => obj.name !== "");

  let item = {
    name: "AllStar Converse",
    price: "1299",
    src: "https://source.unsplash.com/EHeejuE_0MI",
  };

  // console.log(response);
</script>

<div class="flex flex-col gap-4">
  <div class="w-full flex flex-col gap-6 p-8 mt-12">
    <p class="text-4xl">Popular Items</p>
    <div
      class="flex felx-row flex-wrap gap-4 justify-start w-10/12 h-[400px] overflow-y-auto"
    >
      {#each filteredProducts as product}
        <ItemCard item={product} />
      {/each}
    </div>
  </div>
  <div class="w-full flex flex-col gap-6 p-8">
    <p class="text-4xl">All Items</p>
    <div
      class="flex felx-row flex-wrap gap-4 justify-start w-10/12 h-[400px] overflow-y-auto"
    >
      {#each filteredProducts as product}
        <ItemCard item={product} />
      {/each}
    </div>
  </div>
</div>
