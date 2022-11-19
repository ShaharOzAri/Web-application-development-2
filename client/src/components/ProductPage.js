import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Divider } from "@mui/material";
import { useParams } from "react-router-dom";
import productsData from "../ProductData.json";

export default function ProductPage() {
  let { id } = useParams();

  const productData = productsData[id];

  return productData != null ? (
    <Container maxWidth="xxxl">
      <Grid
        container
        spacing={10}
        columns={12}
        alignItems="center"
        justify="center"
      >
        <Grid
          item
          xs={12}
          md={6}
          alignItems="center"
          justify="center"
          sx={{ mb: 5, mt: 10 }}
        >
          <ImageList sx={{ width: 720, height: 720 }} cols={2} rowHeight={0}>
            {productData.images.map((item, index) => (
              <ImageListItem key={index}>
                <img
                  src={`${item}?w=164&h=164&fit=crop&auto=format`}
                  srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  alt={productsData.name}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Grid>
        <Grid item xs={12} md={6} alignItems="center" justify="center">
          <Box
            component="form"
            noValidate
            sx={{
              mb: 45,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              component="h1"
              variant="h7"
              color={"black"}
              align="center"
            >
              {productData.name}
            </Typography>
            <Typography
              component="h2"
              variant="h6"
              color={"black"}
              align="center"
            >
              {productData.price}₪
            </Typography>
            <Divider sx={{ my: "20px" }} />
            <Typography
              component="h2"
              color={"black"}
              fontWeight="bold"
              align="center"
            >
              You Can Buy at:
            </Typography>
            <Typography component="h3" color={"black"} align="center">
              {productData.shop}
            </Typography>
            <Divider sx={{ my: "20px" }} />
            <Typography
              component="h2"
              color={"black"}
              fontWeight="bold"
              align="center"
            >
              Product Description:
            </Typography>
            <Typography component="h3" color={"black"} align="center">
              {productData.description}
            </Typography>
            <Divider sx={{ my: "20px" }} />
          </Box>
        </Grid>
      </Grid>
    </Container>
  ) : (
    ""
  );
}
