<script>
  let userCredentials = {
    phoneNo: "",
    firstName: "",
    lastName: "",
    username: "",
    password: "",
  };

  function handleSubmit() {
    console.log(userCredentials.username);
    console.log(userCredentials.password);

    // navigate("/home");
  }
</script>

<form
  on:submit|preventDefault={handleSubmit}
  class="flex flex-col gap-8 items-center"
  action="/setup-wallet"
>
  <div class="flex flex-row gap-8">
    <div class="flex flex-col gap-4 items-center">
      <div class="flex flex-col gap-2">
        <label for="phone" class="text-3xl">Phone No.</label>
        <input
          type="tel"
          class="w-96 rounded-xl form-input text-white focus:text-white bg-transparent"
          bind:value={userCredentials.phoneNo}
        />
      </div>
      <div class="flex flex-col gap-2">
        <label for="firstName" class="text-3xl">First Name</label>
        <input
          type="text"
          class="w-96 rounded-xl form-input text-white focus:text-white bg-transparent"
          bind:value={userCredentials.firstName}
        />
      </div>
      <div class="flex flex-col gap-2">
        <label for="lastName" class="text-3xl">Last Name</label>
        <input
          type="text"
          class="w-96 rounded-xl form-input text-white focus:text-white bg-transparent"
          bind:value={userCredentials.lastName}
        />
      </div>
    </div>
    <div class="flex flex-col gap-4 items-center">
      <div class="flex flex-col gap-2">
        <label for="username" class="text-3xl">Username</label>
        <input
          type="text"
          class="w-96 rounded-xl form-input text-white focus:text-white bg-transparent"
          bind:value={userCredentials.username}
        />
      </div>
      <div class="flex flex-col gap-2">
        <label for="password" class="text-3xl">Password</label>
        <input
          type="password"
          class="w-96 rounded-xl form-input text-white focus:text-white bg-transparent"
          bind:value={userCredentials.password}
        />
      </div>
      <div class="flex flex-col gap-2">
        <label for="password" class="text-3xl">Re-enter Password</label>
        <input
          type="password"
          class="w-96 rounded-xl form-input text-white focus:text-white bg-transparent"
          bind:value={userCredentials.password}
        />
      </div>
    </div>
  </div>

  <button
    type="submit"
    class="bg-green-400 text-green-950 text-4xl font-black py-4 w-64 px-12 rounded-xl drop-shadow-xl"
    >SUBMIT</button
  >
</form>
