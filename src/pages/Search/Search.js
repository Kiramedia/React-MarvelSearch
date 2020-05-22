import React from "react";
import "./Search.css";
import { withRouter } from 'react-router-dom';
import { decodeSearch, apiRequest } from '../../components/Functions/Funtions';
import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";

class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            search: decodeSearch(props.location.search),
            history: props.history,
            data: []
        };
    };

    render() {
        return (
            <div className="o-search">
                <Header srcLogo="marvel-logo-mini.png" />
                <div className="o-content-container">
                    <h2>{this.state.data.length} results found for {this.state.search}</h2>
                    <div className="o-cards-container">
                        {
                            this.state.data.map((heroeData) => {
                                return (
                                    <Card srcImage={`${heroeData.thumbnail.path}.${heroeData.thumbnail.extension}`} 
                                    heroeName={heroeData.name} id={heroeData.id} key={heroeData.id}/>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    };

    componentDidMount() {
        apiRequest(this, this.state.search);
    }
}

export default withRouter(Search);