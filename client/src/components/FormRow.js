import React from "react";

const FormRow = ({type, name, value, handleChange, lableText}) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {lableText || name}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        className="form-input"
      ></input>
 
    </div>
  );
};

export default FormRow;
