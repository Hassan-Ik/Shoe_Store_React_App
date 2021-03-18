import './App.css';
//import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
//import Feed from './components/Feed/Feed';
//import Home from './components/Home/Home';
//import Footer from './components/Footer/Footer';
import { Home, Navbar, Feed, Footer, Upcoming, Latest, Cart } from './components/index';

const products = {
  'air-jordan-3-valor-blue':{
    id: '1',
    name: 'Valour Blue',
    img: 'https://d11zer3aoz69xt.cloudfront.net/media/catalog/product/cache/1/image/1200x/9df78eab33525d08d6e5fb8d27136e95/p/u/puma_sport_shoes_for_men_grey.jpg',
  },
  'jordan-mars-270-london':{
    id: '2',
    name: 'Jordan Mars 270 london',
    img: 'https://images.unsplash.com/photo-1572295293833-2d7556b54324?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cHVtYSUyMHNob2V8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
  },
  'air-jordan-1-zoom-racer-blue':{
    id: '3',
    name: 'Racer Blue',
    img: 'https://wallpapercave.com/wp/wp2183909.jpg',
  },
  'Puma-blue -Valgor':{
    id: '4',
    name: 'Puma Racer',
    img: 'https://images.unsplash.com/photo-1581923597046-427a5d83f932?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8cHVtYSUyMHNob2V8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80'
  }
};


function App() {
  return (
    <Router>
      <div>
        <Navbar /> 
        <Switch>
          <Route exact path="/">
            <Home products={products} />
          </Route>
          <Route exact path="/feed">
            <Feed products={products} />
          </Route>
          <Route exact path="/latest">
            <Latest />
          </Route>
          <Route exact path="/upcoming">
            <Upcoming />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Redirect path='/'></Redirect>
        </Switch>     
        <Footer />
      </div>
    </Router>
  );
}

export default App;
