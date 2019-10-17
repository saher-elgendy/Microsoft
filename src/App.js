import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import Categories from './pages/categories';
import Home from './pages/home/index';
import Products from './pages/products/index';



const App = () => {
  return (
    <Router>
      <Switch>
        <>
          <Route exact path="/" component={Home}/>
          <Route path="/categories" component={Categories}/>
          <Route path="/products" component={Products} />
        </>
      </Switch>
    </Router>
  );
}

export default App;
