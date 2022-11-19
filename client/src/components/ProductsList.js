import * as React from "react";
import Product from "./Product";
import Container from "@mui/material/Container";
import { Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { CardActionArea } from "@mui/material";
import products from "../ProductData.json";

export default function ProductsList() {
  const navigate = useNavigate();
  const navigateToProductPage = (i) => {
    navigate(`/product/${i}`);
  };

  return (
    <Container maxWidth="sm">
      <Divider
        sx={{
          fontSize: 25,
          color: "black",
          textTransform: "uppercase",
          paddingBottom: "15px",
        }}
      >
        My Shopping List
      </Divider>
      {products.map((product, i) => (
        <CardActionArea
          onClick={() => navigateToProductPage(i)}
          sx={{ margin: "15px" }}
        >
          <Product product={product} key={i}></Product>
        </CardActionArea>
      ))}
    </Container>
  );
}
