import React, { useState } from "react";
import { BsCloudUpload } from "react-icons/bs";
import { Header } from "../components/Header";

function Register() {
  // State to track visibility
  const [isVisible, setIsVisible] = useState(true);

  // Function to toggle visibility
  const toggleVisibility = () => {
    setIsVisible(!isVisible); // Toggle state
  };

  return (
    <>
      <Header />
      <section className="regblock d-block">
        <div className="container-lg">
          <div className="row justify-content-end">
            <div className="col-md-6">
              <div className="regform d-flex flex-column gap-4">
                <form action="">
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
                          <label htmlFor="">E-mail</label>
                          <input type="email" placeholder="You e-mail" />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="d-flex flex-column gap-2">
                          <label htmlFor="">Password</label>
                          <input type="password" placeholder="You password" />
                        </div>
                      </div>
                      <div className="col-12 col-md-7">
                        <div className="d-flex flex-column gap-2">
                          <label htmlFor="">Birthday</label>
                          <div className="d-flex gap-1 dmybox">
                            <input type="text" placeholder="Date" />
                            <input type="text" placeholder="Month" />
                            <input type="text" placeholder="Year" />
                          </div>
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
                          <input type="file" />
                          <div className="uploadimg">
                            <BsCloudUpload />
                            <h6>Upload image</h6>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="d-flex flex-column gap-2">
                          <label htmlFor="">Gender</label>
                          <select name="" id="">
                            <option value="">Gender</option>
                            <option value="">Male</option>
                            <option value="">Female</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="d-flex flex-column gap-2">
                          <label htmlFor="">Preferences</label>
                          <select name="" id="">
                            <option value="">Preferences</option>
                            <option value="">Preferences</option>
                            <option value="">Preferences</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="d-flex flex-column gap-2">
                          <label htmlFor="">Profile type</label>
                          <div className="listbox">
                            <label class="cbox">
                              Single profile
                              <input type="radio" name="profile" />
                              <span class="checkmark"></span>
                            </label>

                            <label class="cbox">
                              Couples profile
                              <input type="radio" name="profile" />
                              <span class="checkmark"></span>
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
    </>
  );
}

export default Register;
