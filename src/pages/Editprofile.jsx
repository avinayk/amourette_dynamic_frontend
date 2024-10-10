import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";
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

import SuccessPop from "../components/SuccessPop";
import ErrorPop from "../components/ErrorPop";

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
  const navigate = useNavigate();
  const [showPopSuccess, setShowPopSuccess] = useState(false);
  const [showPopError, setShowPopError] = useState(false);
  const [successPopMessage, setPopsuccessMessage] = useState("");
  const [errorPopMessage, setPoperrorMessage] = useState("");
  const [LoginData, setLoginData] = useState(null);
  const [profilevalue, setprofilevalue] = useState("");

  const [nationality, setNationality] = useState("");
  const [bodyType, setBodyType] = useState("");

  const [sexual_orientation, setsexual_orientation] = useState("");
  const [relationship_status, setrelationship_status] = useState("");

  const [smokerValue, setsmokerValue] = useState("");
  const [tattosValue, settattosValue] = useState("");

  const [fetishValue, setfetishValue] = useState("");
  const [search_looking_for, setsearch_looking_for] = useState("");
  const [drinkerValue, setdrinkerValue] = useState("");
  const [body_piercingsValue, setbody_piercingsValue] = useState("");
  const [degree, setDegree] = useState("");
  const [heightFeet, setHeightFeet] = useState(profilevalue.height_feet || "");
  const [heightInches, setHeightInches] = useState(
    profilevalue.height_inches || ""
  );
  var apiURL = "http://localhost:3000/api/";
  useEffect(() => {
    // Check if the username key exists in session storage
    const storedUsername = sessionStorage.getItem("userLogin");
    const userLogin = JSON.parse(storedUsername);
    if (userLogin == null) {
      navigate("/login");
    } else {
      setLoginData(userLogin);
      // Call getProfile only if userLogin is available
      getprofile(userLogin.email);
    }
  }, []);

  const handleFeetChange = (event) => {
    setHeightFeet(event.target.value);
  };
  const handlefetishChange = (event) => {
    setfetishValue(event.target.value);
  };
  const handlebody_piercingsChange = (event) => {
    setbody_piercingsValue(event.target.value);
  };
  const handledrinkerChange = (event) => {
    setdrinkerValue(event.target.value);
  };
  const handletattosChange = (event) => {
    settattosValue(event.target.value);
  };
  const handlesmokerChange = (event) => {
    setsmokerValue(event.target.value);
  };
  const handleDegreeChange = (event) => {
    setDegree(event.target.value);
  };

  const handleInchesChange = (event) => {
    setHeightInches(event.target.value);
  };

  const handleNationalityChange = (event) => {
    setNationality(event.target.value); // Update state with the selected value
  };
  const handleBodyTypeChange = (event) => {
    setBodyType(event.target.value); // Update state with the selected value
  };

  const handleRelationStatusChange = (event) => {
    setrelationship_status(event.target.value); // Update state with the selected value
  };

  const handleSearchLookingforChange = (event) => {
    setsearch_looking_for(event.target.value); // Update state with the selected value
  };

  const handleSexualOrientationChange = (event) => {
    setsexual_orientation(event.target.value); // Update state with the selected value
  };
  const getprofile = async (email) => {
    let formData = {
      email: email,
    };
    try {
      const res = await axios.post(apiURL + "getProfile", formData, {
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
        },
      });
      setprofilevalue(res.data);
      setNationality(res.data.nationality);
      setBodyType(res.data.bodytype);
      setDegree(res.data.degree);
      setdrinkerValue(res.data.drinker);
      setfetishValue(res.data.fetish);
      setbody_piercingsValue(res.data.body_piercings);
      settattosValue(res.data.tattos);
      setsmokerValue(res.data.smoker);
      setsearch_looking_for(res.data.search_looking_for);
      setrelationship_status(res.data.relationship_status);
      setHeightFeet(res.data.height_feet);
      setHeightInches(res.data.height_inches);
      setsexual_orientation(res.data.sexual_orientation);
      console.log(res.data);
    } catch (err) {}
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    var vl = event.target;
    console.log(vl.looking_for.value);

    const formData = new FormData();

    formData.append(
      "looking_for",
      vl.looking_for.value !== "" ? vl.looking_for.value : ""
    );

    // Append 'username' with a check
    formData.append(
      "username",
      vl.username.value !== "" ? vl.username.value : ""
    );

    // Append other fields with checks
    formData.append(
      "location",
      vl.location.value !== "" ? vl.location.value : ""
    );
    formData.append(
      "preferences",
      vl.preferences.value !== "" ? vl.preferences.value : ""
    );
    formData.append(
      "nationality",
      vl.nationality.value !== "" ? vl.nationality.value : ""
    );
    formData.append(
      "bodytype",
      vl.bodytype.value !== "" ? vl.bodytype.value : ""
    );
    formData.append("height_feet", heightFeet !== "" ? heightFeet : "");
    formData.append("height_inches", heightInches !== "" ? heightInches : "");
    formData.append(
      "sexual_orientation",
      sexual_orientation !== "" ? sexual_orientation : ""
    );
    formData.append(
      "relationship_status",
      relationship_status !== "" ? relationship_status : ""
    );
    formData.append(
      "search_looking_for",
      search_looking_for !== "" ? search_looking_for : ""
    );
    formData.append("degree", degree !== "" ? degree : "");
    formData.append("drinker", drinkerValue !== "" ? drinkerValue : "");
    formData.append("smoker", smokerValue !== "" ? smokerValue : "");
    formData.append("tattos", tattosValue !== "" ? tattosValue : "");
    formData.append(
      "body_piercings",
      body_piercingsValue !== "" ? body_piercingsValue : ""
    );
    formData.append("fetish", fetishValue !== "" ? fetishValue : "");
    formData.append("token", LoginData.token);
    formData.append("email", LoginData.email);

    //formData.append("multi_image", vl.multi_image);

    try {
      const res = await axios.post(apiURL + "updateProfile", formData, {
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(res.data);
      setShowPopSuccess(true);
      setPopsuccessMessage(res.data.message);
      setTimeout(() => {
        setShowPopError(false);
        setShowPopSuccess(false);
        //navigate("/login");
      }, 3500);
      // Handle success (e.g., redirect or show a success message)
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        setShowPopSuccess(false);
        setShowPopError(true);
        setPoperrorMessage(err.response.data.message); // Store the error message in state
      } else {
        setShowPopSuccess(false);
        setShowPopError(true);
        setPoperrorMessage("An unknown error occurred.");
      }
      setTimeout(() => {
        setShowPopError(false);
        setShowPopSuccess(false);
      }, 3500);
    }
  };
  return (
    <>
      <Headertwo />
      {showPopSuccess && <SuccessPop message={successPopMessage} />}
      {showPopError && <ErrorPop message={errorPopMessage} />}
      <section className="d-block editblock gapy">
        <div className="container-lg">
          <div className="row">
            <div className="col-12">
              <form
                onSubmit={handleSubmit}
                action="javascript:void(0)"
                method="post"
              >
                <div className="row gy-4">
                  <div className="col-md-3">
                    <div className="row useruploadpic gy-4">
                      <div className="col-12">
                        <div className="uploadfile rel bgload mb-3">
                          <input
                            type="file"
                            name="profile_image"
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
                          <button type="submit" className="savebtn">
                            Save Profile
                          </button>
                        </div>
                      </div>
                      <div className="d-flex flex-column gap-2">
                        <label htmlFor="">I'm looking for</label>
                        <textarea
                          name="looking_for"
                          id=""
                          rows="5"
                          defaultValue={profilevalue.looking_for}
                          placeholder="Write something..."
                        ></textarea>
                      </div>
                      <div className="d-flex flex-column gap-2">
                        <label htmlFor="">Username</label>
                        <input
                          type="text"
                          defaultValue={profilevalue.username}
                          placeholder="Write something..."
                          name="username"
                        />
                      </div>
                      <div className="d-flex flex-column gap-2">
                        <label htmlFor="">Location</label>
                        <input
                          type="text"
                          defaultValue={profilevalue.location}
                          placeholder="Write something..."
                          name="location"
                        />
                      </div>
                      <div className="d-flex flex-column gap-2">
                        <label htmlFor="">Preferences</label>
                        <select
                          name="preferences"
                          id=""
                          value={profilevalue.preferences}
                        >
                          <option value="">Preferences</option>
                          <option value="Preferences">Preferences</option>
                          <option value="Preferences">Preferences</option>
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
                                <input
                                  type="radio"
                                  name="nationality"
                                  value="Indian"
                                  checked={nationality === "Indian"} // Check if this option is selected
                                  onChange={handleNationalityChange}
                                />
                                <span class="checkmark"></span>
                              </label>

                              <label class="cbox">
                                Other
                                <input
                                  type="radio"
                                  name="nationality"
                                  value="Other"
                                  checked={nationality === "Other"} // Check if this option is selected
                                  onChange={handleNationalityChange}
                                />
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
                                  name="bodytype"
                                  value="slim"
                                  checked={bodyType === "slim"} // Check if this option is selected
                                  onChange={handleBodyTypeChange} // Update state on change
                                />
                                <span className="checkmark"></span>
                              </label>

                              <label className="cbox">
                                Athletic
                                <input
                                  type="radio"
                                  name="bodytype"
                                  value="athletic"
                                  checked={bodyType === "athletic"} // Check if this option is selected
                                  onChange={handleBodyTypeChange} // Update state on change
                                />
                                <span className="checkmark"></span>
                              </label>

                              <label className="cbox">
                                Average
                                <input
                                  type="radio"
                                  name="bodytype"
                                  value="average"
                                  checked={bodyType === "average"} // Check if this option is selected
                                  onChange={handleBodyTypeChange} // Update state on change
                                />
                                <span className="checkmark"></span>
                              </label>

                              <label className="cbox">
                                Curvy
                                <input
                                  type="radio"
                                  name="bodytype"
                                  value="curvy"
                                  checked={bodyType === "curvy"} // Check if this option is selected
                                  onChange={handleBodyTypeChange} // Update state on change
                                />
                                <span className="checkmark"></span>
                              </label>

                              <label className="cbox">
                                Full-figured
                                <input
                                  type="radio"
                                  name="bodytype"
                                  value="full-figured"
                                  checked={bodyType === "full-figured"} // Check if this option is selected
                                  onChange={handleBodyTypeChange} // Update state on change
                                />
                                <span className="checkmark"></span>
                              </label>

                              <label className="cbox">
                                Plus-size
                                <input
                                  type="radio"
                                  name="bodytype"
                                  value="plus-size"
                                  checked={bodyType === "plus-size"} // Check if this option is selected
                                  onChange={handleBodyTypeChange} // Update state on change
                                />
                                <span className="checkmark"></span>
                              </label>

                              <label className="cbox">
                                Muscular
                                <input
                                  type="radio"
                                  name="bodytype"
                                  value="muscular"
                                  checked={bodyType === "muscular"} // Check if this option is selected
                                  onChange={handleBodyTypeChange} // Update state on change
                                />
                                <span className="checkmark"></span>
                              </label>

                              <label className="cbox">
                                Petite
                                <input
                                  type="radio"
                                  name="bodytype"
                                  value="petite"
                                  checked={bodyType === "petite"} // Check if this option is selected
                                  onChange={handleBodyTypeChange} // Update state on change
                                />
                                <span className="checkmark"></span>
                              </label>

                              <label className="cbox">
                                Tall
                                <input
                                  type="radio"
                                  name="bodytype"
                                  value="tall"
                                  checked={bodyType === "tall"} // Check if this option is selected
                                  onChange={handleBodyTypeChange} // Update state on change
                                />
                                <span className="checkmark"></span>
                              </label>

                              <label className="cbox">
                                Other
                                <input
                                  type="radio"
                                  name="bodytype"
                                  value="other"
                                  checked={bodyType === "other"} // Check if this option is selected
                                  onChange={handleBodyTypeChange} // Update state on change
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
                              <select
                                id="height-feet"
                                onChange={handleFeetChange}
                                value={heightFeet}
                                name="height_feet"
                              >
                                <option value="">Select Feet</option>
                                <option value="4">4 ft</option>
                                <option value="5">5 ft</option>
                                <option value="6">6 ft</option>
                                <option value="7">7 ft</option>
                              </select>
                              <select
                                id="height-inches"
                                onChange={handleInchesChange}
                                value={heightInches}
                                name="height_inches"
                              >
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
                                  name="sexual_orientation"
                                  value="Heterosexual"
                                  checked={
                                    sexual_orientation === "Heterosexual"
                                  }
                                  onChange={handleSexualOrientationChange}
                                />
                                <span className="checkmark"></span>
                              </label>

                              <label className="cbox">
                                Homosexual
                                <input
                                  type="radio"
                                  name="sexual_orientation"
                                  value="Homosexual"
                                  checked={sexual_orientation === "Homosexual"}
                                  onChange={handleSexualOrientationChange}
                                />
                                <span className="checkmark"></span>
                              </label>

                              <label className="cbox">
                                Bisexual
                                <input
                                  type="radio"
                                  name="sexual_orientation"
                                  value="Bisexual"
                                  checked={sexual_orientation === "Bisexual"}
                                  onChange={handleSexualOrientationChange}
                                />
                                <span className="checkmark"></span>
                              </label>

                              <label className="cbox">
                                Pansexual
                                <input
                                  type="radio"
                                  name="sexual_orientation"
                                  value="Pansexual"
                                  checked={sexual_orientation === "Pansexual"}
                                  onChange={handleSexualOrientationChange}
                                />
                                <span className="checkmark"></span>
                              </label>

                              <label className="cbox">
                                Asexual
                                <input
                                  type="radio"
                                  name="sexual_orientation"
                                  value="Asexual"
                                  checked={sexual_orientation === "Asexual"}
                                  onChange={handleSexualOrientationChange}
                                />
                                <span className="checkmark"></span>
                              </label>

                              <label className="cbox">
                                Other
                                <input
                                  type="radio"
                                  name="sexual_orientation"
                                  value="Other"
                                  checked={sexual_orientation === "Other"}
                                  onChange={handleSexualOrientationChange}
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
                                  name="relationship_status"
                                  value="Single"
                                  checked={relationship_status === "Single"}
                                  onChange={handleRelationStatusChange}
                                />
                                <span className="checkmark"></span>
                              </label>

                              <label className="cbox">
                                In a Relationship
                                <input
                                  type="radio"
                                  checked={
                                    relationship_status === "InaRelationship"
                                  }
                                  onChange={handleRelationStatusChange}
                                  name="relationship_status"
                                  value="InaRelationship"
                                />
                                <span className="checkmark"></span>
                              </label>

                              <label className="cbox">
                                Engaged
                                <input
                                  type="radio"
                                  checked={relationship_status === "engaged"}
                                  onChange={handleRelationStatusChange}
                                  name="relationship_status"
                                  value="engaged"
                                />
                                <span className="checkmark"></span>
                              </label>

                              <label className="cbox">
                                Married
                                <input
                                  type="radio"
                                  checked={relationship_status === "Married"}
                                  onChange={handleRelationStatusChange}
                                  name="relationship_status"
                                  value="Married"
                                />
                                <span className="checkmark"></span>
                              </label>

                              <label className="cbox">
                                It's Complicated
                                <input
                                  type="radio"
                                  checked={
                                    relationship_status === "ItsComplicated"
                                  }
                                  onChange={handleRelationStatusChange}
                                  name="relationship_status"
                                  value="ItsComplicated"
                                />
                                <span className="checkmark"></span>
                              </label>

                              <label className="cbox">
                                Separated
                                <input
                                  type="radio"
                                  checked={relationship_status === "Separated"}
                                  onChange={handleRelationStatusChange}
                                  name="relationship_status"
                                  value="Separated"
                                />
                                <span className="checkmark"></span>
                              </label>

                              <label className="cbox">
                                Divorced
                                <input
                                  type="radio"
                                  checked={relationship_status === "Divorced"}
                                  onChange={handleRelationStatusChange}
                                  name="relationship_status"
                                  value="Divorced"
                                />
                                <span className="checkmark"></span>
                              </label>

                              <label className="cbox">
                                Widowed
                                <input
                                  type="radio"
                                  checked={relationship_status === "Widowed"}
                                  onChange={handleRelationStatusChange}
                                  name="relationship_status"
                                  value="Widowed"
                                />
                                <span className="checkmark"></span>
                              </label>

                              <label className="cbox">
                                Other
                                <input
                                  type="radio"
                                  checked={relationship_status === "Other"}
                                  onChange={handleRelationStatusChange}
                                  name="relationship_status"
                                  value="Other"
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
                                  name="search_looking_for"
                                  value="friendship"
                                  checked={search_looking_for === "friendship"}
                                  onChange={handleSearchLookingforChange}
                                />
                                <span className="checkmark"></span>
                              </label>

                              <label className="cbox">
                                Casual Dating
                                <input
                                  type="radio"
                                  checked={
                                    search_looking_for === "casualDating"
                                  }
                                  onChange={handleSearchLookingforChange}
                                  name="search_looking_for"
                                  value="casualDating"
                                />
                                <span className="checkmark"></span>
                              </label>

                              <label className="cbox">
                                Serious Relationship
                                <input
                                  type="radio"
                                  checked={
                                    search_looking_for === "seriousRelationship"
                                  }
                                  onChange={handleSearchLookingforChange}
                                  name="search_looking_for"
                                  value="seriousRelationship"
                                />
                                <span className="checkmark"></span>
                              </label>

                              <label className="cbox">
                                Marriage
                                <input
                                  type="radio"
                                  checked={search_looking_for === "marriage"}
                                  onChange={handleSearchLookingforChange}
                                  name="search_looking_for"
                                  value="marriage"
                                />
                                <span className="checkmark"></span>
                              </label>

                              <label className="cbox">
                                Long-term Relationship
                                <input
                                  type="radio"
                                  checked={search_looking_for === "longTerm"}
                                  onChange={handleSearchLookingforChange}
                                  name="search_looking_for"
                                  value="longTerm"
                                />
                                <span className="checkmark"></span>
                              </label>

                              <label className="cbox">
                                Open Relationship
                                <input
                                  type="radio"
                                  checked={
                                    search_looking_for === "openRelationship"
                                  }
                                  onChange={handleSearchLookingforChange}
                                  name="search_looking_for"
                                  value="openRelationship"
                                />
                                <span className="checkmark"></span>
                              </label>

                              <label className="cbox">
                                Something Else
                                <input
                                  type="radio"
                                  checked={
                                    search_looking_for === "somethingElse"
                                  }
                                  onChange={handleSearchLookingforChange}
                                  name="search_looking_for"
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
                            <select
                              id="degree"
                              onChange={handleDegreeChange}
                              value={degree}
                              name="degree"
                            >
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
                                  checked={drinkerValue === "Yes"} // Set checked based on state
                                  onChange={handledrinkerChange}
                                  value="Yes"
                                />
                                <span className="checkmark"></span>
                              </label>

                              <label className="cbox">
                                No
                                <input
                                  type="radio"
                                  name="drinker"
                                  checked={drinkerValue === "No"} // Set checked based on state
                                  onChange={handledrinkerChange}
                                  value="No"
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
                                  checked={smokerValue === "Yes"} // Set checked based on state
                                  onChange={handlesmokerChange}
                                  value="Yes"
                                />
                                <span className="checkmark"></span>
                              </label>

                              <label className="cbox">
                                No
                                <input
                                  type="radio"
                                  checked={smokerValue === "No"} // Set checked based on state
                                  onChange={handlesmokerChange}
                                  name="smoker"
                                  value="No"
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
                                  name="tattos"
                                  checked={tattosValue === "Yes"} // Set checked based on state
                                  onChange={handletattosChange}
                                  value="Yes"
                                />
                                <span className="checkmark"></span>
                              </label>

                              <label className="cbox">
                                No
                                <input
                                  type="radio"
                                  checked={tattosValue === "No"} // Set checked based on state
                                  onChange={handletattosChange}
                                  name="tattos"
                                  value="No"
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
                                  checked={body_piercingsValue === "Yes"} // Set checked based on state
                                  onChange={handlebody_piercingsChange}
                                  value="Yes"
                                />
                                <span className="checkmark"></span>
                              </label>

                              <label className="cbox">
                                No
                                <input
                                  type="radio"
                                  name="body_piercings"
                                  checked={body_piercingsValue === "No"} // Set checked based on state
                                  onChange={handlebody_piercingsChange}
                                  value="No"
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
                                  name="fetish"
                                  checked={fetishValue === "BDSM"} // Set checked based on state
                                  onChange={handlefetishChange}
                                  value="BDSM"
                                />
                                <span className="checkmark"></span>
                              </label>

                              <label className="cbox">
                                Role Play
                                <input
                                  type="checkbox"
                                  name="fetish"
                                  checked={fetishValue === "Role Play"} // Set checked based on state
                                  onChange={handlefetishChange}
                                  value="Role Play"
                                />
                                <span className="checkmark"></span>
                              </label>

                              <label className="cbox">
                                Feet
                                <input
                                  type="checkbox"
                                  name="fetish"
                                  checked={fetishValue === "Feet"} // Set checked based on state
                                  onChange={handlefetishChange}
                                  value="Feet"
                                />
                                <span className="checkmark"></span>
                              </label>

                              <label className="cbox">
                                Latex
                                <input
                                  type="checkbox"
                                  name="fetish"
                                  checked={fetishValue === "Latex"} // Set checked based on state
                                  onChange={handlefetishChange}
                                  value="Latex"
                                />
                                <span className="checkmark"></span>
                              </label>

                              <label className="cbox">
                                Voyeurism
                                <input
                                  type="checkbox"
                                  name="fetish"
                                  checked={fetishValue === "Voyeurism"} // Set checked based on state
                                  onChange={handlefetishChange}
                                  value="Voyeurism"
                                />
                                <span className="checkmark"></span>
                              </label>

                              <label className="cbox">
                                Other
                                <input
                                  type="checkbox"
                                  name="fetish"
                                  checked={fetishValue === "Other"} // Set checked based on state
                                  onChange={handlefetishChange}
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
