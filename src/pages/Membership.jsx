import React from "react";

import Headertwo from "../components/Headertwo";

import ms1 from "../assets/images/ms1.png";
import ms2 from "../assets/images/ms2.png";
import ms3 from "../assets/images/ms3.png";
import ms4 from "../assets/images/ms4.png";
import userpic from "../assets/images/pic.png";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

function Membership() {
  return (
    <>
      <Headertwo />
      <section className="d-block membershipbox gapy">
        <div className="container-lg">
          <div className="row">
            <div className="col-12">
              <Tabs className="member-tabs">
                <TabList>
                  <Tab>
                    {" "}
                    <div className="d-flex gap-3 align-items-center">
                      <div className="flex-shrink-0">
                        <div className="iconmenu fulw">
                          <img src={ms1} alt="userpic" />
                        </div>
                      </div>
                      <div className="flex-grow-1">
                        <h4>Membership and billing</h4>
                      </div>
                    </div>
                  </Tab>
                  <Tab>
                    {" "}
                    <div className="d-flex gap-3 align-items-center">
                      <div className="flex-shrink-0">
                        <div className="iconmenu fulw">
                          <img src={ms2} alt="userpic" />
                        </div>
                      </div>
                      <div className="flex-grow-1">
                        <h4>Preferences</h4>
                      </div>
                    </div>
                  </Tab>
                  <Tab>
                    {" "}
                    <div className="d-flex gap-3 align-items-center">
                      <div className="flex-shrink-0">
                        <div className="iconmenu fulw">
                          <img src={ms3} alt="userpic" />
                        </div>
                      </div>
                      <div className="flex-grow-1">
                        <h4>Security</h4>
                      </div>
                    </div>
                  </Tab>
                  <Tab>
                    {" "}
                    <div className="d-flex gap-3 align-items-center">
                      <div className="flex-shrink-0">
                        <div className="iconmenu fulw">
                          <img src={ms4} alt="userpic" />
                        </div>
                      </div>
                      <div className="flex-grow-1">
                        <h4>Help center</h4>
                      </div>
                    </div>
                  </Tab>
                </TabList>

                <TabPanel>
                  <div className="d-flex flex-column gap-4 mship">
                    <h1 className="shiptitle">Your membership</h1>
                    <div className="meuser w-100">
                        <div className="row flex-row-reverse g-4">
                            <div className="col-lg-4 col-xxl-3">
                                <div className="usermship ofit">
                                    <img src={userpic} alt="usrpic" />
                                </div>
                            </div>
                            <div className="col-lg-8 col-xxl-9">
                                <div className="d-flex flex-column gap-5 yourmship">
                                    <h5>Username</h5>
                                    <div className="d-flex flex-column gap-2">
                                        <h6>Membership type: <b>dummy</b>
                                        </h6>
                                        <h6>Member since:  <b>dummy</b></h6>
                                    </div>
                                    <div className="d-flex flex-column flex-md-row gap-3 shipbtns">
                                        <div>
                                            <button type="button" className="btn pribtn">Upgrade</button>
                                        </div>
                                        <div>
                                            <button type="button" className="btn celbtn">Cancel</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="d-flex flex-column gap-4 mship">
                    <h1 className="shiptitle">Preferences</h1>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="d-flex flex-column gap-4 mship">
                    <h1 className="shiptitle">Security</h1>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="d-flex flex-column gap-4 mship">
                    <h1 className="shiptitle">Help center</h1>
                  </div>
                </TabPanel>
              </Tabs>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Membership;
