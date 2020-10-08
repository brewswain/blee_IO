import React, { useState } from "react";

import "./SideBar.style.scss";

import { Chevron } from "../../../assets";

const SideBar = () => {
  const [expanded, setExpanded] = useState(false);

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
            <div className="accordion__subcategory">Hey</div>
            <div className="accordion__subcategory">Hi</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
