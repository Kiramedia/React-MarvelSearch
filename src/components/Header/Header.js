import React from "react";
import "./Header.css";
import Logo from "../Logo/Logo";
import Searcher from "../Searcher/Searcher";

const Header = ({srcLogo}) => {
    return(<div className="o-header-container">
        <Logo srcLogo={srcLogo}></Logo>
        <Searcher/>
    </div>);
};

export default Header;