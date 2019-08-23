import React from "react";

const Error = ({ error }) => {
  return (
    <div className="m-5 text-center">
      <div className="container">
        <h3 className="display-4">{error}</h3>
      </div>
    </div>
  );
};

export default Error;
