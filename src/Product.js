import React from "react";
import {
  Card,
  CardMedia,
  Typography,
  IconButton,
  CardContent,
  CardActions,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import useStyles from "./Styles";

export default function ({ product }) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia
        className="classes.media"
        component="img"
        image={product.image}
        title={product.name}
      />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant="h5" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="h5">{product.price}</Typography>
        </div>
        <Typography variant="body2" color="textSecondary">
          {product.description}
        </Typography>
        <CardActions disableSpacing className={classes.cardActions}>
          <IconButton aria-label="Add to Cart">
            <AddShoppingCart />
          </IconButton>
        </CardActions>
      </CardContent>
    </Card>
  );
}
