import { Grid,} from '@material-ui/core';
import React from 'react'
import useStyles from './style';
import Product from '../Product/Product';


const Feed = ({ products }) => {
    const classes = useStyles();

    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justify="center" spacing={4}>
                {Object.entries(products).map(([slug, {id, name, img}]) => (
                    <Grid item key={id} xs={12} sm={6} md={4} lg={3}>
                        <Product name={name} id={id} img={img}/>
                    </Grid>
                        ))}
            </Grid>
        </main>
    )
}

export default Feed;

//onAddToCart={onAddToCart}