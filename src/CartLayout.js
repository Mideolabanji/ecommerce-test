import React from "react";
import { Link } from "react-router-dom";
import { Container, Typography, Button, Grid } from "@material-ui/core";
import useStyles from "./CartLayoutStyles";
import CartItem from "./CartItem";

export default function CartLayout({
  cart,
  handleUpdateCartQty,
  handleRemoveFromCart,
  handleEmptyCart,
}) {
  const isEmpty = cart.line_items === 0;
  const classes = useStyles();

  function EmptyCart() {
    return (
      <Typography variant={classes.subtitle1}>
        You have no items in your shopping cart,{" "}
        <Link className={classes.link} to="/">
          start adding some
        </Link>
        !
      </Typography>
    );
  }

  function FilledCart() {
    if (cart.line_items) {
      return (
        <>
          <Grid container spacing={3}>
            {cart.line_items.map(function (item) {
              return (
                <Grid item xs={12} sm={4} key={item.id}>
                  <CartItem
                    item={item}
                    handleUpdateCartQty={handleUpdateCartQty}
                    handleRemoveFromCart={handleRemoveFromCart}
                  />
                </Grid>
              );
            })}
          </Grid>
          <div className={classes.cardDetails}>
            <Typography variant="h4">
              Subtotal: {cart.subtotal.formatted_with_symbol}
            </Typography>
          </div>
          <div>
            <Button
              className={classes.emptyButton}
              size="large"
              color="secondary"
              variant="contained"
              type="button"
              onClick={handleEmptyCart}
            >
              Empty Cart
            </Button>
            <Button
              className={classes.checkoutButton}
              size="large"
              color="primary"
              variant="contained"
              type="button"
            >
              Checkout
            </Button>
          </div>
        </>
      );
    } else {
      return null;
    }
  }

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography variant="h3" className={classes.title} gutterBottom>
        Your Shopping Cart
      </Typography>
      {isEmpty ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
}
