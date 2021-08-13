import React, { useState, useEffect,useRef } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import Navbar from './components/Navbar.js/Navbar';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import PostDetails from './components/Posts/PostDetails/PostDetails';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"
import CreatePost from './components/Posts/CreatePost/CreatePost';




const App = () => {
  gsap.registerPlugin(ScrollTrigger);
  const user = JSON.parse(localStorage.getItem('profile'))

  const ref = useRef(null)

    useEffect(() => {
    const element = ref.current;
    gsap.fromTo(
      element.querySelector(".first-paragraph"),
      {
        opacity: 0,
        y: -20
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: element.querySelector(".first"),
          start: "top top",
          end: "bottom center",
          scrub: true
        }
      }
    );
  }, []);
 

  return (
    <BrowserRouter>
    <Container maxWidth="xl" ref={ref}>
        <Navbar />
        <Switch>
          
          <Route path="/" exact component={() => <Redirect to="/posts" />} />
          <Route path="/posts" exact component={Home} />
          <Route path="/posts/search" exact component={Home} />
          <Route path="/auth" exact component={()=>(!user?<Auth/>:<Redirect to="/posts"/>)} />
          
          <Route path="/posts/:id" exact component={PostDetails} />
          <Route path="/createPost" exact component={CreatePost} />
          {/* <Route path={['/creators/:name', '/tags/:name']} component={CreatorOrTag} /> */}
          {/* <Route path="/auth" exact component={() => (!user ? <Auth /> : <Redirect to="/posts" />)} /> */}
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default App;
