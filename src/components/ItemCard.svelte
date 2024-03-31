<script>
  export let item = {
    name: "Shoe Name",
    price: "price",
    src: "https://source.unsplash.com/EHeejuE_0MI",
  };
</script>

<div
  class="flex flex-col bg-white/5 gap-4 w-80 h-96 p-4 text-center rounded-lg drop-shadow-lg"
>
  <div
    style="background-image: url('https://source.unsplash.com/EHeejuE_0MI');"
    class="bg-cover bg-bottom bg-no-repeat w-full h-2/3 rounded-lg"
  />
  <p class="text-4xl">{item.name}</p>
  <p class="text-2xl self-end">{item.price} $h</p>
</div>
