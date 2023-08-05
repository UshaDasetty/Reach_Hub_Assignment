import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header'
import Home from './components/Home';
import Navbar from './components/Navbar';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <Router>
        <Header />
        <Navbar />
        <Switch>
          <Route exact path="/" component = {Home} />
          <Route path="/productdetails" component = {ProductDetails} />
        </Switch>
    </Router>

  );
}

export default App;
