import React from "react";
import PropTypes from "prop-types";

import "./Typo.css";

export default function Typo({ variant, children, className, wrapperClass }) {
  const getFormattedText = (variant, text) => {
    switch (variant) {
      case "h1":
      case "h2":
      case "h3":
      case "h4":
      case "h5":
      case "h6":
      case "span":
        return React.createElement(
          variant,
          {
            className: `y-${variant} ` + (className || "")
          },
          children
        );
      case "normal":
        return <span className={"y-normal " + className}>{text}</span>;
      default:
        return <h6 className={"y-h6 " + (className || "")}>{text}</h6>;
    }
  };
  return (
    <span className={"y-typo " + (wrapperClass || "")}>
      {getFormattedText(variant, children)}
    </span>
  );
}

Typo.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.shape,
    PropTypes.node
  ]).isRequired,
  variant: PropTypes.oneOf([
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "span",
    "normal"
  ])
};
