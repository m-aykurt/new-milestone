import React from "react";
import { BrowserRouter  as Router, Route, Switch } from "react-router-dom";
import Navbar from "../components/Navbar";
import Dashboard from "../components/Dashboard";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Details from "../pages/Detail";
import Profile from "../pages/Profile";
import NewBlog from "../pages/NewBlog";
import AuthContextProvider from "../context/AuthContext";
import { ToastContainer } from 'react-toastify';

function AppRouter() {
  return (
    <Router>
      <Navbar />
      <AuthContextProvider>
        <Switch>
          <Route exact path="/">
            
            <Dashboard />
          </Route>
          <Route path="/login">
            
            <Login />
          </Route>
          <Route path="/register">
            
            <Register />
          </Route>
          <Route path="/detail/:id">
            
            <Details />
          </Route>
          <Route path="/profile">
            
            <Profile />
          </Route>
          <Route path="/new-blog">
            
            <NewBlog />
          </Route>
        </Switch>
      </AuthContextProvider>
      <ToastContainer />

    </Router>
  );
}

export default AppRouter;
