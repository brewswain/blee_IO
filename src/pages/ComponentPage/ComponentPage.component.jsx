import React, { useState, useEffect, useContext } from "react";

import "./ComponentPage.style.scss";

import {
  ComponentsContext,
  LoadingContext,
  SideBarLinkContext,
} from "../../contexts";
import { PageContent } from "../../partials";

import { firestore } from "../../firebase/firebase.utils";

const ComponentPage = () => {
  const [downloadUrl] = useState(null);
  const [componentData, setComponentData] = useState({
    name: null,
    codeSnippet: null,
    styleSnippet: null,
  });

  const { sidebarLinkState } = useContext(SideBarLinkContext);
  const { completeComponentsData } = useContext(ComponentsContext);
  const { loadingState, setLoadingState } = useContext(LoadingContext);

  const getCollections = async () => {
    if (!loadingState.isLoaded) {
      const selectedItem = sidebarLinkState.linkName;
      if (!selectedItem) {
        const collectionFromFirestore = firestore.doc("components/Card");
        const snapshot = await collectionFromFirestore.get();

        const componentObject = snapshot.data();

        setComponentData({
          name: componentObject.name,
          language: componentObject.language,
          codeSnippet: componentObject.codeSnippet,
          styleSnippet: componentObject.styleSnippet,
        });
      } else {
        const componentObject = completeComponentsData.filter(
          (component) => component.name === selectedItem
        );

        setComponentData({
          name: componentObject[0].name,
          language: componentObject[0].language,
          codeSnippet: componentObject[0].codeSnippet,
          styleSnippet: componentObject[0].styleSnippet,
        });
      }

      setLoadingState({ isLoaded: true });
    }
    return;
  };

  useEffect(() => {
    getCollections();
  }, [loadingState]);

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
