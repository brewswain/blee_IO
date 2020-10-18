import React, { useEffect, useState } from "react";

import "./PageContent.style.scss";

import ReactMarkdown from "react-markdown";

import { storage } from "../../../firebase/firebase.utils";
import { DownloadIcon } from "../../../assets";
import { CodeBlock, StyleBlock } from "../../../components";
import { useLocation } from "react-router-dom";

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
  const [downloadUrl, setDownloadUrl] = useState(null);

  let location = useLocation();
  let parsedLocation = location.pathname.replace("/", "");

  const storageRef = storage.ref();
  const getDownload = async () => {
    setDownloadUrl(
      await storageRef.child(`${parsedLocation}/${name}.zip`).getDownloadURL()
    );
  };

  useEffect(() => {
    getDownload();
  }, [name]);
  return (
    <div className="content__page">
      <div className="download__container">
        <a className="content__download" href={downloadUrl}>
          <span className="content__text">Download .zip here:</span>
          <DownloadIcon className="download__button" />
        </a>
      </div>
      <div className="content__container">
        <div className="content__header">{name}</div>
        {/* unsure how to implement this for now; maybe innerHTML or something */}

        {/* <div className="content__example" inn>
          {code[0].code}
        </div> */}
        {codeSnippet ? (
          <>
            <div className="content__subheader">Example Component:</div>
            <ReactMarkdown
              className="content__codeblock"
              source={codeSnippet}
              renderers={{ code: CodeBlock }}
            />
          </>
        ) : null}

        {codeSnippet_1 ? (
          <ReactMarkdown
            className="content__codeblock"
            source={codeSnippet_1}
            renderers={{ code: CodeBlock }}
          />
        ) : null}
        {codeSnippet_2 ? (
          <ReactMarkdown
            className="content__codeblock"
            source={codeSnippet_2}
            renderers={{ code: CodeBlock }}
          />
        ) : null}
        {codeSnippet_3 ? (
          <ReactMarkdown
            className="content__codeblock"
            source={codeSnippet_3}
            renderers={{ code: CodeBlock }}
          />
        ) : null}

        {styleSnippet ? (
          <>
            <div className="content__subheader">Component Styling:</div>
            <ReactMarkdown
              className="content__codeblock"
              source={styleSnippet}
              renderers={{ code: StyleBlock }}
            />
          </>
        ) : null}
      </div>
    </div>
  );
};

export default PageContent;
