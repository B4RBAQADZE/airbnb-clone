import React, { useState } from "react";
import logo from "../../../assets/logo.png";
import profile from "../../../assets/profile.svg";
import language from "../../../assets/language.svg";
import search from "../../../assets/search.svg";
import "./NavBar.scss";

const NavBar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  return (
    <div className="navbardefault" style={{ height: searchOpen ? 200 : 80 }}>
      <div
        id="NavBar"
        className="NavBar"
        style={{
          alignItems: searchOpen ? "start" : "center",
          marginTop: searchOpen ? 24 : 0,
        }}
      >
        <img className="logo" src={logo} alt="logo" />
        <div
          className="searchOpened"
          style={{
            display: searchOpen ? "flex" : "none",
            marginLeft: searchOpen ? 120 : 0,
          }}
        >
          <h2>stays</h2>
          <h2>experiences</h2>
          <h2>online experiences</h2>
        </div>
        <div
          onClick={() => setSearchOpen(true)}
          className="searchEngine"
          style={{ display: searchOpen ? "none" : "flex" }}
        >
          <div className="engine">
            <h2>Anywhere</h2>
            <div className="line"></div>
            <h2>Anyweek</h2>
            <div className="line"></div>
            <h2 className="fontBold">Add guests</h2>
          </div>
          <div className="search">
            <img src={search} alt="search" />
          </div>
        </div>
        <div className="profileLogin">
          <a className="addhome" href="/">
            Airbnb your home
          </a>
          <img className="language" src={language} alt="language" />
          <div className="profileEnter">
            <i className="fa-solid fa-bars"></i>
            <img className="profile" src={profile} alt="profile" />
          </div>
        </div>
      </div>
      <div
        style={{ display: searchOpen ? "flex" : "none" }}
        className="gaxsniliSearch"
      >
        <div className="gsearch">
          <div className="firstSearch">
            <div>
              <h2>where</h2>
              <input type="text" placeholder="search Destinations" />
            </div>
            <div style={{ height: 40 }} className="line"></div>
          </div>
          <div className="firstSearch">
            <div>
              <h2>check in</h2>
              <input type="text" placeholder="add Dates" />
            </div>
            <div style={{ height: 40 }} className="line"></div>
          </div>
          <div className="firstSearch">
            <div>
              <h2>check out</h2>
              <input type="text" placeholder="add Dates" />
            </div>
            <div style={{ height: 40 }} className="line"></div>
          </div>
          <div className="firstSearch">
            <div>
              <h2>who</h2>
              <input type="text" placeholder="add guests" />
            </div>
          </div>
        </div>
        <div className="searchBtn">
          <img src={search} alt="search1" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
