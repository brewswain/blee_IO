import React, { useState, useEffect, useContext } from "react";

import {
  LoadingContext,
  ProjectStructureContext,
  SideBarLinkContext,
} from "../../contexts";
import { PageContent } from "../../partials";

const ProjectStructurePage = () => {
  const { sidebarLinkState } = useContext(SideBarLinkContext);
  const { loadingState, setLoadingState } = useContext(LoadingContext);
  const { completeProjectStructureData } = useContext(ProjectStructureContext);
  const [componentData, setComponentData] = useState({
    name: null,
    codeSnippet: null,
    styleSnippet: null,
    codeSnippet_1: null,
    codeSnippet_2: null,
    codeSnippet_3: null,
  });

  const getCollections = async () => {
    const selectedItem = sidebarLinkState.linkName;

    const componentObject = completeProjectStructureData.filter(
      (component) => component.name === selectedItem
    );

    setComponentData({
      name: componentObject[0].name,
      codeSnippet: componentObject[0].codeSnippet,
      styleSnippet: componentObject[0].styleSnippet,
      codeSnippet_1: componentObject[0].codeSnippet_1,
      codeSnippet_2: componentObject[0].codeSnippet_2,
      codeSnippet_3: componentObject[0].codeSnippet_3,
    });

    setLoadingState({ isLoaded: true });
  };

  useEffect(() => {
    if (!loadingState.isLoaded) {
      getCollections();
    }
  }, [componentData]);

  return (
    <div className="page__container homepage__container">
      <div className="site__wrapper">
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
  );
};

export default ProjectStructurePage;
