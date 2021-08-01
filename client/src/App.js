import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import Navbar from './components/Navbar.js/Navbar';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';


const App = () => {
 

  return (
    <BrowserRouter>
      <Container>
        <Navbar />
        <Switch>
          
          {/* <Route path="/" exact component={() => <Redirect to="/posts" />} /> */}
          <Route path="/" exact component={Home} />
          <Route path="/auth" exact component={Auth} />
          {/* <Route path="/posts/search" exact component={Home} /> */}
          {/* <Route path="/posts/:id" exact component={PostDetails} /> */}
          {/* <Route path={['/creators/:name', '/tags/:name']} component={CreatorOrTag} /> */}
          {/* <Route path="/auth" exact component={() => (!user ? <Auth /> : <Redirect to="/posts" />)} /> */}
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default App;
