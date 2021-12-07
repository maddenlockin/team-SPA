import './App.css';
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom';
import TeamDetail from './views/Teams/TeamDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          Sport!
          <NavLink to="/" className="App-link" exact>
            Home
          </NavLink>
          <NavLink to="/teams" className="App-link" exact>
            Teams
          </NavLink>
        </header>
        <Switch>
          <Route path='/teams/:teamId' render={(routerProps) => (
            <TeamDetail {...routerProps} />
          )}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
