import React, { useState } from "react";
import {
  Button,
  Grid,
  Typography,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import { useForm, FormProvider } from "react-hook-form";
import CustomTextField from "./CustomTextField";
import { commerce } from "./lib/commerce";

export default function AddressForm() {
  const [shippingCountries, setShippingCountries] = useState([]);
  const [shippingCountry, setShippingCountry] = useState("");
  const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
  const [shippingSubdivision, setShippingSubdivision] = useState("");
  const [shippingOptions, setShippingOptions] = useState([]);
  const [shippingOption, setShippingOption] = useState("");

  const methods = useForm();

  const fetchShippingCountries = async (checkoutTokenId) => {
    const { countries } = await commerce.services.localeListCountries(
      checkoutTokenId
    );

    console.log({ countries });
  };

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <FormProvider {...methods}>
        <form>
          <Grid container spacing={3}>
            <CustomTextField required name="firstName" label="First Name" />
            <CustomTextField required name="lastName" label="Last Name" />
            <CustomTextField required name="address1" label="Address" />
            <CustomTextField required name="email" label="Email" />
            <CustomTextField required name="city" label="City" />
            <CustomTextField required name="zip" label="ZIP / Postal code" />
            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Country</InputLabel>
              <Select fullWidth value="" onChange="">
                <MenuItem key="" value="">
                  Select Me
                </MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Subdivision</InputLabel>
              <Select fullWidth value="" onChange="">
                <MenuItem key="" value="">
                  Select Me
                </MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Options</InputLabel>
              <Select fullWidth value="" onChange="">
                <MenuItem key="" value="">
                  Select Me
                </MenuItem>
              </Select>
            </Grid>
          </Grid>
        </form>
      </FormProvider>
    </>
  );
}
