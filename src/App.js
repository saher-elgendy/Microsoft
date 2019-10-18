import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import Categories from './pages/categories';
import Home from './pages/home/index';
import Products from './pages/products/index';
import SignIn from './pages/sign_in';



const App = () => {
  return (
    <Router>
      <Switch>
        <>
          <Route exact path="/" component={Home}/>
          <Route path="/categories" component={Categories}/>
          <Route path="/products" component={Products} />
          <Route path="/sign_in" component={SignIn} />
        </>
      </Switch>
    </Router>
  );
}

export default App;
