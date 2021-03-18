import React, {useState, useEffect} from 'react';
import { AppBar, Toolbar, IconButton, Typography, 
  Badge,Button, SwipeableDrawer, ListItem, List, ListItemText} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search'; 
import { ShoppingCart, } from '@material-ui/icons';
import MenuIcon from '@material-ui/icons/Menu';
import useStyles from './style';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const classes = useStyles();
  const location = useLocation();
  const [state, setState] = useState({
    left: false,
  });
  const [scrolled,setScrolled]=useState(false);
    const handleScroll = () => {
      const offset = window.scrollY;
        if(offset >= 10){
          setScrolled(true);
          }
        else{
          setScrolled(false);
          }
        }
  useEffect(() => {
    window.addEventListener('scroll',handleScroll);
  })
const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const objects = {'/': 'Home', '/feed': 'Feed', '/latest':'Latest', '/upcoming': 'Upcoming'};
  const list = (anchor) => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem button className={classes.closemenu}>X</ListItem>
        {Object.entries(objects).map(([key, text]) =>
          <ListItem button key={text} className={classes.listitem} component={Link} to={key}>
            <ListItemText primary={text} />
          </ListItem>
        )}
      </List>
    </div>
  );
    return (
        <>
        <div className={classes.discounts}>
        20 - 30 % off on our new products.
        </div>
        
        <AppBar position="fixed" className={scrolled ? classes.scrolled : classes.appbar} id="appbar" color="inherit">
                <Toolbar>
                <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)} className={classes.menubutton}><MenuIcon /></Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
                <Typography
                component={Link} to="/"
                variant="h5"
                color="inherit"
                noWrap
                className={classes.title}
        >
          Puma
        </Typography>
                <Typography variant="p" className={classes.subtitle} component={Link} to="/feed">
                            Feed
                    </Typography>
                    <Typography variant="p" className={classes.subtitle} component={Link} to="/latest">
                            Latest
                    </Typography>
                    <Typography variant="p" className={classes.subtitle} component={Link} to="/upcoming">
                            Upcoming
                    </Typography>
        <IconButton className={classes.searchbutton} color='inherit'>
          <SearchIcon />
        </IconButton>
                    <Button variant='contained' className={classes.login} component={Link} to="/login">Login</Button>
                    <div className={classes.grow}>
                        {location.pathname !== '/cart' ? (
                        <div className={classes.button}>
                            <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit" className={classes.shoppingcart}>
                                <Badge badgeContent={12} color="secondary">
                                    <ShoppingCart />
                                </Badge>
                            </IconButton>
                        </div>
                        ): null}
                    </div>
                </Toolbar>
            </AppBar>        
            </>
    )
}

export default Navbar;
