import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";
import { CopyToClipboard } from "react-copy-to-clipboard";

import "./CodeBlock.style.scss";

import { CopyIcon } from "../../assets";

const CodeBlock = ({ value }) => {
  const [isCopied, setIsCopied] = useState(null);

  const showTooltip = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(null);
    }, 900);
  };

  return (
    <div className="copied__code">
      <div
        className={`${
          isCopied
            ? "tooltip__container--visible"
            : "tooltip__container--invisible"
        } tooltip__container`}
      >
        <span className="tooltip__text">Copied to clipboard!</span>
      </div>
      <CopyToClipboard text={value} className="copy__button">
        <CopyIcon className="copy__icon" onClick={showTooltip} />
      </CopyToClipboard>
      <SyntaxHighlighter language="jsx" style={tomorrow}>
        {value}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
