import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header'
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
        <Header />
        <Navbar />
        <Switch>
          <Route exact path="/" component = {Home} />
        </Switch>
    </Router>

  );
}

export default App;
