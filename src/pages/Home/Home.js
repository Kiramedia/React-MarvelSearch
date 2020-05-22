import React from "react";
import "./Home.css";
import Searcher from "../../components/Searcher/Searcher";
import Logo from "../../components/Logo/Logo";

class Home extends React.Component {

    render() {
        return (
            <div className="o-home-container">
                <div className="back-page">
                    <img src="/resources/img/Background.png" alt=""></img>
                </div>
                <Logo srcLogo="marvel-logo.png" />
                <Searcher />
            </div>
        )
    };
}

export default Home;