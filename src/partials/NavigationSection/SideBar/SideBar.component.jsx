import React, { useState } from "react";

import "./SideBar.style.scss";

import { Chevron } from "../../../assets";

import {
  Switch,
  Link,
  Route,
  useParams,
  useRouteMatch,
} from "react-router-dom";

const SideBar = () => {
  const [expanded, setExpanded] = useState(false);

  let { path, url } = useRouteMatch();

  const testArray = ["CustomButton", "test3"];

  return (
    <div className="sidebar__container">
      <div className="sidebar__list">
        <div className="sidebar__accordion">
          <div className="accordion__container">
            <div
              className="accordion__category"
              onClick={() => {
                setExpanded(!expanded);
              }}
            >
              Components
              <Chevron
                className={`${
                  expanded ? "accordion__chevron--expanded" : null
                } accordion__chevron`}
              />
            </div>
          </div>
          <div
            className={`${
              expanded
                ? "accordion__details--visible"
                : "accordion__details--invisible"
            } accordion__details`}
          >
            {/* <Link
              className="sidebar__link"
              to={`/components/CustomButton`}
              replace
            >
              CustomButton
            </Link>
            <Link className="sidebar__link" to={`/components/test3`} replace>
              test3
            </Link> */}
            {testArray.map((testLink) => (
              <Link className="sidebar__link" to={`/components/${testLink}`}>
                {testLink}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
