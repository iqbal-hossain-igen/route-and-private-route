import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import Header from './Components/Header/Header';
import AuthProvider from './context/AuthProvider';
import Shipping from './Components/Shipping/Shipping';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
              <Home></Home>
          </Route>
          <PrivateRoute path="/shipping">
              <Shipping></Shipping>
          </PrivateRoute>
          <Route exact path="/register">
              <Register></Register>
          </Route>
          <Route exact path="/login">
              <Login></Login>
          </Route>
        </Switch>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
