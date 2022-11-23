import React, { Component, Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import SignInPage from "./components/SignInPage" 
import Home from "./components/Home"
import Homepage from "./components/Homepage"
import LandingPage from "./components/LandingPage"
import RandomIdea from "./components/RandomIdea"
import AllIdeas from "./components/Ideas"
import SingleIdea from "./components/SingleIdea"
/**
 * COMPONENT
 */
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/singleidea" element={<SingleIdea/>}/>
      <Route path="/allideas" element={<AllIdeas/>}/>
      <Route path="/randomidea" element={<RandomIdea/>}/>
      <Route path="/landingpage" element={<LandingPage />}/>
      <Route path="/signup" element={<SignInPage />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  
  );
};

export default AllRoutes;
