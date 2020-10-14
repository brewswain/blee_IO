import React, { useState, useEffect } from "react";

import { PageContent, SideBar, TopBar } from "../../partials";
import { firestore, storage } from "../../firebase/firebase.utils";

import { useLocation } from "react-router-dom";

const CommonFlowPage = () => {
  // const [currentUrl, setCurrentUrl] = useState("commonFlows");
  const [downloadUrl, setDownloadUrl] = useState(null);

  const [componentData, setComponentData] = useState({
    name: null,
    codeSnippet: null,
    styleSnippet: null,
    codeSnippet_1: null,
    codeSnippet_2: null,
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
      codeSnippet_1: componentObject.codeSnippet_1,
      codeSnippet_2: componentObject.codeSnippet_2,
      styleSnippet: componentObject.styleSnippet,
    });

    // setCurrentUrl(formattedUrl);
  };

  const storageRef = storage.ref();
  const getDownload = async () => {
    setDownloadUrl(
      await storageRef
        .child(`commonFlows/${componentData.name}.zip`)
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
        <TopBar />

        <div className="site__wrapper">
          <SideBar />
          <PageContent
            name={componentData.name}
            codeSnippet={componentData.codeSnippet}
            codeSnippet_1={componentData.codeSnippet_1}
            codeSnippet_2={componentData.codeSnippet_2}
            downloadUrl={downloadUrl}
            styleSnippet={componentData.styleSnippet}
          />
        </div>
      </div>
  );
};

export default CommonFlowPage;
