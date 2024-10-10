import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { UpgradeMembership } from "../components/UpgradeMembership";

import logo from "../assets/images/logo.png";
import icon1 from "../assets/images/menuicon.png";
import icon2 from "../assets/images/bell.png";
import icon3 from "../assets/images/chat.png";
import me1 from "../assets/images/me1.png";
import me2 from "../assets/images/me2.png";
import me3 from "../assets/images/me3.png";
import me4 from "../assets/images/me4.png";
import me5 from "../assets/images/me5.png";
import me6 from "../assets/images/me6.png";
import me7 from "../assets/images/me7.png";
import pe1 from "../assets/images/pic.png";
import se1 from "../assets/images/se1.png";
import se2 from "../assets/images/se2.png";
import se3 from "../assets/images/se3.png";

function Headertwo() {
  // State to toggle menubox visibility

  // Function to toggle menu visibility
  const toggleMenu = (menuId) => {
    setActiveMenu(activeMenu === menuId ? null : menuId);
  };

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
    // Disable body scroll when popup is open
    document.body.style.overflowY = "hidden";
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    // Re-enable body scroll when popup is closed
    document.body.style.overflowY = "auto";
  };

  const [activeMenu, setActiveMenu] = useState(null);

  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsSticky(true); // Set sticky if scrolled down
    } else {
      setIsSticky(false); // Remove sticky if at the top
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className={`header ${isSticky ? "sticky" : ""}`}>
        <div className="container-lg">
          <div className="row gy-3 align-items-center">
            <div className="col-md-3">
              <Link to="/" className="toplogo d-inline-block fulw">
                <img src={logo} alt="Logo" />
              </Link>
            </div>
            <div className="col-md-3">
              <div className="d-block topsearch">
                <form action="">
                  <input type="text" placeholder="Search Amourette..." />
                </form>
              </div>
            </div>
            <div className="col-md-6">
              <div className="d-flex justify-content-center justify-content-md-end">
                <div className="d-flex gap-4 align-items-center">
                  <div className="d-flex gap-3 rel">
                    <div className="">
                      <button
                        type="button"
                        className={`topmenu ${
                          activeMenu === "menu1" ? "active" : ""
                        }`}
                        onClick={() => toggleMenu("menu1")}
                      >
                        <img src={icon1} alt="userp" />
                      </button>
                      <div
                        className="menubox"
                        style={{
                          display: activeMenu === "menu1" ? "block" : "none",
                        }}
                      >
                        <div className="d-flex flex-column gap-4 ">
                          <h3>Menu</h3>
                          <div className="d-flex flex-column gap-3">
                            <Link to="/" className="d-flex gap-3">
                              <div className="flex-shrink-0">
                                <div className="iconmenu fulw">
                                  <img src={me1} alt="userpic" />
                                </div>
                              </div>
                              <div className="flex-grow-1">
                                <h4>Members</h4>
                                <p>View and browse through members.</p>
                              </div>
                            </Link>
                            <Link to="/" className="d-flex gap-3">
                              <div className="flex-shrink-0">
                                <div className="iconmenu fulw">
                                  <img src={me2} alt="userpic" />
                                </div>
                              </div>
                              <div className="flex-grow-1">
                                <h4>Messages</h4>
                                <p>View received and sent messages.</p>
                              </div>
                            </Link>
                            <Link to="/" className="d-flex gap-3">
                              <div className="flex-shrink-0">
                                <div className="iconmenu fulw">
                                  <img src={me3} alt="userpic" />
                                </div>
                              </div>
                              <div className="flex-grow-1">
                                <h4>Gallery</h4>
                                <p>
                                  View and upload images to a public gallery.
                                </p>
                              </div>
                            </Link>
                            <Link to="/" className="d-flex gap-3">
                              <div className="flex-shrink-0">
                                <div className="iconmenu fulw">
                                  <img src={me4} alt="userpic" />
                                </div>
                              </div>
                              <div className="flex-grow-1">
                                <h4>Groups</h4>
                                <p>Browse and create groups.</p>
                              </div>
                            </Link>
                            <Link to="/" className="d-flex gap-3">
                              <div className="flex-shrink-0">
                                <div className="iconmenu fulw">
                                  <img src={me5} alt="userpic" />
                                </div>
                              </div>
                              <div className="flex-grow-1">
                                <h4>Events</h4>
                                <p>Browse and create events.</p>
                              </div>
                            </Link>
                            <Link to="/" className="d-flex gap-3">
                              <div className="flex-shrink-0">
                                <div className="iconmenu fulw">
                                  <img src={me6} alt="userpic" />
                                </div>
                              </div>
                              <div className="flex-grow-1">
                                <h4>Speedating</h4>
                                <p>Meet new people.</p>
                              </div>
                            </Link>
                            <Link to="/" className="d-flex gap-3">
                              <div className="flex-shrink-0">
                                <div className="iconmenu fulw">
                                  <img src={me7} alt="userpic" />
                                </div>
                              </div>
                              <div className="flex-grow-1">
                                <h4>Forum</h4>
                                <p>Browse and create forum threads.</p>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <button
                        type="button"
                        className={`topmenu ${
                          activeMenu === "menu2" ? "active" : ""
                        }`}
                        onClick={() => toggleMenu("menu2")}
                      >
                        <img src={icon2} alt="userp" />
                      </button>
                      <div
                        className="menubox"
                        style={{
                          display: activeMenu === "menu2" ? "block" : "none",
                        }}
                      >
                        <div className="d-flex flex-column gap-4 ">
                          <h3>Notification</h3>
                          <div className="d-flex flex-column gap-3">
                            <div className="d-flex flex-column gap-3 scrollyover">
                              <Link to="/" className="d-flex gap-3">
                                <div className="flex-shrink-0">
                                  <div className="iconmenu ofit rounded-circle overflow-hidden">
                                    <img src={pe1} alt="userpic" />
                                  </div>
                                </div>
                                <div className="flex-grow-1">
                                  <h4>Username just posted an image</h4>
                                  <p className="timeago">Time ago</p>
                                </div>
                              </Link>
                              <Link to="/" className="d-flex gap-3">
                                <div className="flex-shrink-0">
                                  <div className="iconmenu ofit rounded-circle overflow-hidden">
                                    <img src={pe1} alt="userpic" />
                                  </div>
                                </div>
                                <div className="flex-grow-1">
                                  <h4>Username shared a post</h4>
                                  <p className="timeago">Time ago</p>
                                </div>
                              </Link>
                              <Link to="/" className="d-flex gap-3">
                                <div className="flex-shrink-0">
                                  <div className="iconmenu ofit rounded-circle overflow-hidden">
                                    <img src={pe1} alt="userpic" />
                                  </div>
                                </div>
                                <div className="flex-grow-1">
                                  <h4>Username just created an event</h4>
                                  <p className="timeago">Time ago</p>
                                </div>
                              </Link>
                              <Link to="/" className="d-flex gap-3">
                                <div className="flex-shrink-0">
                                  <div className="iconmenu ofit rounded-circle overflow-hidden">
                                    <img src={pe1} alt="userpic" />
                                  </div>
                                </div>
                                <div className="flex-grow-1">
                                  <h4>Username just created an group</h4>
                                  <p className="timeago">Time ago</p>
                                </div>
                              </Link>
                              <Link to="/" className="d-flex gap-3">
                                <div className="flex-shrink-0">
                                  <div className="iconmenu ofit rounded-circle overflow-hidden">
                                    <img src={pe1} alt="userpic" />
                                  </div>
                                </div>
                                <div className="flex-grow-1">
                                  <h4>Username just posted an image</h4>
                                  <p className="timeago">Time ago</p>
                                </div>
                              </Link>
                              <Link to="/" className="d-flex gap-3">
                                <div className="flex-shrink-0">
                                  <div className="iconmenu ofit rounded-circle overflow-hidden">
                                    <img src={pe1} alt="userpic" />
                                  </div>
                                </div>
                                <div className="flex-grow-1">
                                  <h4>Username shared a post</h4>
                                  <p className="timeago">Time ago</p>
                                </div>
                              </Link>
                              <Link to="/" className="d-flex gap-3">
                                <div className="flex-shrink-0">
                                  <div className="iconmenu ofit rounded-circle overflow-hidden">
                                    <img src={pe1} alt="userpic" />
                                  </div>
                                </div>
                                <div className="flex-grow-1">
                                  <h4>Username just created an event</h4>
                                  <p className="timeago">Time ago</p>
                                </div>
                              </Link>
                              <Link to="/" className="d-flex gap-3">
                                <div className="flex-shrink-0">
                                  <div className="iconmenu ofit rounded-circle overflow-hidden">
                                    <img src={pe1} alt="userpic" />
                                  </div>
                                </div>
                                <div className="flex-grow-1">
                                  <h4>Username just created an group</h4>
                                  <p className="timeago">Time ago</p>
                                </div>
                              </Link>
                            </div>
                            <div className="d-block morebtn">
                              <Link to="/">View more</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <button
                        type="button"
                        className={`topmenu ${
                          activeMenu === "menu3" ? "active" : ""
                        }`}
                        onClick={() => toggleMenu("menu3")}
                      >
                        <img src={icon3} alt="userp" />
                      </button>
                      <div
                        className="menubox"
                        style={{
                          display: activeMenu === "menu3" ? "block" : "none",
                        }}
                      >
                        <div className="d-flex flex-column gap-4 ">
                          <h3>Inbox</h3>
                          <div className="d-block inboxser">
                            <form action="">
                              <input
                                type="text"
                                placeholder="Search inbox..."
                              />
                            </form>
                          </div>
                          <div className="d-flex flex-column gap-3">
                            <div className="d-flex flex-column gap-3 scrollyover">
                              <Link to="/" className="d-flex gap-3">
                                <div className="flex-shrink-0">
                                  <div className="iconmenu ofit rounded-circle overflow-hidden">
                                    <img src={pe1} alt="userpic" />
                                  </div>
                                </div>
                                <div className="flex-grow-1">
                                  <div className="d-flex justify-content-between">
                                    <h4>Username</h4>
                                    <p className="">Time ago</p>
                                  </div>
                                  <h6 className="minimsg">
                                    Amet non eiusmod ea labore amet est esse
                                    tempor cupidatat minim nulla commodo
                                    reprehenderit exercitation.
                                  </h6>
                                </div>
                              </Link>
                              <Link to="/" className="d-flex gap-3">
                                <div className="flex-shrink-0">
                                  <div className="iconmenu ofit rounded-circle overflow-hidden">
                                    <img src={pe1} alt="userpic" />
                                  </div>
                                </div>
                                <div className="flex-grow-1">
                                  <div className="d-flex justify-content-between">
                                    <h4>Username</h4>
                                    <p className="">Time ago</p>
                                  </div>
                                  <h6 className="minimsg">
                                    Amet non eiusmod ea labore amet est esse
                                    tempor cupidatat minim nulla commodo
                                    reprehenderit exercitation.
                                  </h6>
                                </div>
                              </Link>
                              <Link to="/" className="d-flex gap-3">
                                <div className="flex-shrink-0">
                                  <div className="iconmenu ofit rounded-circle overflow-hidden">
                                    <img src={pe1} alt="userpic" />
                                  </div>
                                </div>
                                <div className="flex-grow-1">
                                  <div className="d-flex justify-content-between">
                                    <h4>Username</h4>
                                    <p className="">Time ago</p>
                                  </div>
                                  <h6 className="minimsg">
                                    Amet non eiusmod ea labore amet est esse
                                    tempor cupidatat minim nulla commodo
                                    reprehenderit exercitation.
                                  </h6>
                                </div>
                              </Link>
                              <Link to="/" className="d-flex gap-3">
                                <div className="flex-shrink-0">
                                  <div className="iconmenu ofit rounded-circle overflow-hidden">
                                    <img src={pe1} alt="userpic" />
                                  </div>
                                </div>
                                <div className="flex-grow-1">
                                  <div className="d-flex justify-content-between">
                                    <h4>Username</h4>
                                    <p className="">Time ago</p>
                                  </div>
                                  <h6 className="minimsg">
                                    Amet non eiusmod ea labore amet est esse
                                    tempor cupidatat minim nulla commodo
                                    reprehenderit exercitation.
                                  </h6>
                                </div>
                              </Link>
                              <Link to="/" className="d-flex gap-3">
                                <div className="flex-shrink-0">
                                  <div className="iconmenu ofit rounded-circle overflow-hidden">
                                    <img src={pe1} alt="userpic" />
                                  </div>
                                </div>
                                <div className="flex-grow-1">
                                  <div className="d-flex justify-content-between">
                                    <h4>Username</h4>
                                    <p className="">Time ago</p>
                                  </div>
                                  <h6 className="minimsg">
                                    Amet non eiusmod ea labore amet est esse
                                    tempor cupidatat minim nulla commodo
                                    reprehenderit exercitation.
                                  </h6>
                                </div>
                              </Link>
                              <Link to="/" className="d-flex gap-3">
                                <div className="flex-shrink-0">
                                  <div className="iconmenu ofit rounded-circle overflow-hidden">
                                    <img src={pe1} alt="userpic" />
                                  </div>
                                </div>
                                <div className="flex-grow-1">
                                  <div className="d-flex justify-content-between">
                                    <h4>Username</h4>
                                    <p className="">Time ago</p>
                                  </div>
                                  <h6 className="minimsg">
                                    Amet non eiusmod ea labore amet est esse
                                    tempor cupidatat minim nulla commodo
                                    reprehenderit exercitation.
                                  </h6>
                                </div>
                              </Link>
                              <Link to="/" className="d-flex gap-3">
                                <div className="flex-shrink-0">
                                  <div className="iconmenu ofit rounded-circle overflow-hidden">
                                    <img src={pe1} alt="userpic" />
                                  </div>
                                </div>
                                <div className="flex-grow-1">
                                  <div className="d-flex justify-content-between">
                                    <h4>Username</h4>
                                    <p className="">Time ago</p>
                                  </div>
                                  <h6 className="minimsg">
                                    Amet non eiusmod ea labore amet est esse
                                    tempor cupidatat minim nulla commodo
                                    reprehenderit exercitation.
                                  </h6>
                                </div>
                              </Link>
                              <Link to="/" className="d-flex gap-3">
                                <div className="flex-shrink-0">
                                  <div className="iconmenu ofit rounded-circle overflow-hidden">
                                    <img src={pe1} alt="userpic" />
                                  </div>
                                </div>
                                <div className="flex-grow-1">
                                  <div className="d-flex justify-content-between">
                                    <h4>Username</h4>
                                    <p className="">Time ago</p>
                                  </div>
                                  <h6 className="minimsg">
                                    Amet non eiusmod ea labore amet est esse
                                    tempor cupidatat minim nulla commodo
                                    reprehenderit exercitation.
                                  </h6>
                                </div>
                              </Link>
                              <Link to="/" className="d-flex gap-3">
                                <div className="flex-shrink-0">
                                  <div className="iconmenu ofit rounded-circle overflow-hidden">
                                    <img src={pe1} alt="userpic" />
                                  </div>
                                </div>
                                <div className="flex-grow-1">
                                  <div className="d-flex justify-content-between">
                                    <h4>Username</h4>
                                    <p className="">Time ago</p>
                                  </div>
                                  <h6 className="minimsg">
                                    Amet non eiusmod ea labore amet est esse
                                    tempor cupidatat minim nulla commodo
                                    reprehenderit exercitation.
                                  </h6>
                                </div>
                              </Link>
                              <Link to="/" className="d-flex gap-3">
                                <div className="flex-shrink-0">
                                  <div className="iconmenu ofit rounded-circle overflow-hidden">
                                    <img src={pe1} alt="userpic" />
                                  </div>
                                </div>
                                <div className="flex-grow-1">
                                  <div className="d-flex justify-content-between">
                                    <h4>Username</h4>
                                    <p className="">Time ago</p>
                                  </div>
                                  <h6 className="minimsg">
                                    Amet non eiusmod ea labore amet est esse
                                    tempor cupidatat minim nulla commodo
                                    reprehenderit exercitation.
                                  </h6>
                                </div>
                              </Link>
                            </div>

                            <div className="d-block morebtn">
                              <Link to="/">View more</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <button
                        type="button"
                        className={`topmenu rounded-circle overflow-hidden p-0 ${
                          activeMenu === "menu4" ? "active" : ""
                        }`}
                        onClick={() => toggleMenu("menu4")}
                      >
                        <img
                          src={pe1}
                          alt="userp"
                          className="rounded-circle overflow-hidden"
                        />
                      </button>
                      <div
                        className="menubox"
                        style={{
                          display: activeMenu === "menu4" ? "block" : "none",
                        }}
                      >
                        <div className="d-flex flex-column gap-4 ">
                          <h3>Profile and settings</h3>
                          <div className="d-flex flex-column gap-3">
                            <Link to="/editprofile" className="d-flex gap-3">
                              <div className="flex-shrink-0">
                                <div className="iconmenu ofit rounded-circle overflow-hidden">
                                  <img src={pe1} alt="userpic" />
                                </div>
                              </div>
                              <div className="flex-grow-1">
                                <h4>Your username</h4>
                                <p>Edit your profile</p>
                              </div>
                            </Link>

                            <div className="d-block morebtn">
                              <button type="button" onClick={openPopup}>
                                UPGRADE MEMBERSHIP
                              </button>
                            </div>
                            <div className="d-flex flex-column gap-3 helpset pt-3">
                              <Link to="/" className="d-flex gap-3">
                                <div className="flex-shrink-0">
                                  <div className="iconmenu fulw">
                                    <img src={se1} alt="userpic" />
                                  </div>
                                </div>
                                <div className="flex-grow-1">
                                  <h4>Settings</h4>
                                  <p>Site and profile settings</p>
                                </div>
                              </Link>
                              <Link to="/" className="d-flex gap-3">
                                <div className="flex-shrink-0">
                                  <div className="iconmenu fulw">
                                    <img src={se3} alt="userpic" />
                                  </div>
                                </div>
                                <div className="flex-grow-1">
                                  <h4>Help and support</h4>
                                  <p>Contact us, FAQ and more</p>
                                </div>
                              </Link>
                              <Link to="/" className="d-flex gap-3">
                                <div className="flex-shrink-0">
                                  <div className="iconmenu fulw">
                                    <img src={se2} alt="userpic" />
                                  </div>
                                </div>
                                <div className="flex-grow-1">
                                  <h4>Log out</h4>
                                  <p>See you later.</p>
                                </div>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <UpgradeMembership
        isOpen={isPopupOpen}
        onClose={closePopup}
      ></UpgradeMembership>
    </>
  );
}

export default Headertwo;
