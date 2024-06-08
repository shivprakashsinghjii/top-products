// src/api.js
export const fetchTopProducts = async (
  company,
  category,
  minPrice,
  maxPrice,
  topN
) => {
  const url = `http://20.244.56.144/test/companies/${company}/categories/${category}/products?top=${topN}&minPrice=${minPrice}&maxPrice=${maxPrice}`;
  console.log("Fetching from URL:", url);
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }
    const data = await response.json();
    console.log("Fetched data:", data);
    return data;
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return [];
  }
};
