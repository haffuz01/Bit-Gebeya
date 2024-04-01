<script>
  import logo from "../assets/logo.png";

  export let item = {
    id: "1",
    name: "Shoe Name",
    price: "price",
    src: "",
  };
</script>

<a href={`/product/${item.id}`}>
  <div
    class="flex flex-col bg-white/5 gap-4 w-80 h-96 p-4 text-center rounded-lg drop-shadow-lg"
  >
    <div
      style="background-image: url('{(item.image != null && item.image) ||
        logo}');"
      class="bg-cover bg-bottom bg-no-repeat w-full h-2/3 rounded-lg"
    />
    <p class="text-4xl">{item.name}</p>
    <p class="text-2xl self-end">{item.price} $h</p>
  </div>
</a>
