import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product";

export default function Products() {
  const products = [
    {
      id: 1,
      name: "Shoes",
      description: "running shoes",
      price: "$30",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-3iFJ0XC6mxw2sf--HbKyL4Bmqmb6BpzekJd9XVRMH4o0OZUBSkFfQc4OvXCErDbuCIM&usqp=CAU",
    },
    {
      id: 2,
      name: "Dress",
      description: "slip dress",
      price: "$10",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT87WOT056Pa6PFjpTGtoHvcDuGYVUcHAuOkXHCn3N8&s",
    },
  ];
  return (
    <main>
      <Grid container justifyContent="center" spacing={4}>
        {products.map(function (product) {
          return (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Product product={product} />
            </Grid>
          );
        })}
      </Grid>
    </main>
  );
}
