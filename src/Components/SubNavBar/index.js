import React from "react";
import "./styles.scss";
import { useNavigate } from "react-router-dom";

import { RouteStrings } from "../../Routes/RouteStrings";
import { Images } from "../../Assets/imagesStrings";

export const SubNavBar = () => {
  const navigate = useNavigate();

  const gotoSpaceArticles = () => {
    navigate(RouteStrings.spaceHome);
  };

  const gotoSpaceAbout = () => {
    navigate(RouteStrings.spaceAbout);
  };

  return (
    <div>
      <nav class="navbar navbar-expand-lg _subnav">
        {/* <a class="navbar-brand" href="#">
          Navbar
        </a> */}
        <button
          class="navbar-toggler _navtoggle"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          {/* <span class="navbar-toggler-icon"></span> */}
          <img src={Images.menu} alt="" className="menuIcon" />
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                Space Exploration
              </a>
              <div class="dropdown-menu">
                <a class="dropdown-item" onClick={gotoSpaceArticles}>
                  All Categories
                </a>
                <a class="dropdown-item" onClick={gotoSpaceAbout}>
                  About
                </a>
              </div>
            </li>

            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown link
              </a>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#">
                  Action
                </a>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                More
              </a>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#">
                  Action
                </a>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
