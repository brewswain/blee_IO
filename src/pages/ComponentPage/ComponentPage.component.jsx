import React, { useState, useEffect, useContext } from "react";

import "./ComponentPage.style.scss";

import { SideBarLinkContext } from "../../contexts";
import { PageContent } from "../../partials";
import { firestore } from "../../firebase/firebase.utils";

const ComponentPage = () => {
  const [downloadUrl, setDownloadUrl] = useState(null);
  const [componentData, setComponentData] = useState({
    name: null,
    codeSnippet: null,
    styleSnippet: null,
  });
  const { sidebarLinkState, setSidebarLinkState } = useContext(
    SideBarLinkContext
  );

  const getCollections = async () => {
    const collectionsFromFirestore = sidebarLinkState.linkName
      ? firestore.doc(`components/${sidebarLinkState.linkName}`)
      : firestore.doc("components/Card");

    const snapShot = await collectionsFromFirestore.get();
    const componentObject = snapShot.data();

    setComponentData({
      name: componentObject.name,
      language: componentObject.language,
      codeSnippet: componentObject.codeSnippet,
      styleSnippet: componentObject.styleSnippet,
    });
  };

  useEffect(() => {
    getCollections();
  }, [componentData]);

  return (
    <div className="page__container homepage__container">
      <div className="site__wrapper">
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
