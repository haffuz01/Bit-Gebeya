<!-- <script>
  import logo from "../assets/logo.png";
</script>

<img src={logo} alt="Bit Gebeya Logo" class="w-44" />
<h1 class="text-7xl font-bold">Bit Gebeya</h1>
<p>Your one stop crypto marketplace</p>
<div class="flex flex-row gap-8 p-4">
  <a href="/login">
    <button
      class="bg-green-400 text-green-950 text-4xl font-black py-4 w-64 px-12 rounded-xl drop-shadow-xl"
      >LOGIN</button
    >
  </a>
  <a href="/signup">
    <button
      class="bg-green-400 text-green-950 text-4xl font-black py-4 w-64 px-12 rounded-xl drop-shadow-xl"
      >SIGN UP</button
    >
  </a>
</div> -->

<script>
  import { responseData } from "../assets/store";

  // Subscribe to the responseData store to access the response data
  let response;
  responseData.subscribe((value) => {
    response = value;
    console.log(response);
  });

  // Import the function to make HTTP requests
  // import postData from "../assets/store";

  // // Function to handle form submission
  // async function handleSubmit(event) {
  //   event.preventDefault();

  //   // Call the postData function to make the POST request
  //   await postData();
  // }
</script>

{#if response}
  <p>Response Data: {JSON.stringify(response)}</p>
{:else}
  <p>Loading...</p>
{/if}

<!-- <form on:submit={handleSubmit}>
  Form inputs
  <button type="submit">Submit</button>
</form> -->
