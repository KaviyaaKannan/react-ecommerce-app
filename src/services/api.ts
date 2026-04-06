// src/services/api.ts

const BASE_URL = "http://localhost:5000";

export const getProducts = async () => {
  try {
    const res = await fetch(`${BASE_URL}/products`);
    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }
    return await res.json();
  } catch (error) {
    console.error("API Error:", error);
    return [];
  }
};