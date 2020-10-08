import React from "react";

import "./PageContent.style.scss";

import ReactMarkdown from "react-markdown";

import { DownloadIcon } from "../../../assets";
import { CodeBlock } from "../../../components";

const PageContent = () => {
  const codeBlock = `
\`\`\`javascript
import React from 'react';

import './CustomButton.style.scss';

const CustomButton = ({ children, large, ...otherProps }) => (
  <button
    className={\`\${large ? 'custom__button--large' : ''} custom__button\`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
\`\`\`  
  `;

  const styleBlock = `
  \`\`\`css
  .custom {
    &__button {
      cursor: pointer;
      width: 150px;
      background: #3f51b5;
      color: whitesmoke;
      border: 2px solid #3f51b5;
      padding: 10px 5px;
      border-radius: 4px;
      box-shadow: none;
      font-size: 1.1rem;
      text-align: center;
      transition: all 0.2s ease-in-out;
      font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  
      &--large {
        width: 250px;
      }
  
      &:hover {
        background: whitesmoke;
        color: #0077ff;
      }
  
      &:focus {
        outline: none;
      }
    }
  }
  
  .button {
    &--disabled {
      pointer-events: none;
      cursor: not-allowed;
    }
  }
  
  \`\`\`  
    `;

  return (
    <div className="content__container">
      <div className="content__download">
        Download .zip here: <DownloadIcon className="download__button" />
      </div>
      <div className="content__header">CustomButton</div>
      {/* unsure how to implement this for now; maybe innerHTML or something */}
      <div className="content__subheader">Example Component:</div>
      <div className="content__example">
        <button>Hello im a button</button>
      </div>

      <ReactMarkdown source={codeBlock} renderers={{ code: CodeBlock }} />

      <div className="content__subheader">Component Styling:</div>

      <ReactMarkdown source={styleBlock} renderers={{ code: CodeBlock }} />
    </div>
  );
};

export default PageContent;
