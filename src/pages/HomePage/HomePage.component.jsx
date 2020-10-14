import React from "react";

import "./HomePage.style.scss";

import {  SideBar, TopBar } from "../../partials";


const HomePage = () => {

  return (
      <div className="page__container homepage__container">
        <TopBar />

        <div className="site__wrapper">
          <SideBar />
          <div className="home__container">
            <p className="home__message">
              Welcome! this site represents the (arguably small) sum of my code
              knowledge that I've used repeatedly, in an attempt to assuage the
              (arguably large) amount of frustrations that I've had to deal with
              when setting up a project from scratch. Hope I'm useful!
            </p>
            <p>In the mean time, look at this waddle dee:</p>
          </div>
        </div>
      </div>
  );
};

export default HomePage;
