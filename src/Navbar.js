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
import { Link, useLocation } from "react-router-dom";
import useStyles from "./NavbarStyles";

export default function Navbar({ totalItems }) {
  const classes = useStyles();
  const location = useLocation();
  return (
    <AppBar position="fixed" className={classes.appBar} color="inherit">
      <Toolbar>
        <Typography
          component={Link}
          to="/"
          variant="h5"
          className={classes.title}
          color="inherit"
        >
          Test.js
          <img src="" className={classes.image} height="25px" />
        </Typography>
        <div className={classes.grow} />
        <div className={classes.button}>
          {location.pathname === "/" && (
            <IconButton
              component={Link}
              to="/cart"
              aria-label="show cart items"
              color="inherit"
            >
              <Badge badgeContent={totalItems} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
}
