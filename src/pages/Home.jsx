import React from "react";
import { Link } from "react-router-dom";
import {Header} from "../components/Header";
import icon1 from "../assets/images/icon1.png";
import icon2 from "../assets/images/icon2.png";
import icon3 from "../assets/images/icon3.png";

function Home() {
  return (
    <>
        <Header />
      <section className="welcomebox d-block">
        <div className="container-lg">
          <div className="row">
            <div className="col-md-10">
              <div className="row gy-5 mb-5">
                <div className="col-md-8">
                  <div className="d-flex flex-column gap-3 weltextbox">
                    <h1>LOREM IPSUM DOLOR SIT AMET?</h1>
                    <h2>WELCOME TO AMOURETTE</h2>
                    <p>
                      Ex mollit adipisicing non occaecat proident amet qui
                      reprehenderit cillum eu fugiat ex ut. Duis dolore eu ut ut
                      nulla elit irure occaecat occaecat veniam ex do. Amet
                      officia nostrud sunt sint deserunt pariatur. Aute ipsum
                      voluptate fugiat exercitation deserunt id commodo aliquip
                      magna culpa in nulla reprehenderit. Nostrud sunt officia
                      id dolor exercitation minim elit in dolore ut irure.
                      Excepteur in qui in commodo qui aute et.
                    </p>
                    <div className="d-block mt-3">
                      <Link to="/" className="findbtn">
                        FIND YOUR NEXT PARTNER
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row gy-5">
                <div className="col-md-4">
                  <div className="d-flex flex-column gap-3 weliconblock">
                    <div className="d-flex gap-2 align-items-center">
                      <div className="flex-shrink-0">
                        <div className="iconwel">
                          <img src={icon1} alt="userpic" />
                        </div>
                      </div>
                      <div className="flex-grow-1">
                        <h5>
                          3000+
                          <br />
                          MEMBERS
                        </h5>
                      </div>
                    </div>
                    <p>
                      Commodo voluptate esse quis eiusmod est voluptate duis
                      fugiat nulla magna ut aliqua fugiat.
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="d-flex flex-column gap-3 weliconblock">
                    <div className="d-flex gap-2 align-items-center">
                      <div className="flex-shrink-0">
                        <div className="iconwel">
                          <img src={icon2} alt="userpic" />
                        </div>
                      </div>
                      <div className="flex-grow-1">
                        <h5>
                          YOUR PERFECT
                          <br />
                          MATCH
                        </h5>
                      </div>
                    </div>
                    <p>
                      Sunt Lorem in elit enim ea minim. Id anim Lorem est sit
                      elit do aliqua amet in.
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="d-flex flex-column gap-3 weliconblock">
                    <div className="d-flex gap-2 align-items-center">
                      <div className="flex-shrink-0">
                        <div className="iconwel">
                          <img src={icon3} alt="userpic" />
                        </div>
                      </div>
                      <div className="flex-grow-1">
                        <h5>
                          RECOMMENDED
                          <br />
                          PLATFORM
                        </h5>
                      </div>
                    </div>
                    <p>
                      Eu in aute esse ad proident irure minim commodo. Ad id
                      cupidatat id amet in ullamco minim esse occaecat excepteur
                      qui tempor.
                    </p>
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

export default Home;
