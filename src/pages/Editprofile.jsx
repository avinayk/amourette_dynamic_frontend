import React from "react";
// import { Link } from "react-router-dom";
import Headertwo from "../components/Headertwo";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

// Demo styles, see 'Styles' section below for some notes on use.
import "react-accessible-accordion/dist/fancy-example.css";
import { FiPlus } from "react-icons/fi";
import { BsCloudUpload } from "react-icons/bs";

import de1 from "../assets/images/de1.png";
import de2 from "../assets/images/de2.png";
import de3 from "../assets/images/de3.png";
import de4 from "../assets/images/de4.png";
import de5 from "../assets/images/de5.png";
import de6 from "../assets/images/de6.png";
import de7 from "../assets/images/de7.png";
import de8 from "../assets/images/de8.png";
import de9 from "../assets/images/de9.png";
import de10 from "../assets/images/de10.png";
import de11 from "../assets/images/de11.png";
import de12 from "../assets/images/de12.png";

function Editprofile() {
  return (
    <>
      <Headertwo />
      <section className="d-block editblock gapy">
        <div className="container-lg">
          <div className="row">
            <div className="col-12">
              <form action="">
                <div className="row gy-4">
                  <div className="col-md-3">
                    <div className="row useruploadpic gy-4">
                      <div className="col-12">
                        <div className="uploadfile rel bgload mb-3">
                          <input
                            type="file"
                            name=""
                            id=""
                            className="fileload"
                          />
                          <div className="inload">
                            <div>
                              <BsCloudUpload />
                              <h3>Upload image</h3>
                            </div>
                          </div>
                        </div>
                        <div className="listbox d-flex justify-content-center">
                          <label className="cbox">
                            Make Image Private
                            <input type="checkbox" name="makeImagePrivate" />
                            <span className="checkmark"></span>
                          </label>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="uploadfile rel smallload">
                          <input
                            type="file"
                            name=""
                            id=""
                            className="fileload"
                          />
                          <div className="inload">
                            <FiPlus />
                          </div>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="uploadfile rel smallload">
                          <input
                            type="file"
                            name=""
                            id=""
                            className="fileload"
                          />
                          <div className="inload">
                            <FiPlus />
                          </div>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="uploadfile rel smallload">
                          <input
                            type="file"
                            name=""
                            id=""
                            className="fileload"
                          />
                          <div className="inload">
                            <FiPlus />
                          </div>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="uploadfile rel smallload">
                          <input
                            type="file"
                            name=""
                            id=""
                            className="fileload"
                          />
                          <div className="inload">
                            <FiPlus />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="d-flex flex-column gap-3 formlook">
                      <div className="d-flex flex-column flex-md-row gap-3 justify-content-md-between edittitle">
                        <h3>Edit your profile</h3>
                        <div>
                          <button type="button" className="savebtn">
                            Save Profile
                          </button>
                        </div>
                      </div>
                      <div className="d-flex flex-column gap-2">
                        <label htmlFor="">I'm looking for</label>
                        <textarea
                          name=""
                          id=""
                          rows="5"
                          placeholder="Write something..."
                        ></textarea>
                      </div>
                      <div className="d-flex flex-column gap-2">
                        <label htmlFor="">Username</label>
                        <input type="text" placeholder="Write something..." />
                      </div>
                      <div className="d-flex flex-column gap-2">
                        <label htmlFor="">Location</label>
                        <input type="text" placeholder="Write something..." />
                      </div>
                      <div className="d-flex flex-column gap-2">
                        <label htmlFor="">Preferences</label>
                        <select name="" id="">
                          <option value="">Preferences</option>
                          <option value="">Preferences</option>
                          <option value="">Preferences</option>
                        </select>
                      </div>
                      <Accordion>
                        <AccordionItem>
                          <AccordionItemHeading>
                            <AccordionItemButton>
                              <div className="d-flex gap-2 align-items-center">
                                <div className="flex-shrink-0">
                                  <div className="acciconimg fulw">
                                    <img src={de1} alt="accimg" />
                                  </div>
                                </div>
                                <div className="flex-grow-1">
                                  <h4>Nationality</h4>
                                </div>
                              </div>
                            </AccordionItemButton>
                          </AccordionItemHeading>
                          <AccordionItemPanel>
                            <div className="listbox d-flex flex-wrap gap-3">
                              <label class="cbox">
                                Indian
                                <input type="radio" name="nationality" />
                                <span class="checkmark"></span>
                              </label>

                              <label class="cbox">
                                Other
                                <input type="radio" name="nationality" />
                                <span class="checkmark"></span>
                              </label>
                            </div>
                          </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                          <AccordionItemHeading>
                            <AccordionItemButton>
                              <div className="d-flex gap-2 align-items-center">
                                <div className="flex-shrink-0">
                                  <div className="acciconimg fulw">
                                    <img src={de2} alt="accimg" />
                                  </div>
                                </div>
                                <div className="flex-grow-1">
                                  <h4>Bodytype</h4>
                                </div>
                              </div>
                            </AccordionItemButton>
                          </AccordionItemHeading>
                          <AccordionItemPanel>
                            <div className="listbox d-flex flex-wrap gap-3">
                              <label className="cbox">
                                Slim
                                <input
                                  type="radio"
                                  name="bodyType"
                                  value="slim"
                                />
                                <span className="checkmark"></span>
                              </label>

                              <label className="cbox">
                                Athletic
                                <input
                                  type="radio"
                                  name="bodyType"
                                  value="athletic"
                                />
                                <span className="checkmark"></span>
                              </label>

                              <label className="cbox">
                                Average
                                <input
                                  type="radio"
                                  name="bodyType"
                                  value="average"
                                />
                                <span className="checkmark"></span>
                              </label>

                              <label className="cbox">
                                Curvy
                                <input
                                  type="radio"
                                  name="bodyType"
                                  value="curvy"
                                />
                                <span className="checkmark"></span>
                              </label>

                              <label className="cbox">
                                Full-figured
                                <input
                                  type="radio"
                                  name="bodyType"
                                  value="full-figured"
                                />
                                <span className="checkmark"></span>
                              </label>

                              <label className="cbox">
                                Plus-size
                                <input
                                  type="radio"
                                  name="bodyType"
                                  value="plus-size"
                                />
                                <span className="checkmark"></span>
                              </label>

                              <label className="cbox">
                                Muscular
                                <input
                                  type="radio"
                                  name="bodyType"
                                  value="muscular"
                                />
                                <span className="checkmark"></span>
                              </label>

                              <label className="cbox">
                                Petite
                                <input
                                  type="radio"
                                  name="bodyType"
                                  value="petite"
                                />
                                <span className="checkmark"></span>
                              </label>

                              <label className="cbox">
                                Tall
                                <input
                                  type="radio"
                                  name="bodyType"
                                  value="tall"
                                />
                                <span className="checkmark"></span>
                              </label>

                              <label className="cbox">
                                Other
                                <input
                                  type="radio"
                                  name="bodyType"
                                  value="other"
                                />
                                <span className="checkmark"></span>
                              </label>
                            </div>
                          </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                          <AccordionItemHeading>
                            <AccordionItemButton>
                              <div className="d-flex gap-2 align-items-center">
                                <div className="flex-shrink-0">
                                  <div className="acciconimg fulw">
                                    <img src={de3} alt="accimg" />
                                  </div>
                                </div>
                                <div className="flex-grow-1">
                                  <h4>Height</h4>
                                </div>
                              </div>
                            </AccordionItemButton>
                          </AccordionItemHeading>
                          <AccordionItemPanel>
                            <div className="d-flex gap-2 heightsel">
                              <select id="height-feet" name="height-feet">
                                <option value="">Select Feet</option>
                                <option value="4">4 ft</option>
                                <option value="5">5 ft</option>
                                <option value="6">6 ft</option>
                                <option value="7">7 ft</option>
                              </select>
                              <select id="height-inches" name="height-inches">
                                <option value="">Select Inches</option>
                                <option value="0">0 in</option>
                                <option value="1">1 in</option>
                                <option value="2">2 in</option>
                                <option value="3">3 in</option>
                                <option value="4">4 in</option>
                                <option value="5">5 in</option>
                                <option value="6">6 in</option>
                                <option value="7">7 in</option>
                                <option value="8">8 in</option>
                                <option value="9">9 in</option>
                                <option value="10">10 in</option>
                                <option value="11">11 in</option>
                              </select>
                            </div>
                          </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                          <AccordionItemHeading>
                            <AccordionItemButton>
                              <div className="d-flex gap-2 align-items-center">
                                <div className="flex-shrink-0">
                                  <div className="acciconimg fulw">
                                    <img src={de4} alt="accimg" />
                                  </div>
                                </div>
                                <div className="flex-grow-1">
                                  <h4>Sexual orientation</h4>
                                </div>
                              </div>
                            </AccordionItemButton>
                          </AccordionItemHeading>
                          <AccordionItemPanel>
                            <div className="listbox d-flex flex-wrap gap-3">
                              <label className="cbox">
                                Heterosexual
                                <input
                                  type="radio"
                                  name="sexualOrientation"
                                  value="heterosexual"
                                  required
                                />
                                <span className="checkmark"></span>
                              </label>

                              <label className="cbox">
                                Homosexual
                                <input
                                  type="radio"
                                  name="sexualOrientation"
                                  value="homosexual"
                                />
                                <span className="checkmark"></span>
                              </label>

                              <label className="cbox">
                                Bisexual
                                <input
                                  type="radio"
                                  name="sexualOrientation"
                                  value="bisexual"
                                />
                                <span className="checkmark"></span>
                              </label>

                              <label className="cbox">
                                Pansexual
                                <input
                                  type="radio"
                                  name="sexualOrientation"
                                  value="pansexual"
                                />
                                <span className="checkmark"></span>
                              </label>

                              <label className="cbox">
                                Asexual
                                <input
                                  type="radio"
                                  name="sexualOrientation"
                                  value="asexual"
                                />
                                <span className="checkmark"></span>
                              </label>

                              <label className="cbox">
                                Other
                                <input
                                  type="radio"
                                  name="sexualOrientation"
                                  value="other"
                                />
                                <span className="checkmark"></span>
                              </label>
                            </div>
                          </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                          <AccordionItemHeading>
                            <AccordionItemButton>
                              <div className="d-flex gap-2 align-items-center">
                                <div className="flex-shrink-0">
                                  <div className="acciconimg fulw">
                                    <img src={de5} alt="accimg" />
                                  </div>
                                </div>
                                <div className="flex-grow-1">
                                  <h4>Relationship status</h4>
                                </div>
                              </div>
                            </AccordionItemButton>
                          </AccordionItemHeading>
                          <AccordionItemPanel>
                            <div className="listbox d-flex flex-wrap gap-3">
                              <label className="cbox">
                                Single
                                <input
                                  type="radio"
                                  name="relationshipStatus"
                                  value="single"
                                  required
                                />
                                <span className="checkmark"></span>
                              </label>

                              <label className="cbox">
                                In a Relationship
                                <input
                                  type="radio"
                                  name="relationshipStatus"
                                  value="inARelationship"
                                />
                                <span className="checkmark"></span>
                              </label>

                              <label className="cbox">
                                Engaged
                                <input
                                  type="radio"
                                  name="relationshipStatus"
                                  value="engaged"
                                />
                                <span className="checkmark"></span>
                              </label>

                              <label className="cbox">
                                Married
                                <input
                                  type="radio"
                                  name="relationshipStatus"
                                  value="married"
                                />
                                <span className="checkmark"></span>
                              </label>

                              <label className="cbox">
                                It's Complicated
                                <input
                                  type="radio"
                                  name="relationshipStatus"
                                  value="itsComplicated"
                                />
                                <span className="checkmark"></span>
                              </label>

                              <label className="cbox">
                                Separated
                                <input
                                  type="radio"
                                  name="relationshipStatus"
                                  value="separated"
                                />
                                <span className="checkmark"></span>
                              </label>

                              <label className="cbox">
                                Divorced
                                <input
                                  type="radio"
                                  name="relationshipStatus"
                                  value="divorced"
                                />
                                <span className="checkmark"></span>
                              </label>

                              <label className="cbox">
                                Widowed
                                <input
                                  type="radio"
                                  name="relationshipStatus"
                                  value="widowed"
                                />
                                <span className="checkmark"></span>
                              </label>

                              <label className="cbox">
                                Other
                                <input
                                  type="radio"
                                  name="relationshipStatus"
                                  value="other"
                                />
                                <span className="checkmark"></span>
                              </label>
                            </div>
                          </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                          <AccordionItemHeading>
                            <AccordionItemButton>
                              <div className="d-flex gap-2 align-items-center">
                                <div className="flex-shrink-0">
                                  <div className="acciconimg fulw">
                                    <img src={de6} alt="accimg" />
                                  </div>
                                </div>
                                <div className="flex-grow-1">
                                  <h4>Looking for</h4>
                                </div>
                              </div>
                            </AccordionItemButton>
                          </AccordionItemHeading>
                          <AccordionItemPanel>
                            <div className="listbox d-flex flex-wrap gap-3">
                              <label className="cbox">
                                Friendship
                                <input
                                  type="radio"
                                  name="lookingFor"
                                  value="friendship"
                                  required
                                />
                                <span className="checkmark"></span>
                              </label>

                              <label className="cbox">
                                Casual Dating
                                <input
                                  type="radio"
                                  name="lookingFor"
                                  value="casualDating"
                                />
                                <span className="checkmark"></span>
                              </label>

                              <label className="cbox">
                                Serious Relationship
                                <input
                                  type="radio"
                                  name="lookingFor"
                                  value="seriousRelationship"
                                />
                                <span className="checkmark"></span>
                              </label>

                              <label className="cbox">
                                Marriage
                                <input
                                  type="radio"
                                  name="lookingFor"
                                  value="marriage"
                                />
                                <span className="checkmark"></span>
                              </label>

                              <label className="cbox">
                                Long-term Relationship
                                <input
                                  type="radio"
                                  name="lookingFor"
                                  value="longTerm"
                                />
                                <span className="checkmark"></span>
                              </label>

                              <label className="cbox">
                                Open Relationship
                                <input
                                  type="radio"
                                  name="lookingFor"
                                  value="openRelationship"
                                />
                                <span className="checkmark"></span>
                              </label>

                              <label className="cbox">
                                Something Else
                                <input
                                  type="radio"
                                  name="lookingFor"
                                  value="somethingElse"
                                />
                                <span className="checkmark"></span>
                              </label>
                            </div>
                          </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                          <AccordionItemHeading>
                            <AccordionItemButton>
                              <div className="d-flex gap-2 align-items-center">
                                <div className="flex-shrink-0">
                                  <div className="acciconimg fulw">
                                    <img src={de7} alt="accimg" />
                                  </div>
                                </div>
                                <div className="flex-grow-1">
                                  <h4>Degree</h4>
                                </div>
                              </div>
                            </AccordionItemButton>
                          </AccordionItemHeading>
                          <AccordionItemPanel>
                            <select id="degree" name="degree">
                              <option value="">Select your degree</option>
                              <option value="highSchool">High School</option>
                              <option value="associateDegree">
                                Associate Degree
                              </option>
                              <option value="bachelorDegree">
                                Bachelor's Degree
                              </option>
                              <option value="masterDegree">
                                Master's Degree
                              </option>
                              <option value="doctorate">Doctorate (PhD)</option>
                              <option value="other">Other</option>
                            </select>
                          </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                          <AccordionItemHeading>
                            <AccordionItemButton>
                              <div className="d-flex gap-2 align-items-center">
                                <div className="flex-shrink-0">
                                  <div className="acciconimg fulw">
                                    <img src={de8} alt="accimg" />
                                  </div>
                                </div>
                                <div className="flex-grow-1">
                                  <h4>Drinker</h4>
                                </div>
                              </div>
                            </AccordionItemButton>
                          </AccordionItemHeading>
                          <AccordionItemPanel>
                            <div className="listbox d-flex flex-wrap gap-3">
                              <label className="cbox">
                                Yes
                                <input
                                  type="radio"
                                  name="drinker"
                                  value="yes"
                                  required
                                />
                                <span className="checkmark"></span>
                              </label>

                              <label className="cbox">
                                No
                                <input type="radio" name="drinker" value="no" />
                                <span className="checkmark"></span>
                              </label>
                            </div>
                          </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                          <AccordionItemHeading>
                            <AccordionItemButton>
                              <div className="d-flex gap-2 align-items-center">
                                <div className="flex-shrink-0">
                                  <div className="acciconimg fulw">
                                    <img src={de9} alt="accimg" />
                                  </div>
                                </div>
                                <div className="flex-grow-1">
                                  <h4>Smoker</h4>
                                </div>
                              </div>
                            </AccordionItemButton>
                          </AccordionItemHeading>
                          <AccordionItemPanel>
                            <div className="listbox d-flex flex-wrap gap-3">
                              <label className="cbox">
                                Yes
                                <input
                                  type="radio"
                                  name="smoker"
                                  value="yes"
                                  required
                                />
                                <span className="checkmark"></span>
                              </label>

                              <label className="cbox">
                                No
                                <input type="radio" name="smoker" value="no" />
                                <span className="checkmark"></span>
                              </label>
                            </div>
                          </AccordionItemPanel>
                        </AccordionItem>

                        <AccordionItem>
                          <AccordionItemHeading>
                            <AccordionItemButton>
                              <div className="d-flex gap-2 align-items-center">
                                <div className="flex-shrink-0">
                                  <div className="acciconimg fulw">
                                    <img src={de10} alt="accimg" />
                                  </div>
                                </div>
                                <div className="flex-grow-1">
                                  <h4>Tattoos</h4>
                                </div>
                              </div>
                            </AccordionItemButton>
                          </AccordionItemHeading>
                          <AccordionItemPanel>
                            <div className="listbox d-flex flex-wrap gap-3">
                              <label className="cbox">
                                Yes
                                <input
                                  type="radio"
                                  name="tattoos"
                                  value="yes"
                                  required
                                />
                                <span className="checkmark"></span>
                              </label>

                              <label className="cbox">
                                No
                                <input type="radio" name="tattoos" value="no" />
                                <span className="checkmark"></span>
                              </label>
                            </div>
                          </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                          <AccordionItemHeading>
                            <AccordionItemButton>
                              <div className="d-flex gap-2 align-items-center">
                                <div className="flex-shrink-0">
                                  <div className="acciconimg fulw">
                                    <img src={de11} alt="accimg" />
                                  </div>
                                </div>
                                <div className="flex-grow-1">
                                  <h4>Body piercings</h4>
                                </div>
                              </div>
                            </AccordionItemButton>
                          </AccordionItemHeading>
                          <AccordionItemPanel>
                            <div className="listbox d-flex flex-wrap gap-3">
                              <label className="cbox">
                                Yes
                                <input
                                  type="radio"
                                  name="body_piercings"
                                  value="yes"
                                  required
                                />
                                <span className="checkmark"></span>
                              </label>

                              <label className="cbox">
                                No
                                <input
                                  type="radio"
                                  name="body_piercings"
                                  value="no"
                                />
                                <span className="checkmark"></span>
                              </label>
                            </div>
                          </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                          <AccordionItemHeading>
                            <AccordionItemButton>
                              <div className="d-flex gap-2 align-items-center">
                                <div className="flex-shrink-0">
                                  <div className="acciconimg fulw">
                                    <img src={de12} alt="accimg" />
                                  </div>
                                </div>
                                <div className="flex-grow-1">
                                  <h4>Fetish</h4>
                                </div>
                              </div>
                            </AccordionItemButton>
                          </AccordionItemHeading>
                          <AccordionItemPanel>
                            <div className="listbox d-flex flex-wrap gap-3">
                              <label className="cbox">
                                BDSM
                                <input
                                  type="checkbox"
                                  name="fetishes"
                                  value="BDSM"
                                />
                                <span className="checkmark"></span>
                              </label>

                              <label className="cbox">
                                Role Play
                                <input
                                  type="checkbox"
                                  name="fetishes"
                                  value="Role Play"
                                />
                                <span className="checkmark"></span>
                              </label>

                              <label className="cbox">
                                Feet
                                <input
                                  type="checkbox"
                                  name="fetishes"
                                  value="Feet"
                                />
                                <span className="checkmark"></span>
                              </label>

                              <label className="cbox">
                                Latex
                                <input
                                  type="checkbox"
                                  name="fetishes"
                                  value="Latex"
                                />
                                <span className="checkmark"></span>
                              </label>

                              <label className="cbox">
                                Voyeurism
                                <input
                                  type="checkbox"
                                  name="fetishes"
                                  value="Voyeurism"
                                />
                                <span className="checkmark"></span>
                              </label>

                              <label className="cbox">
                                Other
                                <input
                                  type="checkbox"
                                  name="fetishes"
                                  value="Other"
                                />
                                <span className="checkmark"></span>
                              </label>
                            </div>
                          </AccordionItemPanel>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Editprofile;
