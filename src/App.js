import React from "react";
import { Redirect, Route,  Switch, useParams } from 'react-router-dom';
import Welcome from "./components/welcome/Welcome";
import Clock from "./components/clock/Clock";
import Contact from './components/Contact/Contact';
import Navigation from './components/navigation/Navigation';
import Error from './components/error/Error';
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
      <Route 
      exact strict
      path="/"       
      render={(props) =><Welcome {...props} name="Mike"/>} />
      <Route 
      exact
      path="/welcome/:name" 
      render={(props) => <Welcome {...props} name={props.match.params.name} />} />
      
      <Route exact path="/clock" component={Clock} />
      <Route exact path="/contact" component={Contact} />
      <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
