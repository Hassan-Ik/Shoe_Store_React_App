import React from 'react'
import {Card, CardMedia, CardContent, CardActions, Typography, IconButton} from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import useStyles from './style';

const Product = ({ name, id, img }) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={img} title={name} />
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant="p" gutterBottom overflow='hidden' className={classes.productName}>
                        {name}
                    </Typography> 
                    <Typography variant="p" className={classes.price}>
                        {id}
                    </Typography>
                </div>
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
                <IconButton aria-label="Add to Cart" className={classes.iconButton} >
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
        </Card>

    );
}

export default Product;
//onClick={() => onAddToCart(id, 1)}