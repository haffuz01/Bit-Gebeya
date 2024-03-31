<script>
  import { postUserData } from "../assets/store";

  // Function to handle form submission
  async function handleSubmit(event) {
    event.preventDefault();

    // Call the postData function to make the POST request
    await postUserData(userCredentials);
  }

  let userCredentials = {
    username: "",
    email: "",
    // firstName: "",
    // lastName: "",
    password: "",
    passwrod_confirm: "",
  };

  // function handleSubmit() {
  //   console.log(userCredentials.username);
  //   console.log(userCredentials.password);
  // }
</script>

<form
  on:submit|preventDefault={handleSubmit}
  class="flex flex-col gap-8 items-center"
  action="/setup-wallet"
>
  <div class="flex flex-row gap-8">
    <div class="flex flex-col gap-4 items-center">
      <div class="flex flex-col gap-2">
        <label for="email" class="text-3xl">Email Address</label>
        <input
          type="email"
          class="w-96 rounded-xl form-input h-14 text-white focus:text-white bg-transparent"
          bind:value={userCredentials.email}
        />
      </div>
      <!-- <div class="flex flex-col gap-2">
        <label for="firstName" class="text-3xl">First Name</label>
        <input
          type="text"
          class="w-96 rounded-xl form-input h-14 text-white focus:text-white bg-transparent"
          bind:value={userCredentials.firstName}
        />
      </div> 
      <div class="flex flex-col gap-2">
        <label for="lastName" class="text-3xl">Last Name</label>
        <input
          type="text"
          class="w-96 rounded-xl form-input h-14 text-white focus:text-white bg-transparent"
          bind:value={userCredentials.lastName}
        />
      </div> -->
      <div class="flex flex-col gap-2">
        <label for="username" class="text-3xl">Username</label>
        <input
          type="text"
          class="w-96 rounded-xl form-input h-14 text-white focus:text-white bg-transparent"
          bind:value={userCredentials.username}
        />
      </div>
    </div>
    <div class="flex flex-col gap-4 items-center">
      <div class="flex flex-col gap-2">
        <label for="password" class="text-3xl">Password</label>
        <input
          type="password"
          class="w-96 rounded-xl form-input h-14 text-white focus:text-white bg-transparent"
          bind:value={userCredentials.password}
        />
      </div>
      <div class="flex flex-col gap-2">
        <label for="password" class="text-3xl">Re-enter Password</label>
        <input
          type="password"
          class="w-96 rounded-xl form-input h-14 text-white focus:text-white bg-transparent"
          bind:value={userCredentials.passwrod_confirm}
        />
      </div>
    </div>
  </div>

  <a href="/setup-wallet">
    <button
      on:click={handleSubmit}
      type="submit"
      class="bg-green-400 text-green-950 text-4xl font-black py-4 w-64 px-12 rounded-xl drop-shadow-xl"
      >SUBMIT</button
    >
  </a>
</form>
