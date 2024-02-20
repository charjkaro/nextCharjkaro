// actions/handleContactForm.js
"use server";

export async function handleContactForm(formData) {
  try {
    const response = await fetch("http://localhost:3000/api/hello", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data; // Return the data received from the server
  } catch (error) {
    console.error("Something went wrong", error);
    throw error; // Re-throw the error so it can be handled by the caller
  }
}
