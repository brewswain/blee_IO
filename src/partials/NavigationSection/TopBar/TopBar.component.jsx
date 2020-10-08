import React, { useContext } from "react";

import "./TopBar.style.scss";

import { Moon, Sun } from "../../../assets";
import { ThemeContext } from "../../../contexts";

const TopBar = () => {
  const { themeData, setThemeData } = useContext(ThemeContext);

  if (!themeData.isDarkMode) {
    document.body.classList.add("light");
  } else {
    document.body.classList.remove("light");
  }

  return (
    // change classname from topbar to something better
    <div className="topbar__container">
      <div className="topbar__title">Blee's Box</div>
      <div
        className="theme__toggle"
        onClick={() => {
          setThemeData({ isDarkMode: !themeData.isDarkMode });
        }}
      >
        {themeData.isDarkMode ? (
          <Sun className="theme__icon--sun" />
        ) : (
          <Moon className="theme__icon--moon" />
        )}
      </div>
    </div>
  );
};

export default TopBar;
