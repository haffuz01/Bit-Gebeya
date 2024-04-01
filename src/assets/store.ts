// Import the writable store
import { goto } from "$app/navigation";
import { writable } from "svelte/store";

// // Create a writable store to hold the response data
export const responseData = writable(null);

// Function to make the HTTP request
// async function fetchData() {
//   try {
//     const response = await fetch("http://localhost:8080/api/v1/products");
//     const data = await response.json();
//     // Update the writable store with the response data
//     responseData.set(data);
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// }

async function fetchProducts() {
  try {
    const response = await fetch("http://localhost:8080/api/v1/products");
    const data = await response.json();
    // Update the writable store with the response data
    responseData.set(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Call the fetchData function to make the HTTP request
fetchProducts();

// Function to make the POST request
export async function postUserData(user) {
  //   console.log(user.username);
  try {
    const response = await fetch("http://localhost:8080/api/v1/auth-register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Specify the content type as JSON
      },
      body: JSON.stringify({
        username: user.username,
        email: user.email,
        password: user.password,
        password_confirm: user.password_confirm,
      }), // Replace { key: 'value' } with your actual data
    });

    // Check if the request was successful
    if (response.ok) {
      const data = await response.json();
      console.log("POST request successful:", data);
      goto("/home");
    } else {
      console.error("POST request failed:", response.status);
    }
  } catch (error) {
    console.error("Error making POST request:", error);
  }
}

export async function createItem(product) {
  //   console.log(user.username);
  try {
    const response = await fetch("http://localhost:8080/api/v1/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Specify the content type as JSON
      },
      body: JSON.stringify({
        user_id: 1,
        name: product.name,
        description: "kajsdkjh jasdjkasjdb ajsdkjasnd",
        price: product.price,
        quantity: 2,
        category: "Electronics",
        image: product.image,
      }), // Replace { key: 'value' } with your actual data
    });

    // Check if the request was successful
    if (response.ok) {
      const data = await response.json();
      alert("Success: Product added.");
      console.log("POST request successful:", data);
      //   goto("/home");
    } else {
      console.error("POST request failed:", response.status);
    }
  } catch (error) {
    console.error("Error making POST request:", error);
  }
}
// createItem();

export async function loginUser(user) {
  try {
    const response = await fetch("http://localhost:8080/api/v1/auth-login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Specify the content type as JSON
      },
      body: JSON.stringify({
        email: user.email,
        password: user.password,
      }), // Replace { key: 'value' } with your actual data
    });

    // Check if the request was successful
    if (response.ok) {
      const data = await response.json();
      console.log("POST request successful:", data);
      goto("/home");
    } else {
      console.error("POST request failed:", response.status);
    }
  } catch (error) {
    console.error("Error making POST request:", error);
  }
}
