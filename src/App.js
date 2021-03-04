import logo from './logo.svg';
import './App.css';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import Pokemon from './components/pokemon/Pokemon'
import NavBar from "./components/layout/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './components/layout/Dashboard';
import backgroundImage from './pattern.png'


function App() {
  return (
    <Router>
      <div className="App" style={{background: `url(${backgroundImage})`}}>
        <NavBar></NavBar><div className="container">
          <Switch>
            <Route exact path="/" component={Dashboard}></Route>
            <Route exact path="/pokemon/:pokemonIndex" component={Pokemon}></Route>
          <Dashboard></Dashboard>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
