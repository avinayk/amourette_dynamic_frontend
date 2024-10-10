import React from "react";

export default function SuccessPop({ message }) {
  return (
    <>
      <div className="container-lg position-relative d-flex justify-content-end">
        <div className="d-block success_notification w-fit">
          <p className="text-success">{message}</p>
        </div>
      </div>
    </>
  );
}
