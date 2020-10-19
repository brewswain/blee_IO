import React, { useContext, useEffect, useState } from "react";

import "./SideBar.style.scss";

import {
  CommonFlowsContext,
  ComponentsContext,
  LoadingContext,
  ProjectStructureContext,
  SideBarContext,
  SideBarLinkContext,
} from "../../../contexts";

import { Chevron } from "../../../assets";

import { firestore } from "../../../firebase/firebase.utils";

import { NavLink } from "react-router-dom";

const SideBar = () => {
  const [componentExpanded, setComponentExpanded] = useState(false);
  const [commonFlowsExpanded, setCommonFlowsExpanded] = useState(false);
  const [projectStructureExpanded, setProjectStructureExpanded] = useState(
    false
  );
  const [linkActive, setLinkActive] = useState(false);

  const [componentsArray, setComponentsArray] = useState([]);
  const { setCompleteComponentsData } = useContext(ComponentsContext);

  const [commonFlowsArray, setCommonFlowsArray] = useState([]);
  const { setCompleteCommonFlowsData } = useContext(CommonFlowsContext);

  const [projectStructureArray, setProjectStructureArray] = useState([]);
  const { setCompleteProjectStructureData } = useContext(
    ProjectStructureContext
  );

  const { sidebarState, setSidebarState } = useContext(SideBarContext);
  const { setSidebarLinkState } = useContext(SideBarLinkContext);
  const { setLoadingState } = useContext(LoadingContext);

  const getCollectionsArray = async () => {
    // components section
    let componentCollectionsArray = [];
    let completeComponentsDataArray = [];

    const collectionsRef = firestore.collection("components");
    const collectionsSnapshot = await collectionsRef.get();
    collectionsSnapshot.forEach((collection) => {
      componentCollectionsArray.push(collection.data().name);
      completeComponentsDataArray.push(collection.data());
    });
    setComponentsArray(componentCollectionsArray);
    setCompleteComponentsData(completeComponentsDataArray);

    // commonFlows section
    let commonFlowsCollectionsArray = [];
    let completeCommonFlowsDataArray = [];

    const commonFlowsRef = firestore.collection("commonFlows");
    const commonFlowsSnapshot = await commonFlowsRef.get();
    commonFlowsSnapshot.forEach((collection) => {
      commonFlowsCollectionsArray.push(collection.data().name);
      completeCommonFlowsDataArray.push(collection.data());
    });
    setCommonFlowsArray(commonFlowsCollectionsArray);
    setCompleteCommonFlowsData(completeCommonFlowsDataArray);

    // projectStructure section

    let projectStructureCollectionsArray = [];
    let completeProjectStructureDataArray = [];

    const projectStructureRef = firestore.collection("projectStructure");
    const projectStructureSnapshot = await projectStructureRef.get();
    projectStructureSnapshot.forEach((collection) => {
      projectStructureCollectionsArray.push(collection.data().name);
      completeProjectStructureDataArray.push(collection.data());
    });
    setProjectStructureArray(projectStructureCollectionsArray);
    setCompleteProjectStructureData(completeProjectStructureDataArray);
  };

  useEffect(() => {
    getCollectionsArray();
  }, []);

  return (
    <div
      className={`${
        sidebarState.isActive ? "sidebar__container--active" : ""
      } sidebar__container`}
    >
      <div className="sidebar__list">
        <div className="sidebar__accordion">
          <div className="accordion__container">
            <div
              className="accordion__category"
              onClick={() => {
                setComponentExpanded(!componentExpanded);
                setCommonFlowsExpanded(false);
                setProjectStructureExpanded(false);
              }}
            >
              Components
              <Chevron
                className={`${
                  componentExpanded ? "accordion__chevron--expanded" : null
                } accordion__chevron`}
              />
            </div>
            <div
              className={`${
                componentExpanded
                  ? "accordion__details--visible"
                  : "accordion__details--invisible"
              } accordion__details`}
            >
              {componentsArray.map((componentLink) => (
                <NavLink
                  to="/components"
                  key={componentLink}
                  className={`${
                    linkActive === componentLink
                      ? "sidebar__link--active"
                      : "componentLink"
                  } sidebar__link`}
                  onClick={() => {
                    setSidebarState({ isActive: !sidebarState.isActive });
                    setSidebarLinkState({ linkName: componentLink });
                    setLinkActive(componentLink);
                    setLoadingState({ isLoaded: false });
                  }}
                >
                  {componentLink}
                </NavLink>
              ))}
            </div>
          </div>
          <div className="accordion__container">
            <div
              className="accordion__category"
              onClick={() => {
                setCommonFlowsExpanded(!commonFlowsExpanded);
                setComponentExpanded(false);
                setProjectStructureExpanded(false);
              }}
            >
              Common Flows
              <Chevron
                className={`${
                  commonFlowsExpanded ? "accordion__chevron--expanded" : "null"
                } accordion__chevron`}
              />
            </div>
            <div
              className={`${
                commonFlowsExpanded
                  ? "accordion__details--visible"
                  : "accordion__details--invisible"
              } accordion__details`}
            >
              {commonFlowsArray.map((commonFlowsLink) => (
                <NavLink
                  to="/commonFlows"
                  key={commonFlowsLink}
                  className={`${
                    linkActive === commonFlowsLink
                      ? "sidebar__link--active"
                      : "commonFlowsLink"
                  } sidebar__link`}
                  onClick={() => {
                    setSidebarState({ isActive: !sidebarState.isActive });
                    setLinkActive(commonFlowsLink);
                    setSidebarLinkState({ linkName: commonFlowsLink });
                    setLoadingState({ isLoaded: false });
                  }}
                >
                  {commonFlowsLink}
                </NavLink>
              ))}
            </div>
          </div>
          <div className="accordion__container">
            <div
              className="accordion__category"
              onClick={() => {
                setProjectStructureExpanded(!projectStructureExpanded);
                setCommonFlowsExpanded(false);
                setComponentExpanded(false);
              }}
            >
              Project Structure
              <Chevron
                className={`${
                  projectStructureExpanded
                    ? "accordion__chevron--expanded"
                    : null
                } accordion__chevron`}
              />
            </div>
            <div
              className={`${
                projectStructureExpanded
                  ? "accordion__details--visible"
                  : "accordion__details--invisible"
              } accordion__details`}
            >
              {projectStructureArray.map((projectStructureLink) => (
                <NavLink
                  to="/projectStructure"
                  key={projectStructureLink}
                  className={`${
                    linkActive === projectStructureLink
                      ? "sidebar__link--active"
                      : "projectStructureLink"
                  } sidebar__link`}
                  onClick={() => {
                    setSidebarState({ isActive: !sidebarState.isActive });
                    setSidebarLinkState({ linkName: projectStructureLink });
                    setLinkActive(projectStructureLink);
                    setLoadingState({ isLoaded: false });
                  }}
                >
                  {projectStructureLink}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
