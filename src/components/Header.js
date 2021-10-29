import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="overlay"></div>
      <div className="headerContent">
        <button variant="contained" className="topButton">
          Register user
        </button>
        <div className="topHeading">
          Register to become a chef in your neighborhood
        </div>
      </div>
    </div>
  );
};

export default Header;
