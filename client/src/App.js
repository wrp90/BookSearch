import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/Navbar';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
      </div>
    </Router>
  );
}

export default App;
