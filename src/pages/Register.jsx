import React, { useState } from "react";
import axios from "axios";
import { BsCloudUpload } from "react-icons/bs";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import SuccessPop from "../components/SuccessPop";
import ErrorPop from "../components/ErrorPop";
import { useNavigate } from "react-router-dom";

function Register() {
  // State to track visibility
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(true);
  const [Valuedate, setValuedate] = useState("");
  const [Valuemonth, setValuemonth] = useState("");
  const [Valueyear, setValueyear] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err_date, seterr_date] = useState("");
  const [err_email, seterr_email] = useState("");
  const [err_pass, seterr_pass] = useState("");

  const [err_gender, seterr_gender] = useState("");
  const [gender, setGender] = useState("");

  const [selectedFile, setSelectedFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const [showPopSuccess, setShowPopSuccess] = useState(false);
  const [showPopError, setShowPopError] = useState(false);
  const [successPopMessage, setPopsuccessMessage] = useState("");
  const [errorPopMessage, setPoperrorMessage] = useState("");
  // Function to toggle visibility
  //Image Validation
  const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2 MB

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      // Check if the file is an image
      const isImage = file.type.startsWith("image/");
      if (!isImage) {
        setErrorMessage("Please upload a valid image file.");
        setSelectedFile(null);
        return;
      }

      // Check the file size
      if (file.size > MAX_FILE_SIZE) {
        setErrorMessage("File size must be less than 2 MB.");
        setSelectedFile(null);
        return;
      }

      // Clear any previous error messages and set the selected file
      setErrorMessage("");
      setSelectedFile(file);
    }
  };
  const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };
  const isValidPassword = (password) => {
    // Check minimum length and strong password criteria
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasDigits = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    return (
      password.length >= minLength &&
      hasUpperCase &&
      hasLowerCase &&
      hasDigits &&
      hasSpecialChar
    );
  };
  const toggleVisibility = () => {
    let isValid = true; // Flag to track overall validity

    // Validate email
    if (!email || !isValidEmail(email)) {
      seterr_email("Please enter a valid email address.");
      isValid = false; // Set isValid to false if email validation fails
    } else {
      seterr_email(""); // Clear error if valid
    }

    // Validate password
    if (!password || !isValidPassword(password)) {
      seterr_pass(
        "Password must be at least 8 characters long and include uppercase letters, lowercase letters, digits, and special characters."
      );
      isValid = false; // Set isValid to false if password is missing or invalid
    } else {
      seterr_pass(""); // Clear error if valid
    }

    // Validate date, month, and year
    if (!Valuedate || !Valuemonth || !Valueyear) {
      seterr_date("Please fill out all date fields.");

      isValid = false; // Set isValid to false if any date field is missing
    } else {
      const date = parseInt(Valuedate);
      const month = parseInt(Valuemonth);
      const year = parseInt(Valueyear);

      if (
        date < 1 ||
        date > 31 ||
        month < 1 ||
        month > 12 ||
        year < 1900 ||
        year > new Date().getFullYear()
      ) {
        seterr_date("Please enter a valid date, month, and year.");
        isValid = false;
      } else {
        seterr_date(""); // Clear error if valid
      }
    }

    // If all validations passed, toggle visibility
    if (isValid) {
      setIsVisible(!isVisible);
    }
  };
  const setGenderr = (e) => {
    setGender(e);
  };
  const handleChangedate = (e) => {
    const newValue = e.target.value;
    // Check if the new value is an integer or empty
    if (/^\d{0,2}$/.test(newValue)) {
      setValuedate(newValue);
    }
  };

  const handleChangemonth = (e) => {
    const newValue = e.target.value;
    // Check if the new value is an integer or empty
    if (/^\d{0,2}$/.test(newValue)) {
      setValuemonth(newValue);
    }
  };

  const handleChangeyear = (e) => {
    const newValue = e.target.value;
    // Check if the new value is an integer or empty
    if (/^\d{0,4}$/.test(newValue)) {
      setValueyear(newValue);
    }
  };

  // Register Form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission

    // Validate email and password
    if (!email || !password) {
      alert("Please fill out all required fields.");
      return;
    }

    // Validate date, month, and year

    if (!gender) {
      seterr_gender("Please select a gender.");
      return;
    } else {
      seterr_gender(""); // Clear error if valid
    }
    console.log(gender);
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    formData.append("birth_date", Valuedate);
    formData.append("birth_month", Valuemonth);
    formData.append("birth_year", Valueyear);
    formData.append("profile_type", event.target.profile_type.value);
    formData.append("gender", gender);
    formData.append("profile_image", selectedFile);
    formData.append("preferences", event.target.preferences.value);
    try {
      const res = await axios.post(
        "http://localhost:3000/api/register",
        formData,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setShowPopSuccess(true);
      setPopsuccessMessage(res.data.message);
      setTimeout(() => {
        setShowPopError(false);
        setShowPopSuccess(false);
        navigate("/login");
      }, 3500);
      // Handle success (e.g., redirect or show a success message)
    } catch (err) {
      console.log("dd");
      console.error(err.response.data.message);
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
      <Header />
      {showPopSuccess && <SuccessPop message={successPopMessage} />}
      {showPopError && <ErrorPop message={errorPopMessage} />}
      <section className="regblock d-block">
        <div className="container-lg">
          <div className="row justify-content-end">
            <div className="col-md-6">
              <div className="regform d-flex flex-column gap-4">
                <form onSubmit={handleSubmit} method="post">
                  {/* 1st step */}
                  <div
                    className="stepbox"
                    style={{ display: isVisible ? "block" : "none" }}
                  >
                    <div className="d-flex flex-column gap-3 regtitle mb-5">
                      <div className="d-flex justify-content-between">
                        <h2>Register</h2>
                        <h2>1/2</h2>
                      </div>
                      <p>
                        Ad et deserunt ea fugiat exercitation. Dolor veniam anim
                        labore exercitation incididunt excepteur mollit occaecat
                        eu irure officia occaecat.
                      </p>
                    </div>
                    <div className="row gy-4">
                      <div className="col-12">
                        <div className="d-flex flex-column gap-2">
                          <label htmlFor="email">
                            E-mail <span className="text-white">*</span>
                          </label>
                          <input
                            type="email"
                            placeholder="You e-mail"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                          <span className="text-danger">{err_email}</span>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="d-flex flex-column gap-2">
                          <label htmlFor="password">
                            Password <span className="text-white">*</span>
                          </label>
                          <input
                            type="password"
                            placeholder="You password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                          />
                          <span className="text-danger">{err_pass}</span>
                        </div>
                      </div>
                      <div className="col-12 col-md-7">
                        <div className="d-flex flex-column gap-2">
                          <label htmlFor="birthday">
                            Birthday <span className="text-white">*</span>
                          </label>
                          <div className="d-flex gap-1 dmybox">
                            <input
                              type="text"
                              placeholder="Date"
                              name="text"
                              minLength="2"
                              maxLength="2"
                              value={Valuedate}
                              onChange={handleChangedate}
                              required
                            />
                            <input
                              type="text"
                              placeholder="Month"
                              name="month"
                              minLength="2"
                              maxLength="2"
                              value={Valuemonth}
                              onChange={handleChangemonth}
                              required
                            />
                            <input
                              type="text"
                              placeholder="Year"
                              name="year"
                              minLength="4"
                              maxLength="4"
                              value={Valueyear}
                              onChange={handleChangeyear}
                              required
                            />
                          </div>
                          <span class="text-danger">{err_date}</span>
                        </div>
                      </div>
                      <div className="col-12">
                        <button
                          type="button"
                          onClick={toggleVisibility}
                          className="regbtnsubmit"
                        >
                          Continue
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* 2nd step form */}
                  <div
                    className="stepbox"
                    style={{ display: isVisible ? "none" : "block" }}
                  >
                    <div className="d-flex flex-column gap-3 regtitle mb-5">
                      <div className="d-flex justify-content-between">
                        <h2>Register</h2>
                        <h2>2/2</h2>
                      </div>
                    </div>
                    <div className="row gy-4">
                      <div className="col-12">
                        <div className="outerupload">
                          <input
                            type="file"
                            name="profile_image"
                            accept="image/*" // Accept only image files
                            onChange={handleFileChange}
                          />
                          <div className="uploadimg">
                            <BsCloudUpload />
                            <h6>Upload image</h6>
                          </div>
                        </div>
                        {errorMessage && (
                          <p className="text-danger">{errorMessage}</p>
                        )}{" "}
                        {/* Display error message */}
                      </div>
                      <div className="col-12">
                        <div className="d-flex flex-column gap-2">
                          <label htmlFor="gender">
                            Gender <span className="text-white">*</span>
                          </label>
                          <select
                            name="gender"
                            onChange={(e) => setGenderr(e.target.value)}
                          >
                            <option value="">Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                          </select>
                          {err_gender && (
                            <span className="text-danger">{err_gender}</span>
                          )}{" "}
                          {/* Display error message */}
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="d-flex flex-column gap-2">
                          <label htmlFor="preferences">Preferences</label>
                          <select name="preferences">
                            <option value="">--Select--</option>
                            <option value="Preferences">Preferences</option>
                            <option value="Preferences">Preferences</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="d-flex flex-column gap-2">
                          <label htmlFor="profile_type">Profile type</label>
                          <div className="listbox">
                            <label className="cbox">
                              Single profile
                              <input
                                type="radio"
                                name="profile_type"
                                value="Single profile"
                              />
                              <span className="checkmark"></span>
                            </label>

                            <label className="cbox">
                              Couples profile
                              <input
                                type="radio"
                                name="profile_type"
                                value="Couples profile"
                              />
                              <span className="checkmark"></span>
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="col-12">
                        <button type="submit" className="regbtnsubmit">
                          Continue
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Register;
