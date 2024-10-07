import React from "react";
import { Link } from "react-router-dom";
import Headertwo from "../components/Headertwo";
import { Leftsidebar } from "../components/Leftsidebar";
import { Rightsidebar } from "../components/Rightsidebar";
import { SlOptions } from "react-icons/sl";
import userpic from "../assets/images/pic.png";
import img1 from "../assets/images/pic.png";

function Dashboard() {
  return (
    <>
      <Headertwo />
      <section className="dashbox d-block">
        <div className="container-fluid">
          <div className="row justify-content-between">
            <div className="col-lg-3 col-xl-2 sidefixedbox sticky-top h-100 d-none d-lg-block">
              <Leftsidebar />
            </div>
            <div className="col-lg-5 col-xl-6">
              <div className="d-flex flex-column gap-3">
                <h5 className="grouptitle mb-3">Friends activity</h5>
                <div className="postblock d-flex flex-column rounded-4 overflow-hidden">
                  <div className="d-flex justify-content-between align-items-center  px-3 py-1">
                    <div className="flex-grow-1">
                      <Link to="/" className="d-flex gap-2 align-items-center">
                        <div className="flex-shrink-0">
                          <div className="urpic ofit rounded-circle overflow-hidden">
                            <img src={userpic} alt="userpic" />
                          </div>
                        </div>
                        <div className="flex-grow-1">
                          <h4>Username just posted a new photo.</h4>
                          <h5>Time ago</h5>
                        </div>
                      </Link>
                    </div>
                    <div className="flex-shrink-0">
                      <button type="button" className="btnoption">
                      <SlOptions />
                      </button>
                    </div>
                  </div>
                  <Link to="/" className="imgblock ofit rounded-3 overflow-hidden mt-2">
                    <img src={img1} alt="userpic"/>
                  </Link>
                </div>
                <div className="postblock d-flex flex-column rounded-4 overflow-hidden">
                  <div className="d-flex justify-content-between align-items-center  px-3 py-1">
                    <div className="flex-grow-1">
                      <Link to="/" className="d-flex gap-2 align-items-center">
                        <div className="flex-shrink-0">
                          <div className="urpic ofit rounded-circle overflow-hidden">
                            <img src={userpic} alt="userpic" />
                          </div>
                        </div>
                        <div className="flex-grow-1">
                          <h4>Username joined Group.</h4>
                          <h5>Time ago</h5>
                        </div>
                      </Link>
                    </div>
                    <div className="flex-shrink-0">
                      <button type="button" className="btnoption">
                      <SlOptions />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="postblock d-flex flex-column rounded-4 overflow-hidden">
                  <div className="d-flex justify-content-between align-items-center  px-3 py-1">
                    <div className="flex-grow-1">
                      <Link to="/" className="d-flex gap-2 align-items-center">
                        <div className="flex-shrink-0">
                          <div className="urpic ofit rounded-circle overflow-hidden">
                            <img src={userpic} alt="userpic" />
                          </div>
                        </div>
                        <div className="flex-grow-1">
                          <h4>Username and Username are now friends.</h4>
                          <h5>Time ago</h5>
                        </div>
                      </Link>
                    </div>
                    <div className="flex-shrink-0">
                      <button type="button" className="btnoption">
                      <SlOptions />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="postblock d-flex flex-column rounded-4 overflow-hidden">
                  <div className="d-flex justify-content-between align-items-center  px-3 py-1">
                    <div className="flex-grow-1">
                      <Link to="/" className="d-flex gap-2 align-items-center">
                        <div className="flex-shrink-0">
                          <div className="urpic ofit rounded-circle overflow-hidden">
                            <img src={userpic} alt="userpic" />
                          </div>
                        </div>
                        <div className="flex-grow-1">
                          <h4>Username is attending Arrangement</h4>
                          <h5>Time ago</h5>
                        </div>
                      </Link>
                    </div>
                    <div className="flex-shrink-0">
                      <button type="button" className="btnoption">
                      <SlOptions />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="postblock d-flex flex-column rounded-4 overflow-hidden">
                  <div className="d-flex justify-content-between align-items-center  px-3 py-1">
                    <div className="flex-grow-1">
                      <Link to="/" className="d-flex gap-2 align-items-center">
                        <div className="flex-shrink-0">
                          <div className="urpic ofit rounded-circle overflow-hidden">
                            <img src={userpic} alt="userpic" />
                          </div>
                        </div>
                        <div className="flex-grow-1">
                          <h4>Username just posted a new photo.</h4>
                          <h5>Time ago</h5>
                        </div>
                      </Link>
                    </div>
                    <div className="flex-shrink-0">
                      <button type="button" className="btnoption">
                      <SlOptions />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="postblock d-flex flex-column rounded-4 overflow-hidden">
                  <div className="d-flex justify-content-between align-items-center  px-3 py-1">
                    <div className="flex-grow-1">
                      <Link to="/" className="d-flex gap-2 align-items-center">
                        <div className="flex-shrink-0">
                          <div className="urpic ofit rounded-circle overflow-hidden">
                            <img src={userpic} alt="userpic" />
                          </div>
                        </div>
                        <div className="flex-grow-1">
                          <h4>Username just posted a new photo.</h4>
                          <h5>Time ago</h5>
                        </div>
                      </Link>
                    </div>
                    <div className="flex-shrink-0">
                      <button type="button" className="btnoption">
                      <SlOptions />
                      </button>
                    </div>
                  </div>
                  <Link to="/" className="imgblock ofit rounded-3 overflow-hidden mt-2">
                    <img src={img1} alt="userpic"/>
                  </Link>
                </div>
                <div className="postblock d-flex flex-column rounded-4 overflow-hidden">
                  <div className="d-flex justify-content-between align-items-center  px-3 py-1">
                    <div className="flex-grow-1">
                      <Link to="/" className="d-flex gap-2 align-items-center">
                        <div className="flex-shrink-0">
                          <div className="urpic ofit rounded-circle overflow-hidden">
                            <img src={userpic} alt="userpic" />
                          </div>
                        </div>
                        <div className="flex-grow-1">
                          <h4>Username just posted a new photo.</h4>
                          <h5>Time ago</h5>
                        </div>
                      </Link>
                    </div>
                    <div className="flex-shrink-0">
                      <button type="button" className="btnoption">
                      <SlOptions />
                      </button>
                    </div>
                  </div>
                  <Link to="/" className="imgblock ofit rounded-3 overflow-hidden mt-2">
                    <img src={img1} alt="userpic"/>
                  </Link>
                </div>
                <div className="postblock d-flex flex-column rounded-4 overflow-hidden">
                  <div className="d-flex justify-content-between align-items-center  px-3 py-1">
                    <div className="flex-grow-1">
                      <Link to="/" className="d-flex gap-2 align-items-center">
                        <div className="flex-shrink-0">
                          <div className="urpic ofit rounded-circle overflow-hidden">
                            <img src={userpic} alt="userpic" />
                          </div>
                        </div>
                        <div className="flex-grow-1">
                          <h4>Username joined Group.</h4>
                          <h5>Time ago</h5>
                        </div>
                      </Link>
                    </div>
                    <div className="flex-shrink-0">
                      <button type="button" className="btnoption">
                      <SlOptions />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="postblock d-flex flex-column rounded-4 overflow-hidden">
                  <div className="d-flex justify-content-between align-items-center  px-3 py-1">
                    <div className="flex-grow-1">
                      <Link to="/" className="d-flex gap-2 align-items-center">
                        <div className="flex-shrink-0">
                          <div className="urpic ofit rounded-circle overflow-hidden">
                            <img src={userpic} alt="userpic" />
                          </div>
                        </div>
                        <div className="flex-grow-1">
                          <h4>Username and Username are now friends.</h4>
                          <h5>Time ago</h5>
                        </div>
                      </Link>
                    </div>
                    <div className="flex-shrink-0">
                      <button type="button" className="btnoption">
                      <SlOptions />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="postblock d-flex flex-column rounded-4 overflow-hidden">
                  <div className="d-flex justify-content-between align-items-center  px-3 py-1">
                    <div className="flex-grow-1">
                      <Link to="/" className="d-flex gap-2 align-items-center">
                        <div className="flex-shrink-0">
                          <div className="urpic ofit rounded-circle overflow-hidden">
                            <img src={userpic} alt="userpic" />
                          </div>
                        </div>
                        <div className="flex-grow-1">
                          <h4>Username is attending Arrangement</h4>
                          <h5>Time ago</h5>
                        </div>
                      </Link>
                    </div>
                    <div className="flex-shrink-0">
                      <button type="button" className="btnoption">
                      <SlOptions />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="postblock d-flex flex-column rounded-4 overflow-hidden">
                  <div className="d-flex justify-content-between align-items-center  px-3 py-1">
                    <div className="flex-grow-1">
                      <Link to="/" className="d-flex gap-2 align-items-center">
                        <div className="flex-shrink-0">
                          <div className="urpic ofit rounded-circle overflow-hidden">
                            <img src={userpic} alt="userpic" />
                          </div>
                        </div>
                        <div className="flex-grow-1">
                          <h4>Username just posted a new photo.</h4>
                          <h5>Time ago</h5>
                        </div>
                      </Link>
                    </div>
                    <div className="flex-shrink-0">
                      <button type="button" className="btnoption">
                      <SlOptions />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="postblock d-flex flex-column rounded-4 overflow-hidden">
                  <div className="d-flex justify-content-between align-items-center  px-3 py-1">
                    <div className="flex-grow-1">
                      <Link to="/" className="d-flex gap-2 align-items-center">
                        <div className="flex-shrink-0">
                          <div className="urpic ofit rounded-circle overflow-hidden">
                            <img src={userpic} alt="userpic" />
                          </div>
                        </div>
                        <div className="flex-grow-1">
                          <h4>Username just posted a new photo.</h4>
                          <h5>Time ago</h5>
                        </div>
                      </Link>
                    </div>
                    <div className="flex-shrink-0">
                      <button type="button" className="btnoption">
                      <SlOptions />
                      </button>
                    </div>
                  </div>
                  <Link to="/" className="imgblock ofit rounded-3 overflow-hidden mt-2">
                    <img src={img1} alt="userpic"/>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-xl-2 sidefixedbox sticky-top h-100 d-none d-lg-block">
              <Rightsidebar />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Dashboard;
