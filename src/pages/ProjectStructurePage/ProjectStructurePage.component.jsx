import React, { useState, useEffect } from "react";

import { PageContent } from "../../partials";
import { firestore, storage } from "../../firebase/firebase.utils";

import { useLocation } from "react-router-dom";

const ProjectStructurePage = () => {
  // const [currentUrl, setCurrentUrl] = useState("projectStructure");
  const [downloadUrl, setDownloadUrl] = useState(null);

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

    setComponentData({
      name: componentObject.name,
      language: componentObject.language,
      codeSnippet: componentObject.codeSnippet,
      codeSnippet_1: componentObject.codeSnippet_1,
      codeSnippet_2: componentObject.codeSnippet_2,
      codeSnippet_3: componentObject.codeSnippet_3,
      styleSnippet: componentObject.styleSnippet,
    });

    // setCurrentUrl(formattedUrl);
  };

  const storageRef = storage.ref();
  const getDownload = async () => {
    setDownloadUrl(
      await storageRef
        .child(`projectStructure/${componentData.name}.zip`)
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
      <div className="site__wrapper">
        <PageContent
          name={componentData.name}
          codeSnippet={componentData.codeSnippet}
          codeSnippet_1={componentData.codeSnippet_1}
          codeSnippet_2={componentData.codeSnippet_2}
          codeSnippet_3={componentData.codeSnippet_3}
          downloadUrl={downloadUrl}
          styleSnippet={componentData.styleSnippet}
        />
      </div>
    </div>
  );
};

export default ProjectStructurePage;
