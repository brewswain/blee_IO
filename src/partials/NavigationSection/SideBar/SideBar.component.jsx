import React, { useContext, useEffect, useState } from "react";

import "./SideBar.style.scss";

import { SideBarContext } from "../../../contexts";

import { Chevron } from "../../../assets";

import { firestore } from "../../../firebase/firebase.utils";

import { NavLink } from "react-router-dom";

const SideBar = () => {
  const [componentExpanded, setComponentExpanded] = useState(false);
  const [commonFlowsExpanded, setCommonFlowsExpanded] = useState(false);
  const [projectStructureExpanded, setProjectStructureExpanded] = useState(
    false
  );
  const [collectionsArray, setCollectionsArray] = useState([]);
  const { sidebarState, setSidebarState } = useContext(SideBarContext);

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
                  key={componentLink}
                  className="sidebar__link"
                  activeClassName="sidebar__link--active"
                  to={`/components/${componentLink}`}
                  onClick={() => {
                    setSidebarState({ isActive: !sidebarState.isActive });
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
                  key={commonFlowsLink}
                  className="sidebar__link"
                  activeClassName="sidebar__link--active"
                  to={`/commonFlows/${commonFlowsLink}`}
                  onClick={() => {
                    setSidebarState({ isActive: !sidebarState.isActive });
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
                  key={projectStructureLink}
                  className="sidebar__link"
                  activeClassName="sidebar__link--active"
                  to={`/projectStructure/${projectStructureLink}`}
                  onClick={() => {
                    setSidebarState({ isActive: !sidebarState.isActive });
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
