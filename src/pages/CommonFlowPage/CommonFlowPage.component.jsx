import React, { useState, useEffect, useContext } from "react";

import {
  CommonFlowsContext,
  LoadingContext,
  SideBarLinkContext,
} from "../../contexts";
import { PageContent } from "../../partials";

const CommonFlowPage = () => {
  const { sidebarLinkState } = useContext(SideBarLinkContext);
  const { completeCommonFlowsData } = useContext(CommonFlowsContext);
  const { loadingState, setLoadingState } = useContext(LoadingContext);

  const [componentData, setComponentData] = useState({
    name: null,
    codeSnippet: null,
    styleSnippet: null,
    codeSnippet_1: null,
    codeSnippet_2: null,
  });

  const getCollections = async () => {
    if (!loadingState.isLoaded) {
      const selectedItem = sidebarLinkState.linkName;

      const componentObject = completeCommonFlowsData.filter(
        (component) => component.name === selectedItem
      );

      setComponentData({
        name: componentObject[0].name,
        language: componentObject[0].language,
        codeSnippet: componentObject[0].codeSnippet,
        codeSnippet_1: componentObject[0].codeSnippet_1,
        codeSnippet_2: componentObject[0].codeSnippet_2,
        styleSnippet: componentObject[0].styleSnippet,
      });

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
          codeSnippet_1={componentData.codeSnippet_1}
          codeSnippet_2={componentData.codeSnippet_2}
          styleSnippet={componentData.styleSnippet}
        />
      </div>
    </div>
  );
};

export default CommonFlowPage;
