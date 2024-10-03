import React from "react";
import {Header} from "../components/Header";


function Login() {
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
                          <input type="email" placeholder="You e-mail" />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="d-flex flex-column gap-2">
                          <label htmlFor="">Password</label>
                          <input type="password" placeholder="You password" />
                        </div>
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
    </>
  );
}

export default Login;
