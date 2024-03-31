<script>
  import { loginUser } from "../assets/store";

  // Function to handle form submission
  async function handleSubmit(event) {
    event.preventDefault();

    // Call the postData function to make the POST request
    await loginUser(userCredentials);
  }

  let userCredentials = {
    username: "",
    password: "",
  };

  // function handleSubmit() {
  //   console.log(username);
  //   console.log(password);
  // }
</script>

<form
  on:submit|preventDefault={handleSubmit}
  class="flex flex-col gap-4 items-center"
  action="/Home"
>
  <div class="flex flex-col gap-2">
    <label for="username" class="text-3xl">Username</label>
    <input
      type="text"
      class="w-96 rounded-xl form-input h-14 text-white focus:text-white bg-transparent"
      bind:value={userCredentials.username}
    />
  </div>
  <div class="flex flex-col gap-2">
    <label for="password" class="text-3xl">Password</label>
    <input
      type="password"
      class="w-96 rounded-xl form-input h-14 text-white focus:text-white bg-transparent"
      bind:value={userCredentials.password}
    />
  </div>
  <a href="/home">
    <button
      on:click={handleSubmit}
      type="submit"
      class="bg-green-400 text-green-950 text-4xl font-black py-4 w-64 px-12 rounded-xl drop-shadow-xl"
      >SUBMIT</button
    >
  </a>
</form>
