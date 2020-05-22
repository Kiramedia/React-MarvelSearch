import React from "react";
import "./Logo.css";
import { Link } from "react-router-dom";

const Logo = ({srcLogo}) => {
    return(<Link to="/" className="o-logo-container"><img className="o-logo" src= {`/resources/img/${srcLogo}`} alt="Logo de Marvel"/></Link>);
};

export default Logo;