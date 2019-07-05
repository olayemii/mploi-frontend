import React, { useState } from "react";

export default function withFormControl(WrappedComponent) {
  return props => {
    const onChangeField = e =>
      setFields({ ...fields, [e.target.id]: e.target.value });

    const [fields, setFields] = useState({});

    const submitForm = e => {
      e.preventDefault();
    };

    const getFieldData = () => fields;

    return (
      <WrappedComponent
        onChangeField={onChangeField}
        submitForm={submitForm}
        fields={fields}
        getFieldData={getFieldData}
        {...props}
      />
    );
  };
}
