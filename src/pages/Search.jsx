import React from "react";
import { Link } from "react-router-dom";
import Headertwo from "../components/Headertwo";
import Accordion from "react-bootstrap/Accordion";

export default function Search() {
  return (
    <>
      <Headertwo />
      <section className="d-block searchmain gapy">
        <div className="container-lg">
          <div className="row gy-4">
            <div className="col-md-3">
              <div className="searchmenu d-flex flex-column gap-4">
                <div className="d-flex flex-column gap-1 searchinput">
                  <label>Search</label>
                  <input type="text" />
                  <span>Filters</span>
                </div>
                <div className="d-flex flex-column gap-3">
                  <Accordion>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        <div className="serachdrop d-flex align-items-center  gap-3">
                          <div className="searchicon">
                            <img
                              className="w-100 h-100"
                              src={require("../assets/images/serach1.png")}
                              alt="img"
                            />
                          </div>
                          <h3>Members</h3>
                        </div>
                      </Accordion.Header>
                      <Accordion.Body>
                        <Accordion className="memberdrop">
                          <Accordion.Item eventKey="0">
                            <Accordion.Header>Area</Accordion.Header>
                            <Accordion.Body>
                              <div className="memberdrop_listbox">
                                <div className="memberdrop_cbox">
                                  <label class="cbox d-flex align-items-center gap-3">
                                    <input type="checkbox" name="nationality" />
                                    Location
                                  </label>
                                  <label class="cbox d-flex align-items-center gap-3">
                                    <input type="checkbox" name="nationality" />
                                    Location
                                  </label>
                                  <label class="cbox d-flex align-items-center gap-3">
                                    <input type="checkbox" name="nationality" />
                                    Location
                                  </label>
                                </div>
                              </div>
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="1">
                            <Accordion.Header>Preferences</Accordion.Header>
                            <Accordion.Body>
                              <div className="memberdrop_listbox">
                                <div className="memberdrop_cbox">
                                  <label class="cbox d-flex align-items-center gap-3">
                                    <input type="checkbox" name="nationality" />
                                    Preferences
                                  </label>
                                  <label class="cbox d-flex align-items-center gap-3">
                                    <input type="checkbox" name="nationality" />
                                    Preferences
                                  </label>
                                  <label class="cbox d-flex align-items-center gap-3">
                                    <input type="checkbox" name="nationality" />
                                    Preferences
                                  </label>
                                </div>
                              </div>
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="2">
                            <Accordion.Header>Searching</Accordion.Header>
                            <Accordion.Body>
                              <div className="memberdrop_listbox">
                                <div className="memberdrop_cbox">
                                  <label class="cbox d-flex align-items-center gap-3">
                                    <input type="checkbox" name="nationality" />
                                    Searching
                                  </label>
                                  <label class="cbox d-flex align-items-center gap-3">
                                    <input type="checkbox" name="nationality" />
                                    Searching
                                  </label>
                                  <label class="cbox d-flex align-items-center gap-3">
                                    <input type="checkbox" name="nationality" />
                                    Searching
                                  </label>
                                </div>
                              </div>
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="3">
                            <Accordion.Header>Age</Accordion.Header>
                            <Accordion.Body>
                              <div className="memberdrop_listbox">
                                <div className="memberdrop_cbox">
                                  <label class="cbox d-flex align-items-center gap-3">
                                    <input type="checkbox" name="nationality" />
                                    Age
                                  </label>
                                  <label class="cbox d-flex align-items-center gap-3">
                                    <input type="checkbox" name="nationality" />
                                    Age
                                  </label>
                                  <label class="cbox d-flex align-items-center gap-3">
                                    <input type="checkbox" name="nationality" />
                                    Age
                                  </label>
                                </div>
                              </div>
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="4">
                            <Accordion.Header>
                              Sexual orientation
                            </Accordion.Header>
                            <Accordion.Body>
                              <div className="memberdrop_listbox">
                                <div className="memberdrop_cbox">
                                  <label class="cbox d-flex align-items-center gap-3">
                                    <input type="checkbox" name="nationality" />
                                    Sexual orientation
                                  </label>
                                  <label class="cbox d-flex align-items-center gap-3">
                                    <input type="checkbox" name="nationality" />
                                    Sexual orientation
                                  </label>
                                  <label class="cbox d-flex align-items-center gap-3">
                                    <input type="checkbox" name="nationality" />
                                    Sexual orientation
                                  </label>
                                </div>
                              </div>
                            </Accordion.Body>
                          </Accordion.Item>
                        </Accordion>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                  <button className="seacrh_btns">
                    <div className="serachdrop d-flex align-items-center  gap-3">
                      <div className="searchicon">
                        <img
                          className="w-100 h-100"
                          src={require("../assets/images/serach2.png")}
                          alt="img"
                        />
                      </div>
                      <h3>Photos</h3>
                    </div>
                  </button>
                  <button className="seacrh_btns">
                    <div className="serachdrop d-flex align-items-center  gap-3">
                      <div className="searchicon">
                        <img
                          className="w-100 h-100"
                          src={require("../assets/images/serach3.png")}
                          alt="img"
                        />
                      </div>
                      <h3>Groups</h3>
                    </div>
                  </button>
                  <button className="seacrh_btns">
                    <div className="serachdrop d-flex align-items-center  gap-3">
                      <div className="searchicon">
                        <img
                          className="w-100 h-100"
                          src={require("../assets/images/serach4.png")}
                          alt="img"
                        />
                      </div>
                      <h3>Events</h3>
                    </div>
                  </button>
                  <button className="seacrh_btns">
                    <div className="serachdrop d-flex align-items-center  gap-3">
                      <div className="searchicon">
                        <img
                          className="w-100 h-100"
                          src={require("../assets/images/serach5.png")}
                          alt="img"
                        />
                      </div>
                      <h3>Speedating</h3>
                    </div>
                  </button>
                  <button className="seacrh_btns">
                    <div className="serachdrop d-flex align-items-center  gap-3">
                      <div className="searchicon">
                        <img
                          className="w-100 h-100"
                          src={require("../assets/images/serach6.png")}
                          alt="img"
                        />
                      </div>
                      <h3>Forum</h3>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div id="scroll_search" className="col-md-9">
              <div className="row gy-4">
                <div className="col-sm-6 col-xl-3">
                  <Link to="/" className="position-relative search_content">
                    <div className="d-block searchimg h-100">
                      <img
                        className="w-100 h-100 object-fit-cover"
                        src={require("../assets/images/image2.png")}
                        alt="img"
                      />
                    </div>
                    <div className="d-flex align-items-center gap-2 searchgender_main">
                      <div className="d-block searchwomen flex-shrink-0">
                        <img
                          className="w-100 h-100"
                          src={require("../assets/images/woman.png")}
                          alt="img"
                        />
                      </div>
                    </div>
                    <div className="d-flex align-items-center gap-3 justify-content-between px-3 searchusere">
                      <div className="d-flex flex-column gap-0">
                        <h4>Username</h4>
                        <div className="d-flex align-items-center gap-1">
                          <p>Age, </p>
                          <p>location</p>
                        </div>
                      </div>
                      <div className="d-block searchmessage flex-shrink-0">
                        <img
                          className="w-100 h-100"
                          src={require("../assets/images/message.png")}
                          alt="img"
                        />
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-sm-6 col-xl-3">
                  <Link className="position-relative search_content">
                    <div className="d-block searchimg h-100">
                      <img
                        className="w-100 h-100 object-fit-cover"
                        src={require("../assets/images/image4.png")}
                        alt="img"
                      />
                    </div>
                    <div className="d-flex align-items-center gap-2 searchgender_main">
                      <div className="d-block searchwomen flex-shrink-0">
                        <img
                          className="w-100 h-100"
                          src={require("../assets/images/male.png")}
                          alt="img"
                        />
                      </div>
                    </div>
                    <div className="d-flex align-items-center gap-3 justify-content-between px-3 searchusere">
                      <div className="d-flex flex-column gap-0">
                        <h4>Username</h4>
                        <div className="d-flex align-items-center gap-1">
                          <p>Age, </p>
                          <p>location</p>
                        </div>
                      </div>
                      <div className="d-block searchmessage flex-shrink-0">
                        <img
                          className="w-100 h-100"
                          src={require("../assets/images/message.png")}
                          alt="img"
                        />
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-sm-6 col-xl-3">
                  <Link to="/" className="position-relative search_content">
                    <div className="d-block searchimg h-100">
                      <img
                        className="w-100 h-100 object-fit-cover"
                        src={require("../assets/images/image1.png")}
                        alt="img"
                      />
                    </div>
                    <div className="d-flex align-items-center gap-2 searchgender_main">
                      <div className="d-block searchwomen flex-shrink-0">
                        <img
                          className="w-100 h-100"
                          src={require("../assets/images/woman.png")}
                          alt="img"
                        />
                      </div>
                    </div>
                    <div className="d-flex align-items-center gap-3 justify-content-between px-3 searchusere">
                      <div className="d-flex flex-column gap-0">
                        <h4>Username</h4>
                        <div className="d-flex align-items-center gap-1">
                          <p>Age, </p>
                          <p>location</p>
                        </div>
                      </div>
                      <div className="d-block searchmessage flex-shrink-0">
                        <img
                          className="w-100 h-100"
                          src={require("../assets/images/message.png")}
                          alt="img"
                        />
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-sm-6 col-xl-3">
                  <Link className="position-relative search_content">
                    <div className="d-block searchimg h-100">
                      <img
                        className="w-100 h-100 object-fit-cover"
                        src={require("../assets/images/image3.png")}
                        alt="img"
                      />
                    </div>
                    <div className="d-flex align-items-center gap-2 searchgender_main">
                      <div className="d-block searchwomen flex-shrink-0">
                        <img
                          className="w-100 h-100"
                          src={require("../assets/images/male.png")}
                          alt="img"
                        />
                      </div>
                      <div className="d-block searchwomen flex-shrink-0">
                        <img
                          className="w-100 h-100"
                          src={require("../assets/images/woman.png")}
                          alt="img"
                        />
                      </div>
                    </div>
                    <div className="d-flex align-items-center gap-3 justify-content-between px-3 searchusere">
                      <div className="d-flex flex-column gap-0">
                        <h4>Username</h4>
                        <div className="d-flex align-items-center gap-1">
                          <p>Age, </p>
                          <p>location</p>
                        </div>
                      </div>
                      <div className="d-block searchmessage flex-shrink-0">
                        <img
                          className="w-100 h-100"
                          src={require("../assets/images/message.png")}
                          alt="img"
                        />
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-sm-6 col-xl-3">
                  <Link to="/" className="position-relative search_content">
                    <div className="d-block searchimg h-100">
                      <img
                        className="w-100 h-100 object-fit-cover"
                        src={require("../assets/images/image2.png")}
                        alt="img"
                      />
                    </div>
                    <div className="d-flex align-items-center gap-2 searchgender_main">
                      <div className="d-block searchwomen flex-shrink-0">
                        <img
                          className="w-100 h-100"
                          src={require("../assets/images/woman.png")}
                          alt="img"
                        />
                      </div>
                    </div>
                    <div className="d-flex align-items-center gap-3 justify-content-between px-3 searchusere">
                      <div className="d-flex flex-column gap-0">
                        <h4>Username</h4>
                        <div className="d-flex align-items-center gap-1">
                          <p>Age, </p>
                          <p>location</p>
                        </div>
                      </div>
                      <div className="d-block searchmessage flex-shrink-0">
                        <img
                          className="w-100 h-100"
                          src={require("../assets/images/message.png")}
                          alt="img"
                        />
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-sm-6 col-xl-3">
                  <Link className="position-relative search_content">
                    <div className="d-block searchimg h-100">
                      <img
                        className="w-100 h-100 object-fit-cover"
                        src={require("../assets/images/image4.png")}
                        alt="img"
                      />
                    </div>
                    <div className="d-flex align-items-center gap-2 searchgender_main">
                      <div className="d-block searchwomen flex-shrink-0">
                        <img
                          className="w-100 h-100"
                          src={require("../assets/images/male.png")}
                          alt="img"
                        />
                      </div>
                    </div>
                    <div className="d-flex align-items-center gap-3 justify-content-between px-3 searchusere">
                      <div className="d-flex flex-column gap-0">
                        <h4>Username</h4>
                        <div className="d-flex align-items-center gap-1">
                          <p>Age, </p>
                          <p>location</p>
                        </div>
                      </div>
                      <div className="d-block searchmessage flex-shrink-0">
                        <img
                          className="w-100 h-100"
                          src={require("../assets/images/message.png")}
                          alt="img"
                        />
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-sm-6 col-xl-3">
                  <Link to="/" className="position-relative search_content">
                    <div className="d-block searchimg h-100">
                      <img
                        className="w-100 h-100 object-fit-cover"
                        src={require("../assets/images/image1.png")}
                        alt="img"
                      />
                    </div>
                    <div className="d-flex align-items-center gap-2 searchgender_main">
                      <div className="d-block searchwomen flex-shrink-0">
                        <img
                          className="w-100 h-100"
                          src={require("../assets/images/woman.png")}
                          alt="img"
                        />
                      </div>
                    </div>
                    <div className="d-flex align-items-center gap-3 justify-content-between px-3 searchusere">
                      <div className="d-flex flex-column gap-0">
                        <h4>Username</h4>
                        <div className="d-flex align-items-center gap-1">
                          <p>Age, </p>
                          <p>location</p>
                        </div>
                      </div>
                      <div className="d-block searchmessage flex-shrink-0">
                        <img
                          className="w-100 h-100"
                          src={require("../assets/images/message.png")}
                          alt="img"
                        />
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-sm-6 col-xl-3">
                  <Link className="position-relative search_content">
                    <div className="d-block searchimg h-100">
                      <img
                        className="w-100 h-100 object-fit-cover"
                        src={require("../assets/images/image3.png")}
                        alt="img"
                      />
                    </div>
                    <div className="d-flex align-items-center gap-2 searchgender_main">
                      <div className="d-block searchwomen flex-shrink-0">
                        <img
                          className="w-100 h-100"
                          src={require("../assets/images/male.png")}
                          alt="img"
                        />
                      </div>
                      <div className="d-block searchwomen flex-shrink-0">
                        <img
                          className="w-100 h-100"
                          src={require("../assets/images/woman.png")}
                          alt="img"
                        />
                      </div>
                    </div>
                    <div className="d-flex align-items-center gap-3 justify-content-between px-3 searchusere">
                      <div className="d-flex flex-column gap-0">
                        <h4>Username</h4>
                        <div className="d-flex align-items-center gap-1">
                          <p>Age, </p>
                          <p>location</p>
                        </div>
                      </div>
                      <div className="d-block searchmessage flex-shrink-0">
                        <img
                          className="w-100 h-100"
                          src={require("../assets/images/message.png")}
                          alt="img"
                        />
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-sm-6 col-xl-3">
                  <Link to="/" className="position-relative search_content">
                    <div className="d-block searchimg h-100">
                      <img
                        className="w-100 h-100 object-fit-cover"
                        src={require("../assets/images/image2.png")}
                        alt="img"
                      />
                    </div>
                    <div className="d-flex align-items-center gap-2 searchgender_main">
                      <div className="d-block searchwomen flex-shrink-0">
                        <img
                          className="w-100 h-100"
                          src={require("../assets/images/woman.png")}
                          alt="img"
                        />
                      </div>
                    </div>
                    <div className="d-flex align-items-center gap-3 justify-content-between px-3 searchusere">
                      <div className="d-flex flex-column gap-0">
                        <h4>Username</h4>
                        <div className="d-flex align-items-center gap-1">
                          <p>Age, </p>
                          <p>location</p>
                        </div>
                      </div>
                      <div className="d-block searchmessage flex-shrink-0">
                        <img
                          className="w-100 h-100"
                          src={require("../assets/images/message.png")}
                          alt="img"
                        />
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-sm-6 col-xl-3">
                  <Link className="position-relative search_content">
                    <div className="d-block searchimg h-100">
                      <img
                        className="w-100 h-100 object-fit-cover"
                        src={require("../assets/images/image4.png")}
                        alt="img"
                      />
                    </div>
                    <div className="d-flex align-items-center gap-2 searchgender_main">
                      <div className="d-block searchwomen flex-shrink-0">
                        <img
                          className="w-100 h-100"
                          src={require("../assets/images/male.png")}
                          alt="img"
                        />
                      </div>
                    </div>
                    <div className="d-flex align-items-center gap-3 justify-content-between px-3 searchusere">
                      <div className="d-flex flex-column gap-0">
                        <h4>Username</h4>
                        <div className="d-flex align-items-center gap-1">
                          <p>Age, </p>
                          <p>location</p>
                        </div>
                      </div>
                      <div className="d-block searchmessage flex-shrink-0">
                        <img
                          className="w-100 h-100"
                          src={require("../assets/images/message.png")}
                          alt="img"
                        />
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-sm-6 col-xl-3">
                  <Link to="/" className="position-relative search_content">
                    <div className="d-block searchimg h-100">
                      <img
                        className="w-100 h-100 object-fit-cover"
                        src={require("../assets/images/image1.png")}
                        alt="img"
                      />
                    </div>
                    <div className="d-flex align-items-center gap-2 searchgender_main">
                      <div className="d-block searchwomen flex-shrink-0">
                        <img
                          className="w-100 h-100"
                          src={require("../assets/images/woman.png")}
                          alt="img"
                        />
                      </div>
                    </div>
                    <div className="d-flex align-items-center gap-3 justify-content-between px-3 searchusere">
                      <div className="d-flex flex-column gap-0">
                        <h4>Username</h4>
                        <div className="d-flex align-items-center gap-1">
                          <p>Age, </p>
                          <p>location</p>
                        </div>
                      </div>
                      <div className="d-block searchmessage flex-shrink-0">
                        <img
                          className="w-100 h-100"
                          src={require("../assets/images/message.png")}
                          alt="img"
                        />
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-sm-6 col-xl-3">
                  <Link className="position-relative search_content">
                    <div className="d-block searchimg h-100">
                      <img
                        className="w-100 h-100 object-fit-cover"
                        src={require("../assets/images/image3.png")}
                        alt="img"
                      />
                    </div>
                    <div className="d-flex align-items-center gap-2 searchgender_main">
                      <div className="d-block searchwomen flex-shrink-0">
                        <img
                          className="w-100 h-100"
                          src={require("../assets/images/male.png")}
                          alt="img"
                        />
                      </div>
                      <div className="d-block searchwomen flex-shrink-0">
                        <img
                          className="w-100 h-100"
                          src={require("../assets/images/woman.png")}
                          alt="img"
                        />
                      </div>
                    </div>
                    <div className="d-flex align-items-center gap-3 justify-content-between px-3 searchusere">
                      <div className="d-flex flex-column gap-0">
                        <h4>Username</h4>
                        <div className="d-flex align-items-center gap-1">
                          <p>Age, </p>
                          <p>location</p>
                        </div>
                      </div>
                      <div className="d-block searchmessage flex-shrink-0">
                        <img
                          className="w-100 h-100"
                          src={require("../assets/images/message.png")}
                          alt="img"
                        />
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
