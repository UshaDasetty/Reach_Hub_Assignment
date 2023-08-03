import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/Header'
import Filters from './components/Filters';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <Route exact path = "/" component = {Home} />
      <Filters />
    </Router>
  );
}

export default App;
