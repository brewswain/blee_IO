import React, { useContext, useEffect } from "react";

import "./TopBar.style.scss";

import { Menu, Moon, Sun } from "../../../assets";
import { SideBarContext, ThemeContext } from "../../../contexts";

import { Link } from "react-router-dom";

const TopBar = () => {
  const { themeData, setThemeData } = useContext(ThemeContext);
  const { sidebarState, setSidebarState } = useContext(SideBarContext);

  const themePersistence = window.localStorage.getItem("isDarkMode");

  if (!themeData.isDarkMode) {
    document.body.classList.add("light");
  } else {
    document.body.classList.remove("light");
  }

  useEffect(() => {
    if (themePersistence === "true") {
      document.body.classList.remove("light");
      setThemeData({ isDarkMode: true });
    } else {
      document.body.classList.add("light");
      setThemeData({ isDarkMode: false });
    }
  }, []);

  return (
    <div className="topbar__container">
      <Link to="/" className="topbar__title">
        Blee's Box
      </Link>
      <div
        className="theme__toggle"
        onClick={() => {
          setThemeData({ isDarkMode: !themeData.isDarkMode });
          window.localStorage.setItem("isDarkMode", !themeData.isDarkMode);
        }}
      >
        {themeData.isDarkMode ? (
          <Sun className="theme__icon--sun" />
        ) : (
          <Moon className="theme__icon--moon" />
        )}
      </div>
      <Menu
        className="theme__icon--menu"
        onClick={() => {
          setSidebarState({ isActive: !sidebarState.isActive });
        }}
      />
    </div>
  );
};

export default TopBar;
