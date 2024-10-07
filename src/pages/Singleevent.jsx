import React from "react";
import { Link } from "react-router-dom";
import Headertwo from "../components/Headertwo";
import evenphoto from "../assets/images/pic.png";
import iconphoto from "../assets/images/me3.png";
import chat from "../assets/images/chatpost.png";
import heart from "../assets/images/sheart.png";
import postpic from "../assets/images/pic.png";
import mempic from "../assets/images/pic.png";
import icon1 from "../assets/images/det1.png";
import icon2 from "../assets/images/det2.png";
import icon3 from "../assets/images/det3.png";

export default function Singleevent() {
  return (
    <>
      <Headertwo />

      <section className="singleevent d-block gapy">
        <div className="container-lg">
          <div className="row gy-4">
            <div className="col-md-7">
              <div className="d-flex flex-column gap-4">
                <div className="eventtitle d-block pb-1">
                  <h1>Event name</h1>
                </div>
                <div className="d-flex flex-column gap-2">
                  <div className="evname d-block">
                    <div className="d-flex flex-column gap-2">
                      <div className="d-flex gap-2 align-items-center">
                        <div className="flex-shrink-0">
                          <div className="evephoto ofit rounded-circle overflow-hidden">
                            <img src={evenphoto} alt="evepic" />
                          </div>
                        </div>
                        <div className="flex-grow-1">
                          <div className="whatthink d-block">
                            <h4>What do you think?</h4>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-end addphotothink">
                        <div className="d-flex gap-2 align-items-center">
                          <div className="flex-grow-1">
                            <h4>Add photo</h4>
                          </div>
                          <div className="flex-shrink-0">
                            <div className="iconphoto fulw">
                              <img src={iconphoto} alt="namepic" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="evname d-block">
                    <div className="d-flex flex-column gap-2">
                      <div className="d-flex gap-2 align-items-center">
                        <div className="flex-shrink-0">
                          <div className="evephoto ofit rounded-circle overflow-hidden">
                            <img src={evenphoto} alt="evepic" />
                          </div>
                        </div>
                        <div className="flex-grow-1">
                          <div className="d-flex flex-column gap-1 evettimeheaing">
                            <h4>Username created an event</h4>
                            <h5>Time</h5>
                          </div>
                        </div>
                      </div>
                      <div className="d-block contpost">
                        <p>
                          Eiusmod dolor proident labore laborum enim laboris
                          culpa ipsum enim aliqua culpa. Consequat nostrud
                          eiusmod eu magna consectetur nulla deserunt
                          incididunt. Aute exercitation excepteur occaecat
                          proident cillum cillum consectetur officia dolore.
                        </p>
                      </div>
                      <div className="d-flex justify-content-end">
                        <div className="d-flex gap-3 postchatheart">
                          <button type="button" className="btn fulw">
                            <img src={chat} alt="chatpic" />
                          </button>
                          <button type="button" className="btn fulw">
                            <img src={heart} alt="chatpic" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="evname d-block">
                    <div className="d-flex flex-column gap-2">
                      <div className="d-flex gap-2 align-items-center">
                        <div className="flex-shrink-0">
                          <div className="evephoto ofit rounded-circle overflow-hidden">
                            <img src={evenphoto} alt="evepic" />
                          </div>
                        </div>
                        <div className="flex-grow-1">
                          <div className="d-flex flex-column gap-1 evettimeheaing">
                            <h4>Username created an event</h4>
                            <h5>Time</h5>
                          </div>
                        </div>
                      </div>
                      <div className="d-block contpost">
                        <p>
                          Eiusmod dolor proident labore laborum enim laboris
                          culpa ipsum enim aliqua culpa. Consequat nostrud
                          eiusmod eu magna consectetur nulla deserunt
                          incididunt. Aute exercitation excepteur occaecat
                          proident cillum cillum consectetur officia dolore.
                        </p>
                      </div>
                      <div className="postimgfull ofit rounded-2 overflow-hidden">
                        <img src={postpic} alt="postpic" />
                      </div>
                      <div className="d-flex justify-content-end">
                        <div className="d-flex gap-3 postchatheart">
                          <button type="button" className="btn fulw">
                            <img src={chat} alt="chatpic" />
                          </button>
                          <button type="button" className="btn fulw">
                            <img src={heart} alt="chatpic" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="d-flex flex-column gap-3">
                <div className="d-flex justify-content-between posttopbtns">
                  <button type="button" className="btn prbtn">
                    INTERESTED
                  </button>
                  <button type="button" className="btn sebtn">
                    INVITE A FRIEND
                  </button>
                </div>
                <div className="d-flex justify-content-between posttopbtns">
                  <button type="button" className="btn prbtn">
                    SAVE CHANCES
                  </button>
                  <button type="button" className="btn redbtn">
                    DELETE EVENT
                  </button>
                </div>
                <div className="detailbox d-flex flex-column gap-2">
                  <h3>Details</h3>
                  <p>
                    Ipsum elit irure commodo labore aliqua aliqua dolor eu sit
                    excepteur ullamco. Qui Lorem adipisicing consequat labore
                    laboris et pariatur aliquip duis ex. Id tempor Lorem elit
                    pariatur enim ex cupidatat non cupidatat nostrud magna
                    officia aliquip ut. Ad ut nulla dolore aute cupidatat
                    cupidatat excepteur ea do qui fugiat et.
                  </p>
                  <div className="d-flex flex-column gap-2 mt-2">
                    <div className="d-flex gap-3 align-items-center deticontext ">
                      <div className="flex-shrink-0">
                        <div className="pubimg fulw">
                          <img src={icon1} alt="pubimg" />
                        </div>
                      </div>
                      <div className="flex-grow-1">
                        <h5>Public / Private</h5>
                      </div>
                    </div>
                    <div className="d-flex gap-3 align-items-center deticontext ">
                      <div className="flex-shrink-0">
                        <div className="pubimg fulw">
                          <img src={icon2} alt="pubimg" />
                        </div>
                      </div>
                      <div className="flex-grow-1">
                        <h5>Location</h5>
                      </div>
                    </div>
                    <div className="d-flex gap-3 align-items-center deticontext ">
                      <div className="flex-shrink-0">
                        <div className="pubimg fulw">
                          <img src={icon3} alt="pubimg" />
                        </div>
                      </div>
                      <div className="flex-grow-1">
                        <h5>Time and date</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="detailbox d-flex flex-column gap-2">
                  <h3>Members interested <span>9856</span></h3>
                 <div className="row g-2 g-md-4">
                  <div className="col-2 col-md-3">
                    <div className="memperson ofit overflow-hidden rounded-3">
                      <img src={mempic} alt="mempic" />
                    </div>
                  </div>
                  <div className="col-2 col-md-3">
                    <div className="memperson ofit overflow-hidden rounded-3">
                      <img src={mempic} alt="mempic" />
                    </div>
                  </div>
                  <div className="col-2 col-md-3">
                    <div className="memperson ofit overflow-hidden rounded-3">
                      <img src={mempic} alt="mempic" />
                    </div>
                  </div>
                  <div className="col-2 col-md-3">
                    <div className="memperson ofit overflow-hidden rounded-3">
                      <img src={mempic} alt="mempic" />
                    </div>
                  </div>
                  <div className="col-2 col-md-3">
                    <div className="memperson ofit overflow-hidden rounded-3">
                      <img src={mempic} alt="mempic" />
                    </div>
                  </div>
                  <div className="col-2 col-md-3">
                    <div className="memperson ofit overflow-hidden rounded-3">
                      <img src={mempic} alt="mempic" />
                    </div>
                  </div>
                  <div className="col-2 col-md-3">
                    <div className="memperson ofit overflow-hidden rounded-3">
                      <img src={mempic} alt="mempic" />
                    </div>
                  </div>
                  <div className="col-2 col-md-3">
                    <div className="memperson ofit overflow-hidden rounded-3">
                      <img src={mempic} alt="mempic" />
                    </div>
                  </div>
                 </div>
             <div className="d-block vmore">
              <Link to="/">View More</Link>
             </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
