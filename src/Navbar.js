import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import {
  AppBar,
  IconButton,
  Menu,
  Typography,
  Badge,
  MenuItem,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import useStyles from "./NavbarStyles";

export default function Navbar({ totalItems }) {
  const classes = useStyles();
  return (
    <AppBar position="fixed" className={classes.appBar} color="inherit">
      <Toolbar>
        <Typography variant="h5" className={classes.title} color="inherit">
          <img src="" className={classes.image} alt="Test.js" height="25px" />
          Test.js
        </Typography>
        <div className={classes.grow} />
        <div className={classes.button}>
          <IconButton aria-label="show cart items" color="inherit">
            <Badge badgeContent={totalItems} color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
}
