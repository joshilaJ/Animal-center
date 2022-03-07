import React, { Fragment } from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <Fragment>
      <nav className="footer">
        <a href="/home">Home</a>
        <a href="/contact">contact</a>
        <a href="/about">about</a>
        <div className="footer">
          <p style={{color:'white'}}>CONTACT/Phone Number:981133234</p>
          <p style={{color:'white'}}>Opening Time: 10A.M. to 4P.M.</p>
          <p style={{color:'white'}}>Feel Free to Visit Us Sunday to Friday</p>
        </div>
      </nav>
    </Fragment>
  );
};

export default Footer;
