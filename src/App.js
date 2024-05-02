import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Allproducts from './Allproducts';
import ProductDetailsPage from './ProductDetailsPage';

export function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Allproducts} />
        <Route path="/product/:productId" component={ProductDetailsPage} />
      </Switch>
    </Router>
  );
}