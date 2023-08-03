import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Header from './components/Header'
import Filters from './components/Filters';

function App() {
  return (
    <Router>
      <Header />
      <Filters />
    </Router>
  );
}

export default App;
