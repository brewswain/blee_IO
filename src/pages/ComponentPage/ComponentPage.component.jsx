import React, { useState, useEffect } from "react";

import "./ComponentPage.style.scss";

import { PageContent, SideBar, TopBar } from "../../partials";
import { ThemeContext } from "../../contexts";
import { firestore } from "../../firebase/firebase.utils";

import exampleComponents from "../../data/exampleComponents.data";

const ComponentPage = () => {
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
    console.log(componentObject);

    setComponentData({
      name: componentObject.name,
      codeSnippet: componentObject.codeSnippet,
      styleSnippet: componentObject.styleSnippet,
    });
  };

  useEffect(() => {
    getCollections();
  }, []);
  useEffect(() => {
    console.log(componentData);
  }, [componentData]);
  return (
    // Chose to use 2 classes for the eventuality of styling clashes
    // between differing pages
    <ThemeContext.Provider value={{ themeData, setThemeData }}>
      <div className="page__container homepage__container">
        <TopBar theme={themeData.isDarkMode} />

        <div className="site__wrapper">
          <SideBar />
          <PageContent
            name={componentData.name}
            codeSnippet={componentData.codeSnippet}
            styleSnippet={componentData.styleSnippet}
          />
          {/* {exampleComponents.components.map((exampleComponent) => (
            <div>{exampleComponent.name}</div>
          ))} */}
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default ComponentPage;
