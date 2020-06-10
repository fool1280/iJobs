import React, { useState } from 'react'
import { Switch, Route, Redirect } from "react-router-dom";
import Jobs from './page/Jobs'
import Login from './page/Login'
import Details from './page/Details'
import { useSelector } from 'react-redux'
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

export default function App() {
  let user = useSelector(state => state.user.isAuthenticated)

  const ProtectedRoute = (props) => {
    if (user === true) {
      return <Route {...props} />;
    } else {
      return <Redirect to="/login" />;
    }
  };

  return (
    <div>
      <Switch>
        <ProtectedRoute path="/jobs/:id" render={(props) => <Details {...props}/>}/>
        <Route path="/jobs" component={Jobs}/>
        <Route path="/login" component={Login}/>
        <Route path="/" component={Jobs}/>
      </Switch>
    </div>
  )
}
