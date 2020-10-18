import React, { useState, useEffect, useContext } from "react";

import { SideBarLinkContext } from "../../contexts";
import { PageContent } from "../../partials";
import { firestore } from "../../firebase/firebase.utils";

const CommonFlowPage = () => {
  const { sidebarLinkState, setSidebarLinkState } = useContext(
    SideBarLinkContext
  );

  const [componentData, setComponentData] = useState({
    name: null,
    codeSnippet: null,
    styleSnippet: null,
    codeSnippet_1: null,
    codeSnippet_2: null,
  });

  const getCollections = async () => {
    const collectionsFromFirestore = firestore.doc(
      `commonFlows/${sidebarLinkState.linkName}`
    );
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
          codeSnippet_1={componentData.codeSnippet_1}
          codeSnippet_2={componentData.codeSnippet_2}
          styleSnippet={componentData.styleSnippet}
        />
      </div>
    </div>
  );
};

export default CommonFlowPage;
