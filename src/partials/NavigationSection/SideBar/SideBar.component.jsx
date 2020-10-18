import React, { useContext, useEffect, useState } from "react";

import "./SideBar.style.scss";

import { SideBarContext, SideBarLinkContext } from "../../../contexts";

import { Chevron } from "../../../assets";

import { firestore } from "../../../firebase/firebase.utils";

import { Link, NavLink } from "react-router-dom";

const SideBar = () => {
  const [componentExpanded, setComponentExpanded] = useState(false);
  const [commonFlowsExpanded, setCommonFlowsExpanded] = useState(false);
  const [projectStructureExpanded, setProjectStructureExpanded] = useState(
    false
  );
  const [collectionsArray, setCollectionsArray] = useState([]);
  const [linkActive, setlinkActive] = useState(false);

  const { sidebarState, setSidebarState } = useContext(SideBarContext);
  const { sidebarLinkState, setSidebarLinkState } = useContext(
    SideBarLinkContext
  );

  const getCollectionsArray = async () => {
    let componentCollectionsArray = [];
    const collectionsRef = firestore.collection("components");
    const collectionsSnapshot = await collectionsRef.get();
    collectionsSnapshot.forEach((collection) => {
      componentCollectionsArray.push(collection.data().name);
    });
    setCollectionsArray(componentCollectionsArray);
  };

  useEffect(() => {
    getCollectionsArray();
  }, []);

  const commonFlowsTestArray = ["FirebaseAuth", "ThemeToggle"];
  const projectStructureTestArray = ["AddFilesToFirestore"];

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
              {collectionsArray.map((componentLink) => (
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
                    setlinkActive(componentLink);
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
              {commonFlowsTestArray.map((commonFlowsLink) => (
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
                    setlinkActive(commonFlowsLink);
                    setSidebarLinkState({ linkName: commonFlowsLink });
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
              {projectStructureTestArray.map((projectStructureLink) => (
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
                    setlinkActive(projectStructureLink);
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
