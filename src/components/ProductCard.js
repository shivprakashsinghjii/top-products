// src/components/ProductCard.js
import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const ProductCard = ({ product }) => {
  if (!product) {
    return null;
  }

  const { productName, price, rating, discount, availability } = product;

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          {productName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price: ${price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Rating: {rating}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Discount: {discount}%
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Availability: {availability}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
