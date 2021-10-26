import './App.css';
import { Route,BrowserRouter as Router, Switch,Redirect } from 'react-router-dom'
import Login from './Login/index';
import PrivateRoute from './PrivateRoute';
import Dashboard from './Dashboard';
import PublicRoute from './PublicRoute'
import NotFound from './BlankComp'

function App(props) {
  return (
    <div className="App-header">
    <Router {...props}>
      <Switch>
        <Redirect exact from="/" to="login" />
        <PrivateRoute component={Dashboard} path="/dashboard" exact />
        <PublicRoute restricted={true} component={Login} path="/login" exact />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </div>
  );
}

export default App;
