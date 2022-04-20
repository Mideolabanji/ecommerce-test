import React, { useState } from "react";
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

const steps = ["Shipping address", "Payment details"];

export default function CheckoutPage() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);

  function Confirmation() {
    return "Confirmation";
  }

  const Form = () => {
    return activeStep === 0 ? <AddressForm /> : <PaymentForm />;
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
          {activeStep === steps.length ? <Confirmation /> : <Form />}
        </Paper>
      </main>
    </>
  );
}
