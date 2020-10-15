import React from "react";

import "./HomePage.style.scss";

const HomePage = () => {
  return (
    <div className="page__container homepage__container">
      <div className="site__wrapper">
        <div className="home__container">
          <p className="home__message">
            Welcome! this site represents the (arguably small) sum of my code
            knowledge that I've used repeatedly, in an attempt to assuage the
            (arguably large) amount of frustrations that I've had to deal with
            when setting up a project from scratch. Hope I'm useful!
          </p>
          <p className="home__message">
            In the mean time, look at this waddle dee:
          </p>
          <a
            href="https://www.youtube.com/watch?v=fpcAvRw0Q-Y"
            target="_blank"
            rel="noopener noreferrer"
            className="home__link"
          >
            <img
              className="home__image"
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/55c4f29a-1101-4536-b881-017bf1856a68/dd0qrtg-3b59c66a-5803-4a30-9ea2-8e5238378a06.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNTVjNGYyOWEtMTEwMS00NTM2LWI4ODEtMDE3YmYxODU2YTY4XC9kZDBxcnRnLTNiNTljNjZhLTU4MDMtNGEzMC05ZWEyLThlNTIzODM3OGEwNi5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.0ko1TAv4qYE86hb_zfeyRRRn9WZhjOhENb7Xfntb0yg"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
