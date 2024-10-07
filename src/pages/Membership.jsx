import React from "react";
import { Link } from "react-router-dom";
import Headertwo from "../components/Headertwo";
import {Footer} from "../components/Footer";

import ms1 from "../assets/images/ms1.png";
import ms2 from "../assets/images/ms2.png";
import ms3 from "../assets/images/ms3.png";
import ms4 from "../assets/images/ms4.png";
import userpic from "../assets/images/pic.png";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

// Demo styles, see 'Styles' section below for some notes on use.
import "react-accessible-accordion/dist/fancy-example.css";

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
                              <h6>
                                Membership type: <b>dummy</b>
                              </h6>
                              <h6>
                                Member since: <b>dummy</b>
                              </h6>
                            </div>
                            <div className="d-flex flex-column flex-md-row gap-3 shipbtns">
                              <div>
                                <button type="button" className="btn pribtn">
                                  Upgrade
                                </button>
                              </div>
                              <div>
                                <button type="button" className="btn celbtn">
                                  Cancel
                                </button>
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
                    <div className="d-flex flex-column gap-3">
                      <div className="blockv d-flex flex-column gap-4">
                        <h3>E-mail notifications</h3>
                        <div className="d-flex flex-column gap-3">
                          <h4>Profile activity</h4>
                          <div className="listbox d-flex flex-column gap-2">
                            <label class="cbox">
                              When receiving a friend request.
                              <input type="radio" name="profile" />
                              <span class="checkmark"></span>
                            </label>
                            <label class="cbox">
                              When receiving a new message.
                              <input type="radio" name="profile" />
                              <span class="checkmark"></span>
                            </label>
                          </div>
                        </div>
                        <div className="d-flex flex-column gap-3">
                          <h4>Groups and events</h4>
                          <div className="listbox d-flex flex-column gap-2">
                            <label class="cbox">
                              When receiving an invitation to join a group or
                              event.
                              <input type="radio" name="events" />
                              <span class="checkmark"></span>
                            </label>
                            <label class="cbox">
                              When a new group or event is created.
                              <input type="radio" name="events" />
                              <span class="checkmark"></span>
                            </label>
                          </div>
                        </div>
                        <div className="d-flex flex-column gap-3">
                          <h4>Other</h4>
                          <div className="listbox d-flex flex-column gap-2">
                            <label class="cbox">
                              When a new verification is added to your profile.
                              <input type="radio" name="other" />
                              <span class="checkmark"></span>
                            </label>
                            <label class="cbox">
                              News and updates
                              <input type="radio" name="other" />
                              <span class="checkmark"></span>
                            </label>
                            <label class="cbox">
                              Promotions or special offers
                              <input type="radio" name="other" />
                              <span class="checkmark"></span>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="blockv d-flex flex-column gap-4">
                        <h3>Privacy</h3>
                        <div className="d-flex flex-column gap-3">
                          <h4>Show activity status</h4>
                          <div className="listbox d-flex flex-column gap-2">
                            <label class="cbox">
                              Yes
                              <input type="radio" name="activity" />
                              <span class="checkmark"></span>
                            </label>
                            <label class="cbox">
                              No
                              <input type="radio" name="activity" />
                              <span class="checkmark"></span>
                            </label>
                          </div>
                        </div>
                        <div className="d-flex flex-column gap-3">
                          <h4>Show my friends to other users</h4>
                          <div className="listbox d-flex flex-column gap-2">
                            <label class="cbox">
                              Yes
                              <input type="radio" name="events" />
                              <span class="checkmark"></span>
                            </label>
                            <label class="cbox">
                              No
                              <input type="radio" name="events" />
                              <span class="checkmark"></span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="d-flex flex-column gap-4 mship">
                    <h1 className="shiptitle">Security</h1>
                    <div className="d-flex flex-column gap-3">
                      <div className="blockv d-flex flex-column gap-4">
                        <h3>
                          We Offer a level Of additional security to your
                          accounts.
                        </h3>
                        <div className="d-flex flex-column gap-3">
                          <h4>Security question</h4>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Curabitur eget condirnentum dolor. Proin
                            consequati justo eget commodo ullamcorper, dui velit
                            effcitur justo, nec hendrerit sem est at quam.
                            Maecenas justo sem, dapibus vitae leo sit amet,
                            tempus euismod velit.
                          </p>
                          <div className="listbox d-flex flex-column gap-2">
                            <label class="cbox">
                              Yes
                              <input type="radio" name="Security" />
                              <span class="checkmark"></span>
                            </label>
                            <label class="cbox">
                              No
                              <input type="radio" name="Security" />
                              <span class="checkmark"></span>
                            </label>
                          </div>
                        </div>
                        <div className="d-flex flex-column gap-3">
                          <h4>Two-factor authentication</h4>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Curabitur eget condirnentum dolor. Proin
                            consequati justo eget commodo ullamcorper, dui velit
                            effcitur justo, nec hendrerit sem est at quam.
                            Maecenas justo sem, dapibus vitae leo sit amet,
                            tempus euismod velit.
                          </p>
                          <div className="listbox d-flex flex-column gap-2">
                            <label class="cbox">
                              Yes
                              <input type="radio" name="factor" />
                              <span class="checkmark"></span>
                            </label>
                            <label class="cbox">
                              No
                              <input type="radio" name="factor" />
                              <span class="checkmark"></span>
                            </label>
                          </div>
                        </div>
                        <div className="d-flex flex-column gap-3">
                          <h4>Personal data</h4>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Curabitur eget condirnentum dolor. Proin
                            consequati justo eget commodo ullamcorper, dui velit
                            effcitur justo, nec hendrerit sem est at quam.
                            Maecenas justo sem, dapibus vitae leo sit amet,
                            tempus euismod velit.
                          </p>
                          <div className="d-block shipbtns">
                            <div className="col-md-4">
                              <button type="button" className="btn celbtn">
                                REQUEST AN EXPORT
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="d-flex flex-column gap-4 mship">
                    <h1 className="shiptitle">Help center</h1>
                    <div className="d-flex flex-column gap-3">
                      <div className="blockv d-flex flex-column gap-4">
                        <div className="d-flex flex-column gap-2">
                          <h3>Privacy policy</h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Curabitur eget condirnentum dolor. Proin
                            consequati justo eget commodo ullamcorper, dui velit
                            effcitur justo, nec hendrerit sem est at quam.
                            Maecenas justo sem, dapibus vitae leo sit amet,
                            tempus euismod velit.
                          </p>
                          <Link to="/" className="clicklink">
                            Click to view
                          </Link>
                        </div>
                        <div className="d-flex flex-column gap-2">
                          <h3>Terms of use</h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Curabitur eget condirnentum dolor. Proin
                            consequati justo eget commodo ullamcorper, dui velit
                            effcitur justo, nec hendrerit sem est at quam.
                            Maecenas justo sem, dapibus vitae leo sit amet,
                            tempus euismod velit.
                          </p>
                          <Link to="/" className="clicklink">
                            Click to view
                          </Link>
                        </div>
                      </div>
                      <div className="blockv d-flex flex-column gap-4">
                        <div className="d-flex flex-column gap-3">
                          <h3>About</h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Curabitur eget condirnentum dolor. Proin
                            consequati justo eget commodo ullamcorper, dui velit
                            effcitur justo, nec hendrerit sem est at quam.
                            Maecenas justo sem, dapibus vitae leo sit amet,
                            tempus euismod velit.
                          </p>
                          <h4>Version</h4>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Curabitur eget condirnentum dolor. Proin
                            consequati justo eget commodo ullamcorper, dui velit
                            effcitur justo, nec hendrerit sem est at quam.
                            Maecenas justo sem, dapibus vitae leo sit amet,
                            tempus euismod velit.
                          </p>
                          <h4>Support</h4>
                          <p>support@amourette.no</p>
                        </div>
                      </div>

                      <div className="d-block faqblock">
                        <Accordion>
                          <AccordionItem>
                            <AccordionItemHeading>
                              <AccordionItemButton>
                                <h4>Heading</h4>
                              </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                              <p>
                                Magna sint ut nostrud dolore adipisicing ad
                                Lorem deserunt pariatur minim. Tempor est mollit
                                adipisicing officia id. Anim velit ea laborum
                                ullamco ad aute labore nulla eiusmod laborum
                                proident. Ut ut amet irure labore id velit
                                consequat ipsum Lorem. Sunt ex consequat
                                excepteur quis consequat culpa in tempor amet
                                irure consectetur eiusmod excepteur.
                              </p>
                            </AccordionItemPanel>
                          </AccordionItem>
                          <AccordionItem>
                            <AccordionItemHeading>
                              <AccordionItemButton>
                                <h4>Heading</h4>
                              </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                              <p>
                                Magna sint ut nostrud dolore adipisicing ad
                                Lorem deserunt pariatur minim. Tempor est mollit
                                adipisicing officia id. Anim velit ea laborum
                                ullamco ad aute labore nulla eiusmod laborum
                                proident. Ut ut amet irure labore id velit
                                consequat ipsum Lorem. Sunt ex consequat
                                excepteur quis consequat culpa in tempor amet
                                irure consectetur eiusmod excepteur.
                              </p>
                            </AccordionItemPanel>
                          </AccordionItem>
                          <AccordionItem>
                            <AccordionItemHeading>
                              <AccordionItemButton>
                                <h4>Heading</h4>
                              </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                              <p>
                                Magna sint ut nostrud dolore adipisicing ad
                                Lorem deserunt pariatur minim. Tempor est mollit
                                adipisicing officia id. Anim velit ea laborum
                                ullamco ad aute labore nulla eiusmod laborum
                                proident. Ut ut amet irure labore id velit
                                consequat ipsum Lorem. Sunt ex consequat
                                excepteur quis consequat culpa in tempor amet
                                irure consectetur eiusmod excepteur.
                              </p>
                            </AccordionItemPanel>
                          </AccordionItem>
                          <AccordionItem>
                            <AccordionItemHeading>
                              <AccordionItemButton>
                                <h4>Heading</h4>
                              </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                              <p>
                                Magna sint ut nostrud dolore adipisicing ad
                                Lorem deserunt pariatur minim. Tempor est mollit
                                adipisicing officia id. Anim velit ea laborum
                                ullamco ad aute labore nulla eiusmod laborum
                                proident. Ut ut amet irure labore id velit
                                consequat ipsum Lorem. Sunt ex consequat
                                excepteur quis consequat culpa in tempor amet
                                irure consectetur eiusmod excepteur.
                              </p>
                            </AccordionItemPanel>
                          </AccordionItem>
                        </Accordion>
                      </div>
                    </div>
                  </div>
                </TabPanel>
              </Tabs>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}

export default Membership;
