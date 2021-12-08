import './App.css';
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom';
import TeamDetail from './views/Teams/TeamDetail';
import TeamList from './views/Teams/TeamList';
import Home from './views/Home/Home';
import PlayerDetail from './views/Players/PlayerDetail';
import PlayerList from './views/Players/PlayerList';

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          Sport!
          <NavLink to="/" className="App-link" exact>
            Home
          </NavLink>
        </header>
        <Switch>
          <Route
            path="/teams/:teamId"
            render={(routerProps) => <TeamDetail {...routerProps} />}
          />
          <Route
            path="/teams"
            render={(routerProps) => <TeamList {...routerProps} />}
          />
          <Route
            path="/players/:playerId"
            render={(routerProps) => <PlayerDetail {...routerProps} />}
          />
          <Route
            path="/players"
            render={(routerProps) => <PlayerList {...routerProps} />}
          />
          <Route path="/" render={(routerProps) => <Home {...routerProps} />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
