import React, { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SuccessPop from "../components/SuccessPop";
import ErrorPop from "../components/ErrorPop";

function Login() {
  const [err_email, seterr_email] = useState("");
  const [err_pass, seterr_pass] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [err_gender, seterr_gender] = useState("");

  const [showPopSuccess, setShowPopSuccess] = useState(false);
  const [showPopError, setShowPopError] = useState(false);
  const [successPopMessage, setPopsuccessMessage] = useState("");
  const [errorPopMessage, setPoperrorMessage] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    // Check if the username key exists in session storage
    const storedUsername = sessionStorage.getItem("userLogin");
    const userLogin = JSON.parse(storedUsername);

    if (userLogin != null) {
      navigate("/dashboard");
    }
  }, []);
  var apiURL = "http://localhost:3000/api/";
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission

    // Validate email and password
    if (!email || !password) {
      alert("Please fill out all required fields.");
      return;
    }

    console.log(gender);
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    try {
      const res = await axios.post(apiURL + "login", formData, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      console.log(res.data);
      setShowPopSuccess(true);
      setPopsuccessMessage(res.data.message);
      var userResp = res.data.user;
      let userData = {
        id: userResp.id,
        email: userResp.email,
        status: userResp.status,
        token: userResp.token,
      };
      sessionStorage.setItem("userLogin", JSON.stringify(userData));
      setTimeout(() => {
        setShowPopError(false);
        setShowPopSuccess(false);
        navigate("/dashboard");
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
                  <div className="stepbox">
                    <div className="d-flex flex-column gap-3 regtitle mb-5">
                      <div className="d-flex justify-content-between">
                        <h2>LOG IN</h2>
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
                          <label htmlFor="">E-mail</label>
                          <input
                            type="email"
                            placeholder="You e-mail"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="d-flex flex-column gap-2">
                          <label htmlFor="">Password</label>
                          <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder="You password"
                          />
                        </div>
                        <span className="text-danger">{err_email}</span>
                      </div>
                      <div className="col-12">
                        <div className="d-flex flex-column gap-2">
                          <div className="listbox">
                            <label class="cbox">
                              Remember me
                              <input type="checkbox" />
                              <span class="checkmark"></span>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <button type="submit" className="regbtnsubmit">
                          LOG IN
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

export default Login;
