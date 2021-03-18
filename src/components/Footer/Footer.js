import React from 'react'
import { Button, Container, Grid, Typography } from '@material-ui/core';
import useStyles from './style';
import { Link } from 'react-router-dom';
import { FormControl, InputLabel, Input, FormHelperText } from '@material-ui/core';

const Footer = () => {
    const classes = useStyles();

    return (
        <div>
            <Grid container className={classes.root}>
                <Grid item xs={12} lg={4} md={4}>
                <Typography variant='h6' gutterBottom>
                        <span style={{ fontWeight: 'bolder',fontSize:'25px'}}>Puma</span> - Shop online for new and exclusive products
                </Typography>
                <Typography variant="body1" gutterTop>
                    Call Us: +92 320 78645631
                </Typography>
                <Typography variant="body1" gutterTop>
                    Email Us: puma@puma.com
                </Typography>
                </Grid>
                <Grid item xs={12} lg={4} md={4}>
                <Typography variant='h5' gutterBottom>
                        Follow Us On
                </Typography>
                <Typography variant="p"  className={classes.follow} component={Link} to="">
                    Instagram
                </Typography>
                <Typography variant="p" className={classes.follow} component={Link} to="">
                    Facebook
                </Typography>
                <Typography variant="p" className={classes.follow} component={Link} to="" gutterBottom>
                    Youtube
                </Typography>
                </Grid>
                <Grid item xs={12} lg={4} md={4}>
                <Typography variant="p" className={classes.follow} component={Link} to="" gutterBottom gutterTop>
                    Terms of Services
                </Typography>
                <Typography variant="p" className={classes.follow} component={Link} to="" gutterBottom>
                    Contact Us
                </Typography>
                <Typography variant="p" className={classes.follow} component={Link} to="" gutterBottom>
                    About Us
                </Typography>
                <Typography variant="p" className={classes.follow} component={Link} to="" gutterBottom>
                    Blog
                </Typography>
                </Grid>
            </Grid>
            <Grid container justify="center" alignItems="center" className={classes.root} style={{ borderTop: '1px solid white'}}>
                <Grid item lg={6} md={6} xs={12}>
                <Typography variant='h5'>
                Stay updated on exciting new Sales & Deals
                </Typography>
                </Grid>
                <Grid item lg={6} md={6} xs={12}>
                <FormControl className={classes.form}>
                <InputLabel htmlFor="my-input" className={classes.InputLabel}>Email address</InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text" className={classes.Input}/>
                </FormControl>
                 </Grid>
            </Grid>
            <Grid container style={{ background: '#6D6D6D', color: 'white',paddingTop: '4px', paddingBottom: '4px',}}>
                <Grid item xs={12} lg={12} md={12} sm={12} >
                <Typography variant="h6" align="center">
                © 2021 - Puma.Inc
                </Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default Footer;
