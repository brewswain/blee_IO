import React, { useState, useEffect } from "react";

import { PageContent, SideBar, TopBar } from "../../partials";
import { ThemeContext } from "../../contexts";
import { firestore } from "../../firebase/firebase.utils";

import { useLocation } from "react-router-dom";

const ProjectStructurePage = () => {
  const [currentUrl, setCurrentUrl] = useState("projectStructure");
  const [themeData, setThemeData] = useState({
    isDarkMode: true,
  });
  const [componentData, setComponentData] = useState({
    name: null,
    codeSnippet: null,
    styleSnippet: null,
    codeSnippet_1: null,
    codeSnippet_2: null,
    codeSnippet_3: null,
  });

  let match = useLocation();
  const formattedUrl = match.pathname.replace("/", "");

  const getCollections = async () => {
    const collectionsFromFirestore = firestore.doc(`${formattedUrl}`);
    const snapShot = await collectionsFromFirestore.get();
    const componentObject = snapShot.data();
    console.log("common flows data object = ", componentObject);

    setComponentData({
      name: componentObject.name,
      language: componentObject.language,
      codeSnippet: componentObject.codeSnippet,
      codeSnippet_1: componentObject.codeSnippet_1,
      codeSnippet_2: componentObject.codeSnippet_2,
      codeSnippet_3: componentObject.codeSnippet_3,
      styleSnippet: componentObject.styleSnippet,
    });

    setCurrentUrl(formattedUrl);
  };

  useEffect(() => {
    getCollections();
  }, [formattedUrl]);

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
            codeSnippet_1={componentData.codeSnippet_1}
            codeSnippet_2={componentData.codeSnippet_2}
            codeSnippet_3={componentData.codeSnippet_3}
            styleSnippet={componentData.styleSnippet}
          />
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default ProjectStructurePage;
