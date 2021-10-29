import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerElements">
        <h3 className="footerHeading">Contact:</h3>
        <p className="footerItems">
          {" "}
          <i className="fa fa-phone"></i> 07012345678
        </p>
        <p className="footerItems">
          {" "}
          <i
            className="fa fa-envelope	
"
          ></i>{" "}
          customercare@gmail.com
        </p>
      </div>
    </div>
  );
};

export default Footer;
