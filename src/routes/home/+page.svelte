<script>
  import { responseData, transactionsData } from "../../assets/store";

  // Call the postData function to make the POST request

  import ItemCard from "../../components/ItemCard.svelte";

  let products;

  let response;
  responseData.subscribe((value) => {
    response = value;
    products = response;
    // console.log(products);
  });

  let transactions;

  let returnData;
  transactionsData.subscribe((value) => {
    returnData = value;
    transactions = returnData;
    // console.log(transactions);
  });

  const allProducts = products.filter((obj) => obj.name !== "");
  const filteredProducts = allProducts.slice(1, 6);

  let item = {
    name: "AllStar Converse",
    price: "1299",
    src: "https://source.unsplash.com/EHeejuE_0MI",
  };
</script>

<div class="flex flex-row w-full gap-4">
  <div class="flex flex-col gap-4">
    <div class="w-full flex flex-col gap-6 p-8 mt-12">
      <p class="text-4xl">Popular Items</p>
      <div
        class="flex felx-row flex-wrap gap-4 justify-start w-10/12 overflow-y-auto shadow-inner"
      >
        {#each filteredProducts as product}
          <ItemCard item={product} />
        {/each}
      </div>
    </div>
    <div class="w-full flex flex-col gap-6 p-8 pb-0">
      <p class="text-4xl">All Items</p>
      <div
        class="flex felx-row flex-wrap gap-4 justify-start w-10/12 shadow-inner"
      >
        {#each allProducts as product}
          <ItemCard item={product} />
        {/each}
      </div>
    </div>
  </div>
  <div
    class="fixed right-0 bottom-0 bg-white/5 drop-shadow-lg h-[86%] w-[22%] overflow-y-auto"
  >
    <div class="flex flex-col items-end p-6 gap-3">
      <p class="text-4xl font-medium">Transactions record</p>
      {#each transactions as transaction}
        <div class="flex flex-col gap-2 items-start">
          <p class="text-3xl text-yellow-300">{transaction.amount} $HIL</p>
          <p>{transaction.created_at}</p>
        </div>
      {/each}
    </div>
  </div>
</div>
