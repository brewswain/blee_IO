import React, { useEffect } from "react";

import "./PageContent.style.scss";

import ReactMarkdown from "react-markdown";

import { DownloadIcon } from "../../../assets";
import { CodeBlock, StyleBlock } from "../../../components";

const PageContent = ({
  id,
  name,
  code,
  component,
  codeSnippet,
  codeSnippet_1,
  codeSnippet_2,
  codeSnippet_3,
  styleSnippet,
}) => {
  return (
    <div className="content__container">
      <div className="content__download">
        Download .zip here: <DownloadIcon className="download__button" />
      </div>
      <div className="content__header">{name}</div>
      {/* unsure how to implement this for now; maybe innerHTML or something */}

      {/* <div className="content__example" inn>
        {code[0].code}
      </div> */}

      {codeSnippet ? (
        <>
          <div className="content__subheader">Example Component:</div>
          <ReactMarkdown source={codeSnippet} renderers={{ code: CodeBlock }} />
        </>
      ) : null}

      {codeSnippet_1 ? (
        <ReactMarkdown source={codeSnippet_1} renderers={{ code: CodeBlock }} />
      ) : null}
      {codeSnippet_2 ? (
        <ReactMarkdown source={codeSnippet_2} renderers={{ code: CodeBlock }} />
      ) : null}
      {codeSnippet_3 ? (
        <ReactMarkdown source={codeSnippet_3} renderers={{ code: CodeBlock }} />
      ) : null}

      {styleSnippet ? (
        <>
          <div className="content__subheader">Component Styling:</div>
          <ReactMarkdown
            source={styleSnippet}
            renderers={{ code: StyleBlock }}
          />
        </>
      ) : null}
    </div>
  );
};

export default PageContent;
