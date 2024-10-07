import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { Footer } from "../components/Footer";
import ev1 from "../assets/images/ev1.png";
import ev2 from "../assets/images/ev2.png";
import ev3 from "../assets/images/ev3.png";
import evenphoto from "../assets/images/pic.png";

import Headertwo from "../components/Headertwo";
import { Createnewevent } from "../components/Createnewevent";

function Events() {
  // State to track the active button
  const [activeIndex, setActiveIndex] = useState(0); // Default to the first button

  const handleButtonClick = (index) => {
    setActiveIndex(index); // Set the clicked button as active
  };



  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
    // Disable body scroll when popup is open
    document.body.style.overflowY = 'hidden';
};

const closePopup = () => {
    setIsPopupOpen(false);
    // Re-enable body scroll when popup is closed
    document.body.style.overflowY = 'auto';
};


  return (
    <>
      <Headertwo />
      <section className="alleventsbox d-block gapy">
        <div className="container-lg">
          <div className="row gy-4">
            <div className="col-md-3 sticky-md-top h-100  evleft">
              <div className="d-flex flex-column gap-3 searchleftfilter ">
                <h2>Events</h2>
                <div className="filtersearch">
                  <form action="">
                    <input type="text" placeholder="search events" />
                  </form>
                </div>
                <div className="d-flex flex-column gap-2">
                  <button
                    type="button"
                    className={`d-flex gap-2 align-items-center filterlist ${
                      activeIndex === 0 ? "active" : ""
                    }`}
                    onClick={() => handleButtonClick(0)}
                  >
                    <div className="flex-shrink-0">
                      <div className="eventicon fulw">
                        <img src={ev1} alt="eventicon" />
                      </div>
                    </div>
                    <div className="flex-grow-1">
                      <h3>All events</h3>
                    </div>
                  </button>
                  <button
                    type="button"
                    className={`d-flex gap-2 align-items-center filterlist ${
                      activeIndex === 1 ? "active" : ""
                    }`}
                    onClick={() => handleButtonClick(1)}
                  >
                    <div className="flex-shrink-0">
                      <div className="eventicon fulw">
                        <img src={ev2} alt="eventicon" />
                      </div>
                    </div>
                    <div className="flex-grow-1">
                      <h3>Your events</h3>
                    </div>
                  </button>
                  <button
                    type="button"
                    className={`d-flex gap-2 align-items-center filterlist ${
                      activeIndex === 2 ? "active" : ""
                    }`}
                    onClick={() => handleButtonClick(2)}
                  >
                    <div className="flex-shrink-0">
                      <div className="eventicon fulw">
                        <img src={ev3} alt="eventicon" />
                      </div>
                    </div>
                    <div className="flex-grow-1">
                      <h3>Discover new</h3>
                    </div>
                  </button>
                  <div className="newebentbtn d-block">
                    <button type="button"   onClick={openPopup}>CREATE NEW EVENT</button>
                  </div>
                  <hr className="linehr" />
                  <div className="d-flex flex-column gap-3 categorieslist">
                    <h6>Categories</h6>
                    <div className="d-flex flex-column gap-2">
                      <div className="listbox d-flex flex-column gap-3">
                        <label className="cbox">
                          Drinks
                          <input type="radio" name="labels" value="Drinks" />
                          <span className="checkmark"></span>
                        </label>

                        <label className="cbox">
                          Fetish
                          <input type="radio" name="labels" value="Fetish" />
                          <span className="checkmark"></span>
                        </label>

                        <label className="cbox">
                          Meetups
                          <input type="radio" name="labels" value="Meetups" />
                          <span className="checkmark"></span>
                        </label>

                        <label className="cbox">
                          Love
                          <input type="radio" name="labels" value="Love" />
                          <span className="checkmark"></span>
                        </label>
                        <label className="cbox">
                          Party
                          <input type="radio" name="labels" value="Party" />
                          <span className="checkmark"></span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <div className="row gy-4">
                <div className="col-md-6">
                  <div className="eventname d-flex flex-column gap-3 h-100">
                    <div className="d-flex gap-3 flex-md-row-reverse">
                      <div className="flex-shrink-0">
                        <div className="eventpic ofit">
                          <img src={evenphoto} alt="eventspic" />
                        </div>
                      </div>
                      <div className="flex-grow-1">
                        <div className="d-flex flex-column gap-2 h-100">
                          <h3>07 oct 2024</h3>
                          <h4>Event name Ensure CSS for Custom Checkmarks</h4>
                          <h5>Location</h5>
                          <h6>Amount of members interested.</h6>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex flex-column flex-lg-row gap-2 justify-content-md-between inbtns mt-auto">
                      <button type="button" className="btn  sebtn">
                        INTERESTED
                      </button>
                      <button type="button" className="btn prbtn">
                        INVITE A FRIEND
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="eventname d-flex flex-column gap-3 h-100">
                    <div className="d-flex gap-3 flex-md-row-reverse">
                      <div className="flex-shrink-0">
                        <div className="eventpic ofit">
                          <img src={evenphoto} alt="eventspic" />
                        </div>
                      </div>
                      <div className="flex-grow-1">
                        <div className="d-flex flex-column gap-2 h-100">
                          <h3>07 oct 2024</h3>
                          <h4>Event name </h4>
                          <h5>Location</h5>
                          <h6>Amount of members interested.</h6>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex flex-column flex-lg-row gap-2 justify-content-md-between inbtns mt-auto">
                      <button type="button" className="btn  sebtn">
                        INTERESTED
                      </button>
                      <button type="button" className="btn prbtn">
                        INVITE A FRIEND
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="eventname d-flex flex-column gap-3 h-100">
                    <div className="d-flex gap-3 flex-md-row-reverse">
                      <div className="flex-shrink-0">
                        <div className="eventpic ofit">
                          <img src={evenphoto} alt="eventspic" />
                        </div>
                      </div>
                      <div className="flex-grow-1">
                        <div className="d-flex flex-column gap-2 h-100">
                          <h3>07 oct 2024</h3>
                          <h4>Event name Ensure CSS for Custom Checkmarks</h4>
                          <h5>Location</h5>
                          <h6>Amount of members interested.</h6>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex flex-column flex-lg-row gap-2 justify-content-md-between inbtns mt-auto">
                      <button type="button" className="btn  sebtn">
                        INTERESTED
                      </button>
                      <button type="button" className="btn prbtn">
                        INVITE A FRIEND
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="eventname d-flex flex-column gap-3 h-100">
                    <div className="d-flex gap-3 flex-md-row-reverse">
                      <div className="flex-shrink-0">
                        <div className="eventpic ofit">
                          <img src={evenphoto} alt="eventspic" />
                        </div>
                      </div>
                      <div className="flex-grow-1">
                        <div className="d-flex flex-column gap-2 h-100">
                          <h3>07 oct 2024</h3>
                          <h4>Event name </h4>
                          <h5>Location</h5>
                          <h6>Amount of members interested.</h6>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex flex-column flex-lg-row gap-2 justify-content-md-between inbtns mt-auto">
                      <button type="button" className="btn  sebtn">
                        INTERESTED
                      </button>
                      <button type="button" className="btn prbtn">
                        INVITE A FRIEND
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="eventname d-flex flex-column gap-3 h-100">
                    <div className="d-flex gap-3 flex-md-row-reverse">
                      <div className="flex-shrink-0">
                        <div className="eventpic ofit">
                          <img src={evenphoto} alt="eventspic" />
                        </div>
                      </div>
                      <div className="flex-grow-1">
                        <div className="d-flex flex-column gap-2 h-100">
                          <h3>07 oct 2024</h3>
                          <h4>Event name Ensure CSS for Custom Checkmarks</h4>
                          <h5>Location</h5>
                          <h6>Amount of members interested.</h6>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex flex-column flex-lg-row gap-2 justify-content-md-between inbtns mt-auto">
                      <button type="button" className="btn  sebtn">
                        INTERESTED
                      </button>
                      <button type="button" className="btn prbtn">
                        INVITE A FRIEND
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="eventname d-flex flex-column gap-3 h-100">
                    <div className="d-flex gap-3 flex-md-row-reverse">
                      <div className="flex-shrink-0">
                        <div className="eventpic ofit">
                          <img src={evenphoto} alt="eventspic" />
                        </div>
                      </div>
                      <div className="flex-grow-1">
                        <div className="d-flex flex-column gap-2 h-100">
                          <h3>07 oct 2024</h3>
                          <h4>Event name </h4>
                          <h5>Location</h5>
                          <h6>Amount of members interested.</h6>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex flex-column flex-lg-row gap-2 justify-content-md-between inbtns mt-auto">
                      <button type="button" className="btn  sebtn">
                        INTERESTED
                      </button>
                      <button type="button" className="btn prbtn">
                        INVITE A FRIEND
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="eventname d-flex flex-column gap-3 h-100">
                    <div className="d-flex gap-3 flex-md-row-reverse">
                      <div className="flex-shrink-0">
                        <div className="eventpic ofit">
                          <img src={evenphoto} alt="eventspic" />
                        </div>
                      </div>
                      <div className="flex-grow-1">
                        <div className="d-flex flex-column gap-2 h-100">
                          <h3>07 oct 2024</h3>
                          <h4>Event name Ensure CSS for Custom Checkmarks</h4>
                          <h5>Location</h5>
                          <h6>Amount of members interested.</h6>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex flex-column flex-lg-row gap-2 justify-content-md-between inbtns mt-auto">
                      <button type="button" className="btn  sebtn">
                        INTERESTED
                      </button>
                      <button type="button" className="btn prbtn">
                        INVITE A FRIEND
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="eventname d-flex flex-column gap-3 h-100">
                    <div className="d-flex gap-3 flex-md-row-reverse">
                      <div className="flex-shrink-0">
                        <div className="eventpic ofit">
                          <img src={evenphoto} alt="eventspic" />
                        </div>
                      </div>
                      <div className="flex-grow-1">
                        <div className="d-flex flex-column gap-2 h-100">
                          <h3>07 oct 2024</h3>
                          <h4>Event name </h4>
                          <h5>Location</h5>
                          <h6>Amount of members interested.</h6>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex flex-column flex-lg-row gap-2 justify-content-md-between inbtns mt-auto">
                      <button type="button" className="btn  sebtn">
                        INTERESTED
                      </button>
                      <button type="button" className="btn prbtn">
                        INVITE A FRIEND
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="eventname d-flex flex-column gap-3 h-100">
                    <div className="d-flex gap-3 flex-md-row-reverse">
                      <div className="flex-shrink-0">
                        <div className="eventpic ofit">
                          <img src={evenphoto} alt="eventspic" />
                        </div>
                      </div>
                      <div className="flex-grow-1">
                        <div className="d-flex flex-column gap-2 h-100">
                          <h3>07 oct 2024</h3>
                          <h4>Event name Ensure CSS for Custom Checkmarks</h4>
                          <h5>Location</h5>
                          <h6>Amount of members interested.</h6>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex flex-column flex-lg-row gap-2 justify-content-md-between inbtns mt-auto">
                      <button type="button" className="btn  sebtn">
                        INTERESTED
                      </button>
                      <button type="button" className="btn prbtn">
                        INVITE A FRIEND
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="eventname d-flex flex-column gap-3 h-100">
                    <div className="d-flex gap-3 flex-md-row-reverse">
                      <div className="flex-shrink-0">
                        <div className="eventpic ofit">
                          <img src={evenphoto} alt="eventspic" />
                        </div>
                      </div>
                      <div className="flex-grow-1">
                        <div className="d-flex flex-column gap-2 h-100">
                          <h3>07 oct 2024</h3>
                          <h4>Event name </h4>
                          <h5>Location</h5>
                          <h6>Amount of members interested.</h6>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex flex-column flex-lg-row gap-2 justify-content-md-between inbtns mt-auto">
                      <button type="button" className="btn  sebtn">
                        INTERESTED
                      </button>
                      <button type="button" className="btn prbtn">
                        INVITE A FRIEND
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="eventname d-flex flex-column gap-3 h-100">
                    <div className="d-flex gap-3 flex-md-row-reverse">
                      <div className="flex-shrink-0">
                        <div className="eventpic ofit">
                          <img src={evenphoto} alt="eventspic" />
                        </div>
                      </div>
                      <div className="flex-grow-1">
                        <div className="d-flex flex-column gap-2 h-100">
                          <h3>07 oct 2024</h3>
                          <h4>Event name Ensure CSS for Custom Checkmarks</h4>
                          <h5>Location</h5>
                          <h6>Amount of members interested.</h6>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex flex-column flex-lg-row gap-2 justify-content-md-between inbtns mt-auto">
                      <button type="button" className="btn  sebtn">
                        INTERESTED
                      </button>
                      <button type="button" className="btn prbtn">
                        INVITE A FRIEND
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="eventname d-flex flex-column gap-3 h-100">
                    <div className="d-flex gap-3 flex-md-row-reverse">
                      <div className="flex-shrink-0">
                        <div className="eventpic ofit">
                          <img src={evenphoto} alt="eventspic" />
                        </div>
                      </div>
                      <div className="flex-grow-1">
                        <div className="d-flex flex-column gap-2 h-100">
                          <h3>07 oct 2024</h3>
                          <h4>Event name </h4>
                          <h5>Location</h5>
                          <h6>Amount of members interested.</h6>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex flex-column flex-lg-row gap-2 justify-content-md-between inbtns mt-auto">
                      <button type="button" className="btn  sebtn">
                        INTERESTED
                      </button>
                      <button type="button" className="btn prbtn">
                        INVITE A FRIEND
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="eventname d-flex flex-column gap-3 h-100">
                    <div className="d-flex gap-3 flex-md-row-reverse">
                      <div className="flex-shrink-0">
                        <div className="eventpic ofit">
                          <img src={evenphoto} alt="eventspic" />
                        </div>
                      </div>
                      <div className="flex-grow-1">
                        <div className="d-flex flex-column gap-2 h-100">
                          <h3>07 oct 2024</h3>
                          <h4>Event name Ensure CSS for Custom Checkmarks</h4>
                          <h5>Location</h5>
                          <h6>Amount of members interested.</h6>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex flex-column flex-lg-row gap-2 justify-content-md-between inbtns mt-auto">
                      <button type="button" className="btn  sebtn">
                        INTERESTED
                      </button>
                      <button type="button" className="btn prbtn">
                        INVITE A FRIEND
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="eventname d-flex flex-column gap-3 h-100">
                    <div className="d-flex gap-3 flex-md-row-reverse">
                      <div className="flex-shrink-0">
                        <div className="eventpic ofit">
                          <img src={evenphoto} alt="eventspic" />
                        </div>
                      </div>
                      <div className="flex-grow-1">
                        <div className="d-flex flex-column gap-2 h-100">
                          <h3>07 oct 2024</h3>
                          <h4>Event name </h4>
                          <h5>Location</h5>
                          <h6>Amount of members interested.</h6>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex flex-column flex-lg-row gap-2 justify-content-md-between inbtns mt-auto">
                      <button type="button" className="btn  sebtn">
                        INTERESTED
                      </button>
                      <button type="button" className="btn prbtn">
                        INVITE A FRIEND
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="eventname d-flex flex-column gap-3 h-100">
                    <div className="d-flex gap-3 flex-md-row-reverse">
                      <div className="flex-shrink-0">
                        <div className="eventpic ofit">
                          <img src={evenphoto} alt="eventspic" />
                        </div>
                      </div>
                      <div className="flex-grow-1">
                        <div className="d-flex flex-column gap-2 h-100">
                          <h3>07 oct 2024</h3>
                          <h4>Event name Ensure CSS for Custom Checkmarks</h4>
                          <h5>Location</h5>
                          <h6>Amount of members interested.</h6>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex flex-column flex-lg-row gap-2 justify-content-md-between inbtns mt-auto">
                      <button type="button" className="btn  sebtn">
                        INTERESTED
                      </button>
                      <button type="button" className="btn prbtn">
                        INVITE A FRIEND
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="eventname d-flex flex-column gap-3 h-100">
                    <div className="d-flex gap-3 flex-md-row-reverse">
                      <div className="flex-shrink-0">
                        <div className="eventpic ofit">
                          <img src={evenphoto} alt="eventspic" />
                        </div>
                      </div>
                      <div className="flex-grow-1">
                        <div className="d-flex flex-column gap-2 h-100">
                          <h3>07 oct 2024</h3>
                          <h4>Event name </h4>
                          <h5>Location</h5>
                          <h6>Amount of members interested.</h6>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex flex-column flex-lg-row gap-2 justify-content-md-between inbtns mt-auto">
                      <button type="button" className="btn  sebtn">
                        INTERESTED
                      </button>
                      <button type="button" className="btn prbtn">
                        INVITE A FRIEND
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="eventname d-flex flex-column gap-3 h-100">
                    <div className="d-flex gap-3 flex-md-row-reverse">
                      <div className="flex-shrink-0">
                        <div className="eventpic ofit">
                          <img src={evenphoto} alt="eventspic" />
                        </div>
                      </div>
                      <div className="flex-grow-1">
                        <div className="d-flex flex-column gap-2 h-100">
                          <h3>07 oct 2024</h3>
                          <h4>Event name Ensure CSS for Custom Checkmarks</h4>
                          <h5>Location</h5>
                          <h6>Amount of members interested.</h6>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex flex-column flex-lg-row gap-2 justify-content-md-between inbtns mt-auto">
                      <button type="button" className="btn  sebtn">
                        INTERESTED
                      </button>
                      <button type="button" className="btn prbtn">
                        INVITE A FRIEND
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="eventname d-flex flex-column gap-3 h-100">
                    <div className="d-flex gap-3 flex-md-row-reverse">
                      <div className="flex-shrink-0">
                        <div className="eventpic ofit">
                          <img src={evenphoto} alt="eventspic" />
                        </div>
                      </div>
                      <div className="flex-grow-1">
                        <div className="d-flex flex-column gap-2 h-100">
                          <h3>07 oct 2024</h3>
                          <h4>Event name </h4>
                          <h5>Location</h5>
                          <h6>Amount of members interested.</h6>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex flex-column flex-lg-row gap-2 justify-content-md-between inbtns mt-auto">
                      <button type="button" className="btn  sebtn">
                        INTERESTED
                      </button>
                      <button type="button" className="btn prbtn">
                        INVITE A FRIEND
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="eventname d-flex flex-column gap-3 h-100">
                    <div className="d-flex gap-3 flex-md-row-reverse">
                      <div className="flex-shrink-0">
                        <div className="eventpic ofit">
                          <img src={evenphoto} alt="eventspic" />
                        </div>
                      </div>
                      <div className="flex-grow-1">
                        <div className="d-flex flex-column gap-2 h-100">
                          <h3>07 oct 2024</h3>
                          <h4>Event name Ensure CSS for Custom Checkmarks</h4>
                          <h5>Location</h5>
                          <h6>Amount of members interested.</h6>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex flex-column flex-lg-row gap-2 justify-content-md-between inbtns mt-auto">
                      <button type="button" className="btn  sebtn">
                        INTERESTED
                      </button>
                      <button type="button" className="btn prbtn">
                        INVITE A FRIEND
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="eventname d-flex flex-column gap-3 h-100">
                    <div className="d-flex gap-3 flex-md-row-reverse">
                      <div className="flex-shrink-0">
                        <div className="eventpic ofit">
                          <img src={evenphoto} alt="eventspic" />
                        </div>
                      </div>
                      <div className="flex-grow-1">
                        <div className="d-flex flex-column gap-2 h-100">
                          <h3>07 oct 2024</h3>
                          <h4>Event name </h4>
                          <h5>Location</h5>
                          <h6>Amount of members interested.</h6>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex flex-column flex-lg-row gap-2 justify-content-md-between inbtns mt-auto">
                      <button type="button" className="btn  sebtn">
                        INTERESTED
                      </button>
                      <button type="button" className="btn prbtn">
                        INVITE A FRIEND
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="eventname d-flex flex-column gap-3 h-100">
                    <div className="d-flex gap-3 flex-md-row-reverse">
                      <div className="flex-shrink-0">
                        <div className="eventpic ofit">
                          <img src={evenphoto} alt="eventspic" />
                        </div>
                      </div>
                      <div className="flex-grow-1">
                        <div className="d-flex flex-column gap-2 h-100">
                          <h3>07 oct 2024</h3>
                          <h4>Event name Ensure CSS for Custom Checkmarks</h4>
                          <h5>Location</h5>
                          <h6>Amount of members interested.</h6>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex flex-column flex-lg-row gap-2 justify-content-md-between inbtns mt-auto">
                      <button type="button" className="btn  sebtn">
                        INTERESTED
                      </button>
                      <button type="button" className="btn prbtn">
                        INVITE A FRIEND
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="eventname d-flex flex-column gap-3 h-100">
                    <div className="d-flex gap-3 flex-md-row-reverse">
                      <div className="flex-shrink-0">
                        <div className="eventpic ofit">
                          <img src={evenphoto} alt="eventspic" />
                        </div>
                      </div>
                      <div className="flex-grow-1">
                        <div className="d-flex flex-column gap-2 h-100">
                          <h3>07 oct 2024</h3>
                          <h4>Event name </h4>
                          <h5>Location</h5>
                          <h6>Amount of members interested.</h6>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex flex-column flex-lg-row gap-2 justify-content-md-between inbtns mt-auto">
                      <button type="button" className="btn  sebtn">
                        INTERESTED
                      </button>
                      <button type="button" className="btn prbtn">
                        INVITE A FRIEND
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="eventname d-flex flex-column gap-3 h-100">
                    <div className="d-flex gap-3 flex-md-row-reverse">
                      <div className="flex-shrink-0">
                        <div className="eventpic ofit">
                          <img src={evenphoto} alt="eventspic" />
                        </div>
                      </div>
                      <div className="flex-grow-1">
                        <div className="d-flex flex-column gap-2 h-100">
                          <h3>07 oct 2024</h3>
                          <h4>Event name Ensure CSS for Custom Checkmarks</h4>
                          <h5>Location</h5>
                          <h6>Amount of members interested.</h6>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex flex-column flex-lg-row gap-2 justify-content-md-between inbtns mt-auto">
                      <button type="button" className="btn  sebtn">
                        INTERESTED
                      </button>
                      <button type="button" className="btn prbtn">
                        INVITE A FRIEND
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="eventname d-flex flex-column gap-3 h-100">
                    <div className="d-flex gap-3 flex-md-row-reverse">
                      <div className="flex-shrink-0">
                        <div className="eventpic ofit">
                          <img src={evenphoto} alt="eventspic" />
                        </div>
                      </div>
                      <div className="flex-grow-1">
                        <div className="d-flex flex-column gap-2 h-100">
                          <h3>07 oct 2024</h3>
                          <h4>Event name </h4>
                          <h5>Location</h5>
                          <h6>Amount of members interested.</h6>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex flex-column flex-lg-row gap-2 justify-content-md-between inbtns mt-auto">
                      <button type="button" className="btn  sebtn">
                        INTERESTED
                      </button>
                      <button type="button" className="btn prbtn">
                        INVITE A FRIEND
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Createnewevent  isOpen={isPopupOpen} onClose={closePopup}></Createnewevent>

      {/* <Footer /> */}
    </>
  );
}

export default Events;
