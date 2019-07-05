import React from "react";
import PropTypes from "prop-types";
import { Icon } from "react-icons-kit";
import * as fa from "react-icons-kit/fa";
import * as icomoon from "react-icons-kit/icomoon";
import * as md from "react-icons-kit/md";
import * as metrize from "react-icons-kit/metrize";
import * as iconic from "react-icons-kit/iconic";
import * as ionicons from "react-icons-kit/ionicons";
import * as entypo from "react-icons-kit/entypo";
import * as ikons from "react-icons-kit/ikons";
import * as oct from "react-icons-kit/oct";
import * as linea from "react-icons-kit/linea";
import * as typicons from "react-icons-kit/typicons";
import * as noto_emoji_regular from "react-icons-kit/noto_emoji_regular";
import * as feather from "react-icons-kit/feather";
import * as ionics from "react-icons-kit/ionicons";

const propTypes = {
  type: PropTypes.oneOf([
    "fa",
    "md",
    "icomoon",
    "metrize",
    "iconic",
    "ionicons",
    "entypo",
    "ikons",
    "oct",
    "linea",
    "typicons",
    "noto_emoji_regular",
    "feather",
    "ionics"
  ]),
  name: PropTypes.string.isRequired,
  spin: PropTypes.bool,
  style: PropTypes.object
};

const defaultProps = {
  type: "fa",
  spin: false,
  style: {}
};

const getType = type_name => {
  switch (type_name) {
    case "fa":
      return fa;
    case "md":
      return md;
    case "icomoon":
      return icomoon;
    case "metrize":
      return metrize;
    case "iconic":
      return iconic;
    case "ionicons":
      return ionicons;
    case "entypo":
      return entypo;
    case "ikons":
      return ikons;
    case "oct":
      return oct;
    case "linea":
      return linea;
    case "typicons":
      return typicons;
    case "noto_emoji_regular":
      return noto_emoji_regular;
    case "feather":
      return feather;
    case "ionics":
      return ionics;
    default:
      return fa;
  }
};

const Ico = props => {
  const type = getType(props.type);

  return (
    <span style={props.style}>
      <Icon
        className={props.className + (props.spin ? " spinner " : "")}
        size={props.size}
        icon={type[props.name]}
      />
    </span>
  );
};

Ico.propTypes = propTypes;

Ico.defaultProps = defaultProps;

export default Ico;
