import React, { useState, useEffect } from "react";

import "./HomePage.style.scss";

import { PageContent, SideBar, TopBar } from "../../partials";
import { ThemeContext } from "../../contexts";
import { firestore } from "../../firebase/firebase.utils";

import exampleComponents from "../../data/exampleComponents.data";

const HomePage = () => {
  const [themeData, setThemeData] = useState({
    isDarkMode: true,
  });
  const [componentData, setComponentData] = useState({
    name: null,
    codeSnippet: null,
    styleSnippet: null,
  });

  const getCollections = async () => {
    const collectionsFromFirestore = firestore.doc("components/CustomButton");
    const snapShot = await collectionsFromFirestore.get();

    // console.log(snapShot.data());
    // console.log(snapShot.data().codeSnippet);
    const componentObject = snapShot.data();

    console.log("componentObject", componentObject);

    setComponentData({
      name: componentObject.name,
      codeSnippet: componentObject.codeSnippet,
      styleSnippet: componentObject.styleSnippet,
    });
  };

  useEffect(() => {
    getCollections();
  }, []);

  return (
    <ThemeContext.Provider value={{ themeData, setThemeData }}>
      <div className="page__container homepage__container">
        <TopBar theme={themeData.isDarkMode} />

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
    </ThemeContext.Provider>
  );
};

export default HomePage;
