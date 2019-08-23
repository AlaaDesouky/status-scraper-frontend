import React from "react";

const StatusInfo = ({ currentStatus }) => {
  const [status, statusInfo] = currentStatus;
  const information = Object.entries(statusInfo);

  return (
    <>
      <p className="card-subtitle mb-6 text-muted">{status}</p>
      <ul className="list-group list-group-flush">
        {information.map(info => (
          <li className="list-group-item d-flex justify-content-between align-items-center">
            <em>{info[0]}</em>
            <span className="badge badge-primary badge-pill">{info[1]}</span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default StatusInfo;
