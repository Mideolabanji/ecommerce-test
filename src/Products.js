import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product";
import useStyles from "./ProductsStyles";

const products = [
  {
    id: 1,
    name: "Shoes",
    description: "running shoes",
    price: "$30",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAIz-0buQYqHSlTNtuWYAtBHxBbKkugSpfQ6Gd6x7AktpD1ZQStOTiyUmC6KwrIb4s2d0&usqp=CAU",
  },
  {
    id: 2,
    name: "Sunglasses",
    description: "stylish sunglasses",
    price: "$10",
    image:
      "https://assets.vogue.com/photos/60f0a372ffbabf731bdd26c5/master/w_1280,c_limit/slide_19.jpg",
  },
];

export default function Products() {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
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
