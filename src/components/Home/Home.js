import { Grid, Typography, Button } from '@material-ui/core'
import React from 'react'
import useStyles from './style';
import puma_logo from '../../Images/Puma_logo2.png';
import ProductsSlider from './ProductsSlider';
import { Link } from 'react-router-dom';

const Home = ({ products }) => {
    const classes = useStyles();
    
    return (
        <>
        <div className={classes.toolbar} />
            <Grid container className={classes.root}>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Typography variant='h4' style={{ color: 'white'}}>
                    I still have my feet on the ground, I just wear better shoes.
                    </Typography>
                    <Button className={classes.button}>
                            Shop Now
                    </Button>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} style={{ textAlign: 'center'}}>
                    <img src={puma_logo} 
                    className={classes.image}
                    alt="puma logo" />
                </Grid>
            </Grid>
            <Grid container className={classes.categories}>
                <Grid item xs={12} sm={12} className={classes.categoriesTitle}>
                    <Typography variant='h5' text='primary'>
                        Puma is a brand deeply rooted in lifestyle.
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4} className={classes.categoriesItems} component={Link} to="/feed" >
                    <img src="https://media.gettyimages.com/photos/view-of-a-puma-display-during-the-2019-bet-experience-kicksperience-picture-id1157495172?s=2048x2048"
                     className={classes.categoriesImage}
                     alt="feed"/>
                <Button className={classes.categoriesTypes}>
                    Feed
                </Button>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4} className={classes.categoriesItems} component={Link} to="/latest">
                    <img src="https://images.unsplash.com/photo-1584590069631-1c180f90a54c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                     className={classes.categoriesImage}
                     alt="latest"/>
                <Button className={classes.categoriesTypes}>
                    Latest
                </Button>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4} className={classes.categoriesItems} component={Link} to="/upcoming">
                    <img src="https://images.unsplash.com/photo-1542562566-c1f9c7d7e737?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                     className={classes.categoriesImage}
                     alt="upcoming"/>
                <Button className={classes.categoriesTypes}>
                    Upcoming
                </Button>
                </Grid>
            </Grid>
            <ProductsSlider products={products} />
            <Grid conatiner>
                <img src="https://images.unsplash.com/photo-1570425387687-d2a34c7304a9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"
                style={{maxHeight: '500px', width: '100%'}}
                alt="last"/>
            </Grid>

        </>
    )
}

export default Home;
