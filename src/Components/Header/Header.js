import React, { Fragment, useState } from "react";
import classes from "./Header.module.css";
import SubHeader from "./SubHeader";
import { Link } from "react-router-dom";
import Button from "../UI/Button";
const Header = ({onModalopen}) => {

 return (
    <Fragment>
      <div className={classes.sticky}>
        <div className={classes.wrapper}>
          <div className={classes.item}>
            <h1 className={classes.textSize} style={{ color: "red" }}>
              Animal Center
            </h1>
          </div>
          <div className="classes.item">
            <nav>
              <Link to="/">Home </Link> |
              <Link to="/about">
                <b> About</b>
              </Link>{" "}
              |<Link to="/contact"> Contact us </Link> |
              <Link to="/otherCentre">other center</Link>
              <Button onClick={onModalopen}>Donate</Button>
            
            </nav>
          </div>
          {/* <form >
        <input type='text' placeholder='search' />
        <button>search Domain</button>
        </form> */}
        </div>
      </div>
      <SubHeader></SubHeader>
    </Fragment>
  );
};

export default Header;
