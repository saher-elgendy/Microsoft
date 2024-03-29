import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import Categories from './pages/categories';
import Home from './pages/home/index';
import Product from './pages/product/index';
import Products from './pages/products/index';
import SignIn from './pages/sign_in';
import SignUp from './pages/sign_up';
import { fetchProducts } from './redux/products/action';



const App = (props) => {
  const { loadProducts, filters, sortBy } = props;

  useEffect(() => {
    // const cancel = { current: false };
    loadProducts(filters, sortBy);
    // return () => cancel.current = true
  }, [loadProducts, filters, sortBy]);

  return (
    <Router>
      <Switch>
        <>
          <Route exact path="/" component={Home} />
          <Route path="/categories" component={Categories} />
          <Route path="/products" component={Products} />
          <Route path="/sign_in" component={SignIn} />
          <Route path="/sign_up" component={SignUp} />
          <Route path="/product" component={Product} />
        </>
      </Switch>
    </Router>
  );
}

const mapStateToProps = (state) => ({
  filters: state.filters,
  sortBy: state.sortBy
});


const mapDispatchToProps = (dispatch) => ({
  loadProducts: async (filters, sortBy) => {
    try {
      const response = await fetch('https://api.myjson.com/bins/87fx5');
      const json = await response.json();

      dispatch(fetchProducts(json.products, filters, sortBy));
    }
    catch {
      console.log('error fetching data');
    }
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
