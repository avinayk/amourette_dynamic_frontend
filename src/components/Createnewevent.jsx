import React from "react";
import { BsCloudUpload } from "react-icons/bs";

export const Createnewevent = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  const handleOverlayClick = (e) => {
    // Check if the clicked element is the overlay
    if (e.target.classList.contains("popup-overlay")) {
      onClose(); // Close the popup if the overlay is clicked
    }
  };
  return (
    <>
      <div className="popup-overlay" onClick={handleOverlayClick}>
        <div className="popup-content col-md-4">
          <button className="close-button" onClick={onClose}>
            &times; {/* Close button */}
          </button>
          <div className="cneventup  d-flex flex-column gap-4">
            <h3>Create new event</h3>
            <form action="">
              <div className="row gy-4">
                <div className="col-md-4">
                  <div className="uploadfile rel bgload">
                    <input type="file" name="" id="" className="fileload" />
                    <div className="inload" style={{ height: "100px" }}>
                      <div>
                        <BsCloudUpload  style={{ fontSize: "24px" }} />
                        <h3 style={{ fontSize: "14px" }}>Upload image</h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <input type="text" placeholder="Event name" />
                </div>
                <div className="col-md-4">
                    <div className="datetimeline rel">
                        <label htmlFor="" className="stextlabel">Start date</label>
                    <input type="" />
                    </div>
                 
                </div>
                <div className="col-md-4">
                <div className="datetimeline rel">
                    <label htmlFor="" className="stextlabel">End date</label>
                    <input type="" />
                    </div>
                </div>
                <div className="col-md-4">
                <div className="datetimeline rel">
                    <label htmlFor="" className="stextlabel">Time</label>
                    <input type="" />
                    </div>
                </div>
                <div className="col-12">
                  <input type="text" placeholder="Location" />
                </div>
                <div className="col-12">
                  <textarea
                    name=""
                    id=""
                    rows="5"
                    placeholder="Event description"
                  ></textarea>
                </div>
                <div className="col-12">
                  <div className="listbox">
                    <label className="cbox">
                      Make Private
                      <input type="checkbox" name="makeImagePrivate" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                </div>
                <div className="col-12">
                  <button type="submit">Create new event</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
