import React, { useState } from "react";

import "./HomePage.style.scss";

import { PageContent, SideBar, TopBar } from "../../partials";
import { ThemeContext } from "../../contexts";

const HomePage = () => {
  const [themeData, setThemeData] = useState({
    isDarkMode: true,
  });

  return (
    // Chose to use 2 classes for the eventuality of styling clashes
    // between differing pages
    <ThemeContext.Provider value={{ themeData, setThemeData }}>
      <div className="page__container homepage__container">
        <TopBar theme={themeData.isDarkMode} />

        <div className="site__wrapper">
          <SideBar />
          <PageContent />
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default HomePage;
