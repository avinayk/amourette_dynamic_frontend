import React from "react";
import { Link } from "react-router-dom";
import user from "../assets/images/pic.png";

export const Rightsidebar = () => {
  return (
    <>
      <div className="d-flex flex-column leftbar">
        <div className="d-flex flex-column visitedlast">
          <h5 className="grouptitle mb-4">Last visited</h5>
          <div className="d-flex flex-column gap-3 visitscroll">
            <Link
              to="/"
              className="d-flex gap-3 align-items-center listoficons"
            >
              <div className="flex-shrink-0">
                <div className="userpic ofit rounded-circle overflow-hidden">
                  <img src={user} alt="userpic" />
                </div>
              </div>
              <div className="flex-grow-1">
                <h4>Username visited your profile.</h4>
                <h6>Time ago</h6>
              </div>
            </Link>
            <Link
              to="/"
              className="d-flex gap-3 align-items-center listoficons"
            >
              <div className="flex-shrink-0">
                <div className="userpic ofit rounded-circle overflow-hidden">
                  <img src={user} alt="userpic" />
                </div>
              </div>
              <div className="flex-grow-1">
                <h4>Username visited your profile.</h4>
                <h6>Time ago</h6>
              </div>
            </Link>
            <Link
              to="/"
              className="d-flex gap-3 align-items-center listoficons"
            >
              <div className="flex-shrink-0">
                <div className="userpic ofit rounded-circle overflow-hidden">
                  <img src={user} alt="userpic" />
                </div>
              </div>
              <div className="flex-grow-1">
                <h4>Username visited your profile.</h4>
                <h6>Time ago</h6>
              </div>
            </Link>
            <Link
              to="/"
              className="d-flex gap-3 align-items-center listoficons"
            >
              <div className="flex-shrink-0">
                <div className="userpic ofit rounded-circle overflow-hidden">
                  <img src={user} alt="userpic" />
                </div>
              </div>
              <div className="flex-grow-1">
                <h4>Username visited your profile.</h4>
                <h6>Time ago</h6>
              </div>
            </Link>
            <Link
              to="/"
              className="d-flex gap-3 align-items-center listoficons"
            >
              <div className="flex-shrink-0">
                <div className="userpic ofit rounded-circle overflow-hidden">
                  <img src={user} alt="userpic" />
                </div>
              </div>
              <div className="flex-grow-1">
                <h4>Username visited your profile.</h4>
                <h6>Time ago</h6>
              </div>
            </Link>
            <Link
              to="/"
              className="d-flex gap-3 align-items-center listoficons"
            >
              <div className="flex-shrink-0">
                <div className="userpic ofit rounded-circle overflow-hidden">
                  <img src={user} alt="userpic" />
                </div>
              </div>
              <div className="flex-grow-1">
                <h4>Username visited your profile.</h4>
                <h6>Time ago</h6>
              </div>
            </Link>
          </div>
          <div className="viewmore d-block mt-2">
            <Link to="/">View more</Link>
          </div>
        </div>
        <hr className="linehr" />
        <div className="d-flex flex-column gap-2">
        <h5 className="grouptitle mb-4">Statistics</h5>
        <div className="d-flex flex-column gap-3 listnumber">
          <div className="d-flex justify-content-between">
            <h4>Online now</h4>
            <h4>567</h4>
          </div>
          <div className="d-flex justify-content-between">
            <h4>New members</h4>
            <h4>385</h4>
          </div>
          <div className="d-flex justify-content-between">
            <h4>Images</h4>
            <h4>465677</h4>
          </div>
          <div className="d-flex justify-content-between">
            <h4>Groups</h4>
            <h4>456</h4>
          </div>
          <div className="d-flex justify-content-between">
            <h4>Events and parties</h4>
            <h4>484</h4>
          </div>
          <div className="d-flex justify-content-between">
            <h4>Members in total</h4>
            <h4>9746</h4>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};
