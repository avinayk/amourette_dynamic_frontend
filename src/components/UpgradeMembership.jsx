import React from "react";
import { GiCheckMark } from "react-icons/gi";


export const UpgradeMembership = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <>
      <div className="popup-overlay">
        <div className="popup-content">
          <button className="close-button" onClick={onClose}>
            &times; {/* Close button */}
          </button>
          <div className="row gy-4">
            <div className="col-md-4">
              <div className="planbox d-flex flex-column gap-3">
                <h1>Basic</h1>
                <h2>Price</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam tempus ipsum ac efficitur cursus.
                </p>
                <button type="button">GET STARTED</button>
                <hr />
                <h3>What's included?</h3>
                <div className="d-flex flex-column gap-3">
                    <div className="d-flex gap-2">
                        <div className="flex-shrink-0"><GiCheckMark /></div>
                        <div className="flex-grow-1">
                            <h4>Lorem ipsum dolor sit amet</h4>
                        </div>
                    </div>
                    <div className="d-flex gap-2">
                        <div className="flex-shrink-0"><GiCheckMark /></div>
                        <div className="flex-grow-1">
                            <h4>Lorem ipsum dolor sit amet</h4>
                        </div>
                    </div>
                    <div className="d-flex gap-2">
                        <div className="flex-shrink-0"><GiCheckMark /></div>
                        <div className="flex-grow-1">
                            <h4>Lorem ipsum dolor sit amet</h4>
                        </div>
                    </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="planbox d-flex flex-column gap-3">
                <h1>pro</h1>
                <h2>Price</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam tempus ipsum ac efficitur cursus.
                </p>
                <button type="button">GET STARTED</button>
                <hr />
                <h3>What's included?</h3>
                <div className="d-flex flex-column gap-3">
                    <div className="d-flex gap-2">
                        <div className="flex-shrink-0"><GiCheckMark /></div>
                        <div className="flex-grow-1">
                            <h4>Lorem ipsum dolor sit amet</h4>
                        </div>
                    </div>
                    <div className="d-flex gap-2">
                        <div className="flex-shrink-0"><GiCheckMark /></div>
                        <div className="flex-grow-1">
                            <h4>Lorem ipsum dolor sit amet</h4>
                        </div>
                    </div>
                    <div className="d-flex gap-2">
                        <div className="flex-shrink-0"><GiCheckMark /></div>
                        <div className="flex-grow-1">
                            <h4>Lorem ipsum dolor sit amet</h4>
                        </div>
                    </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="planbox d-flex flex-column gap-3">
                <h1>vip</h1>
                <h2>Price</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam tempus ipsum ac efficitur cursus.
                </p>
                <button type="button">GET STARTED</button>
                <hr />
                <h3>What's included?</h3>
                <div className="d-flex flex-column gap-3">
                    <div className="d-flex gap-2">
                        <div className="flex-shrink-0"><GiCheckMark /></div>
                        <div className="flex-grow-1">
                            <h4>Lorem ipsum dolor sit amet</h4>
                        </div>
                    </div>
                    <div className="d-flex gap-2">
                        <div className="flex-shrink-0"><GiCheckMark /></div>
                        <div className="flex-grow-1">
                            <h4>Lorem ipsum dolor sit amet</h4>
                        </div>
                    </div>
                    <div className="d-flex gap-2">
                        <div className="flex-shrink-0"><GiCheckMark /></div>
                        <div className="flex-grow-1">
                            <h4>Lorem ipsum dolor sit amet</h4>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
