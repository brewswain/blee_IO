import React, { useEffect } from "react";

import "./PageContent.style.scss";

import ReactMarkdown from "react-markdown";

import { DownloadIcon } from "../../../assets";
import { CodeBlock } from "../../../components";

const PageContent = ({
  id,
  name,
  code,
  component,
  codeSnippet,
  styleSnippet,
}) => {
  return (
    <div className="content__container">
      <div className="content__download">
        Download .zip here: <DownloadIcon className="download__button" />
      </div>
      <div className="content__header">{name}</div>
      {/* unsure how to implement this for now; maybe innerHTML or something */}
      <div className="content__subheader">Example Component:</div>
      {/* <div className="content__example" inn>
        {code[0].code}
      </div> */}

      <ReactMarkdown source={codeSnippet} renderers={{ code: CodeBlock }} />

      <div className="content__subheader">Component Styling:</div>

      <ReactMarkdown source={styleSnippet} renderers={{ code: CodeBlock }} />
    </div>
  );
};

export default PageContent;
