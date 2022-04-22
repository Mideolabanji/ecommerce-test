import React, { useState, useEffect } from "react";
import {
  Paper,
  Stepper,
  Step,
  StepLabel,
  Divider,
  Typography,
  CircularProgress,
  Button,
} from "@material-ui/core";
import useStyles from "./CheckoutPageStyles";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import { commerce } from "./lib/commerce";

const steps = ["Shipping address", "Payment details"];

export default function CheckoutPage({ cart }) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [checkoutToken, setCheckoutToken] = useState(null);

  useEffect(() => {
    const generateToken = async () => {
      try {
        const token = await commerce.checkout.generateToken(cart.id, {
          type: "cart",
        });
        setCheckoutToken(token);
        console.log(token);
      } catch (error) {}
    };
    generateToken();
  }, [cart]);

  function Confirmation() {
    return "Confirmation";
  }

  const Form = () => {
    return activeStep === 0 ? (
      <AddressForm checkoutToken={checkoutToken} />
    ) : (
      <PaymentForm />
    );
  };

  return (
    <>
      <div className={classes.toolbar} />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper>
            {steps.map(function (step) {
              return (
                <Step key={step}>
                  <StepLabel>{step}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          {activeStep === steps.length ? (
            <Confirmation />
          ) : (
            checkoutToken && <Form />
          )}
        </Paper>
      </main>
    </>
  );
}
