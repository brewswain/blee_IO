import React, { useEffect, useState } from "react";

import "./SideBar.style.scss";

import { Chevron } from "../../../assets";

import { firestore } from "../../../firebase/firebase.utils";

import { Link } from "react-router-dom";

const SideBar = () => {
  const [componentExpanded, setComponentExpanded] = useState(false);
  const [commonFlowsExpanded, setCommonFlowsExpanded] = useState(false);
  const [projectStructureExpanded, setProjectStructureExpanded] = useState(
    false
  );
  const [collectionsArray, setCollectionsArray] = useState([]);

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
    <div className="sidebar__container">
      <div className="sidebar__list">
        <div className="sidebar__accordion">
          <div className="accordion__container">
            <div
              className="accordion__category"
              onClick={() => {
                setComponentExpanded(!componentExpanded);
              }}
            >Components
              <Chevron
                className={`${
                  componentExpanded ? "accordion__chevron--expanded" : null
                } accordion__chevron`}
              /></div>
            <div
              className={`${
                componentExpanded
                  ? "accordion__details--visible"
                  : "accordion__details--invisible"
              } accordion__details`}
            >
              {collectionsArray.map((componentLink) => (
                <Link
                  className="sidebar__link"
                  to={`/components/${componentLink}`}
                >
                  {componentLink}
                </Link>
              ))}
            </div>
          </div>
          <div className="accordion__container">
            <div
              className="accordion__category"
              onClick={() => {
                setCommonFlowsExpanded(!commonFlowsExpanded);
              }}
            >
              Common Flows
              <Chevron
                className={`${
                  commonFlowsExpanded ? "accordion__chevron--expanded" : null
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
                <Link
                  className="sidebar__link"
                  to={`/commonFlows/${commonFlowsLink}`}
                >
                  {commonFlowsLink}
                </Link>
              ))}
            </div>
          </div>
          <div className="accordion__container">
            <div
              className="accordion__category"
              onClick={() => {
                setProjectStructureExpanded(!projectStructureExpanded);
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
              {projectStructureTestArray.map((commonFlowsLink) => (
                <Link
                  className="sidebar__link"
                  to={`/projectStructure/${commonFlowsLink}`}
                >
                  {commonFlowsLink}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
