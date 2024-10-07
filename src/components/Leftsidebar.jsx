import React from "react";
import { Link } from "react-router-dom";
import user from "../assets/images/pic.png";
import me1 from "../assets/images/me1.png";
import me2 from "../assets/images/me2.png";
import me3 from "../assets/images/me3.png";
import me4 from "../assets/images/me4.png";
import me5 from "../assets/images/me5.png";
import me6 from "../assets/images/me6.png";
import me7 from "../assets/images/me7.png";

export const Leftsidebar = () => {
  return (
    <>
      <div className="d-flex flex-column leftbar">
        <div className="d-flex flex-column gap-2 ">
          <Link to="/" className="d-flex gap-3 align-items-center listoficons">
            <div className="flex-shrink-0">
              <div className="userpic ofit rounded-circle overflow-hidden">
                <img src={user} alt="userpic" />
              </div>
            </div>
            <div className="flex-grow-1">
              <h4>Your profile</h4>
            </div>
          </Link>
          <Link to="/" className="d-flex gap-3 align-items-center listoficons">
            <div className="flex-shrink-0">
              <div className="userpic ofit rounded-circle overflow-hidden">
                <img src={me1} alt="userpic" />
              </div>
            </div>
            <div className="flex-grow-1">
              <h4>Members</h4>
            </div>
          </Link>
          <Link to="/" className="d-flex gap-3 align-items-center listoficons">
            <div className="flex-shrink-0">
              <div className="userpic ofit rounded-circle overflow-hidden">
                <img src={me2} alt="userpic" />
              </div>
            </div>
            <div className="flex-grow-1">
              <h4>Messages</h4>
            </div>
          </Link>
          <Link to="/" className="d-flex gap-3 align-items-center listoficons">
            <div className="flex-shrink-0">
              <div className="userpic ofit rounded-circle overflow-hidden">
                <img src={me3} alt="userpic" />
              </div>
            </div>
            <div className="flex-grow-1">
              <h4>Photos</h4>
            </div>
          </Link>
          <Link to="/" className="d-flex gap-3 align-items-center listoficons">
            <div className="flex-shrink-0">
              <div className="userpic ofit rounded-circle overflow-hidden">
                <img src={me4} alt="userpic" />
              </div>
            </div>
            <div className="flex-grow-1">
              <h4>Groups</h4>
            </div>
          </Link>
          <Link to="/" className="d-flex gap-3 align-items-center listoficons">
            <div className="flex-shrink-0">
              <div className="userpic ofit rounded-circle overflow-hidden">
                <img src={me5} alt="userpic" />
              </div>
            </div>
            <div className="flex-grow-1">
              <h4>Events</h4>
            </div>
          </Link>
          <Link to="/" className="d-flex gap-3 align-items-center listoficons">
            <div className="flex-shrink-0">
              <div className="userpic ofit rounded-circle overflow-hidden">
                <img src={me6} alt="userpic" />
              </div>
            </div>
            <div className="flex-grow-1">
              <h4>Speedating</h4>
            </div>
          </Link>
          <Link to="/" className="d-flex gap-3 align-items-center listoficons">
            <div className="flex-shrink-0">
              <div className="userpic ofit rounded-circle overflow-hidden">
                <img src={me7} alt="userpic" />
              </div>
            </div>
            <div className="flex-grow-1">
              <h4>Forum</h4>
            </div>
          </Link>
        </div>
        <hr className="linehr" />
        <div className="d-flex flex-column groupmy leftscrollbox">
          <h5 className="grouptitle mb-4">My groups</h5>
          <div className="d-flex flex-column gap-3 ">
            <Link
              to="/"
              className="d-flex gap-3 align-items-center listoficons"
            >
              <div className="flex-shrink-0">
                <div className="userpic ofit rounded-3 overflow-hidden">
                  <img src={user} alt="userpic" />
                </div>
              </div>
              <div className="flex-grow-1">
                <h4>
                  Commodo nulla cillum minim ipsum ullamco tempor enim et
                  ullamco quis reprehenderit sint.
                </h4>
              </div>
            </Link>
            <Link
              to="/"
              className="d-flex gap-3 align-items-center listoficons"
            >
              <div className="flex-shrink-0">
                <div className="userpic ofit rounded-3 overflow-hidden">
                  <img src={user} alt="userpic" />
                </div>
              </div>
              <div className="flex-grow-1">
                <h4>
                  Commodo nulla cillum minim ipsum ullamco tempor enim et
                  ullamco quis reprehenderit sint.
                </h4>
              </div>
            </Link>
            <Link
              to="/"
              className="d-flex gap-3 align-items-center listoficons"
            >
              <div className="flex-shrink-0">
                <div className="userpic ofit rounded-3 overflow-hidden">
                  <img src={user} alt="userpic" />
                </div>
              </div>
              <div className="flex-grow-1">
                <h4>
                  Commodo nulla cillum minim ipsum ullamco tempor enim et
                  ullamco quis reprehenderit sint.
                </h4>
              </div>
            </Link>
            <Link
              to="/"
              className="d-flex gap-3 align-items-center listoficons"
            >
              <div className="flex-shrink-0">
                <div className="userpic ofit rounded-3 overflow-hidden">
                  <img src={user} alt="userpic" />
                </div>
              </div>
              <div className="flex-grow-1">
                <h4>
                  Commodo nulla cillum minim ipsum ullamco tempor enim et
                  ullamco quis reprehenderit sint.
                </h4>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
