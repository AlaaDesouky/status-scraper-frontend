import React from "react";

const SelectSocialMedia = ({ onChange, id, value, lable }) => {
  return (
    <div className="form-check form-check-inline">
      <input
        onChange={onChange}
        className="form-check-input"
        type="radio"
        name="selectSocialMedia"
        id={id}
        value={value}
      />
      <label className="form-check-label" htmlFor={id}>
        {lable}
      </label>
    </div>
  );
};

export default SelectSocialMedia;
