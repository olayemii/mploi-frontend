import React from "react";
import PropTypes from "prop-types";

import { Input } from "reactstrap";

export default function FormInput(props) {
  return (
    <div className="y-input">
      <Input onChange={e => props.onChange()} value={props.value} {...props} />
    </div>
  );
}

FormInput.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string
};

FormInput.defaultProps = {
  onChange: () => null,
  value: ""
};
