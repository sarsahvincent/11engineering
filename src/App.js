import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigationbar from './components/navigation/Navigationbar';
import Home from "./pages/home";
import About from "./pages/about";
import Services from "./pages/services";


function App() {
  return (
    <Router>
      <Navigationbar />
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/services" component={Services}></Route> 
      </Switch>
    </Router>
  );
}

export default App;

