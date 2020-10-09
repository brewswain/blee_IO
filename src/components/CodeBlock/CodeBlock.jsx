import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";
import { CopyToClipboard } from "react-copy-to-clipboard";

import "./CodeBlock.style.scss";

import { CopyIcon } from "../../assets";

const CodeBlock = ({ value }) => {
  return (
    <div className="copied__code">
      <CopyToClipboard text={value} className="copy__button">
        <CopyIcon className="copy__icon" />
      </CopyToClipboard>
      {/* TODO: dynamically add language; both jsx and scss */}
      <SyntaxHighlighter language="jsx" style={tomorrow}>
        {value}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
