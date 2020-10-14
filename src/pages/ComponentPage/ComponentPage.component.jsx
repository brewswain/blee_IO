import React, { useState, useEffect } from "react";

import "./ComponentPage.style.scss";

import { PageContent, SideBar, TopBar } from "../../partials";
import { firestore, storage } from "../../firebase/firebase.utils";

import { useLocation } from "react-router-dom";

const ComponentPage = () => {
  // const [currentUrl, setCurrentUrl] = useState("components");
  const [downloadUrl, setDownloadUrl] = useState(null);

  const [componentData, setComponentData] = useState({
    name: null,
    codeSnippet: null,
    styleSnippet: null,
  });

  let match = useLocation();
  const formattedUrl = match.pathname.replace("/", "");

  const getCollections = async () => {
    const collectionsFromFirestore = firestore.doc(`${formattedUrl}`);
    const snapShot = await collectionsFromFirestore.get();
    const componentObject = snapShot.data();

    setComponentData({
      name: componentObject.name,
      language: componentObject.language,
      codeSnippet: componentObject.codeSnippet,
      styleSnippet: componentObject.styleSnippet,
    });

    // setCurrentUrl(formattedUrl);
  };

  const storageRef = storage.ref();
  const getDownload = async () => {
    setDownloadUrl(
      await storageRef
        .child(`components/${componentData.name}.zip`)
        .getDownloadURL()
    );
  };

  useEffect(() => {
    getCollections();
  }, [formattedUrl]);

  useEffect(() => {
    if (componentData.name) {
      getDownload();
    }
  }, [componentData]);

  return (
    // Chose to use 2 classes for the eventuality of styling clashes
    // between differing pages
      <div className="page__container homepage__container">
        <TopBar/>

        <div className="site__wrapper">
          <SideBar />
          <PageContent
            name={componentData.name}
            codeSnippet={componentData.codeSnippet}
            styleSnippet={componentData.styleSnippet}
            downloadUrl={downloadUrl}
          />
        </div>
      </div>
  );
};

export default ComponentPage;
