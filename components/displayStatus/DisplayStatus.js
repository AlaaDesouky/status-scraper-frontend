import React, { useContext } from "react";
import { ScraperContext } from "../ScraperContextController";

import StatusInfo from "./StatusInfo";

const DisplayStatus = () => {
  const [state, getData] = useContext(ScraperContext);
  const { user, userStatus } = state;
  return (
    <>
      <div className="card-body">
        <h5 className="card-title">{user}</h5>
        {userStatus.map((status, index) => {
          const [currentStatus] = Object.entries(status);
          return <StatusInfo key={index} currentStatus={currentStatus} />;
        })}
      </div>
    </>
  );
};

export default DisplayStatus;
