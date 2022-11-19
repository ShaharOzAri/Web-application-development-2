import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function Product(props) {
  const productData = props.product;
  return (
    <Card sx={{ display: "flex", justifyContent: "space-between", px: "10px" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5"></Typography>
          <Typography sx={{ fontSize: "40px", textAlign: "center" }}>
            {productData.name}
          </Typography>
          <Typography sx={{ fontSize: "30px", textAlign: "center" }}>
            {productData.price}₪
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 200 }}
        image={productData.images[0]}
        alt="Live from space album cover"
      />
    </Card>
  );
}
