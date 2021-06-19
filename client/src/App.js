import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/Navbar';
import Search from './pages/Search';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path={['/', '/search']}>
            <Search />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
