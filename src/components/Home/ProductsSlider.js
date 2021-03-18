import React, {useState} from 'react'
//import Slider from 'react-slick';
import { Card, CardActionArea,CardMedia, CardActions, Typography, Button, Grid } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const useStyles = makeStyles({
  root:{
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    alignContent:'center',
  },
  card:{
    marginLeft:'5px',
    marginRight:'5px',
  },
  media: {
    height: 260,
  },
  addToCart:{
     textAlign: 'center',
      width: '100%', 
      height: '30px', 
      background:'#6D6D6D',
    color: 'white',
  '&:hover':{
    background:'#6D6D6D',
    color: 'black',
  }}
});

const ProductsSlider = ({ products }) => {
  const classes = useStyles();
  const responsive = {
    0: { items: 1 },
    568: { items: 3 },
    1024: { items: 4 },
    1920: {items: 4}
};
  

    return (

        <div>
          <Grid container style={{ marginTop: '20px', marginBottom: '20px', marginLeft: '5px',}}>
            <Typography variant='h4' style={{ color: 'white'}}>
              Featured Products
            </Typography>
          </Grid>
          <AliceCarousel mouseTracking responsive={responsive}>
            {Object.entries(products).map(([slug, {id, name, img}]) => 
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                className={classes.media}
                image={img}
                title={name}/>
                <Typography gutterBottom variant="h6" component="h2" style={{ textAlign:'center'}}>
            {name}
          </Typography>
              </CardActionArea>
              <CardActions>
        <Button size="medium" color="danger" className={classes.addToCart}>
          Add to cart
        </Button>
      </CardActions>
            </Card>
            )}
          </AliceCarousel>
      </div>
    )
}

export default ProductsSlider;
/*
<Slider {...settings} className={classes.root}>
            {Object.entries(products).map(([slug, {name, img}]) => 
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia className={classes.media}
                image={img}
                title={name}/>
                <Typography gutterBottom variant="h6" component="h2" style={{ textAlign:'center'}}>
            {name}
          </Typography>
              </CardActionArea>
              <CardActions>
        <Button size="medium" color="danger" style={{ textAlign: 'center', width: '100%'}}>
          Add to cart
        </Button>
      </CardActions>
            </Card>
            )}
          </Slider>
*/