import React from "react";
import logo from "../assets/images/logo.png";
import icon1 from "../assets/images/menuicon.png"
import icon2 from "../assets/images/bell.png"
import icon3 from "../assets/images/chat.png"



function Headertwo() {
  return (
    <>
      <header className="header">
        <div className="container-lg">
          <div className="row gy-3 align-items-center">
            <div className="col-md-3">
              <a href="#" className="toplogo d-inline-block fulw">
                <img src={logo} alt="Logo" />
              </a>
            </div>
            <div className="col-md-3">
              <div className="d-block topsearch">
                <form action="">
                  <input type="text" placeholder="Search Amourette..." />
                </form>
              </div>
            </div>
            <div className="col-md-6">
              <div className="d-flex justify-content-center justify-content-md-end">
                <div className="d-flex gap-4 align-items-center">
                  <div className="d-flex gap-3">
                    <div>
                        <button type="button" className="topmenu">
                            <img src={icon1} alt="icon" />
                        </button>
                    </div>
                    <div>
                        <button type="button" className="topmenu">
                            <img src={icon2} alt="icon" />
                        </button>
                    </div>
                    <div>
                        <button type="button" className="topmenu">
                            <img src={icon3} alt="icon" />
                        </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Headertwo;
