import React from "react";

export default function ErrorPop({ message }) {
  return (
    <>
      <div className="container-lg position-relative d-flex justify-content-end">
        <div className="d-block error_notification">
          <p className="text-danger">{message}</p>
        </div>
      </div>
    </>
  );
}
