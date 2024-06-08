// src/components/ProductList.js
import React, { useState, useEffect } from "react";
import {
  Grid,
  Container,
  TextField,
  Button,
  Box,
  CircularProgress,
  Typography,
} from "@mui/material";
import ProductCard from "./ProductCard";
import { fetchTopProducts } from "../api";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [company, setCompany] = useState("AMZ");
  const [category, setCategory] = useState("Laptop");
  const [minPrice, setMinPrice] = useState(1);
  const [maxPrice, setMaxPrice] = useState(10000);
  const [topN, setTopN] = useState(10);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFetchProducts = async () => {
    console.log("Fetching products with inputs:", {
      company,
      category,
      minPrice,
      maxPrice,
      topN,
    });
    setLoading(true);
    setError("");
    const data = await fetchTopProducts(
      company,
      category,
      minPrice,
      maxPrice,
      topN
    );
    if (data.length === 0) {
      setError("No products found. Please check the inputs.");
    }
    setProducts(data);
    setLoading(false);
  };

  useEffect(() => {
    handleFetchProducts();
  }, []);

  return (
    <Container>
      <Box mb={4}>
        <TextField
          label="Company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          margin="normal"
        />
        <TextField
          label="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          margin="normal"
        />
        <TextField
          label="Min Price"
          type="number"
          value={minPrice}
          onChange={(e) => setMinPrice(parseInt(e.target.value))}
          margin="normal"
        />
        <TextField
          label="Max Price"
          type="number"
          value={maxPrice}
          onChange={(e) => setMaxPrice(parseInt(e.target.value))}
          margin="normal"
        />
        <TextField
          label="Top N"
          type="number"
          value={topN}
          onChange={(e) => setTopN(parseInt(e.target.value))}
          margin="normal"
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleFetchProducts}
        >
          Fetch Products
        </Button>
      </Box>
      {loading ? (
        <CircularProgress />
      ) : error ? (
        <Typography color="error">{error}</Typography>
      ) : (
        <Grid container spacing={3}>
          {products.map((product, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default ProductList;
