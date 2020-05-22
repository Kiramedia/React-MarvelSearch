import React from "react";
import "./CharacterInfo.css";
import { withRouter } from 'react-router-dom';
import { apiRequest } from '../../components/Functions/Funtions';
import Header from "../../components/Header/Header";
import CharacterProfile from "../../components/CharacterProfile/CharacterProfile";
import SelectBox from "../../components/SelectBox/SelectBox";
import Card from "../../components/Card/Card";

const selectOptions = {data:[{id:1, value:"comics"}, {id:2, value:"series"}, {id:3, value:"events"}]}

class CharacterInfo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: props.location.pathname.replace("/character/", ""),
            history: props.history,
            dataHero: [],
            data: []
        };
    };

    componentDidMount() {
        apiRequest(this, this.state.id, "character");
        apiRequest(this, this.state.id, selectOptions.data[0].value);
    }

    drawProfile = () => {
        if (this.state.dataHero.id) {
            return <CharacterProfile srcImage={`${this.state.dataHero.thumbnail.path}.${this.state.dataHero.thumbnail.extension}`}
                heroeName={this.state.dataHero.name} description={this.state.dataHero.description} key={this.state.dataHero.id} />
        }
    }

    onSelectChange = (value) => {
        apiRequest(this, this.state.id, value);
    }

    render() {
        return (
            <div className="o-character-container">
                <Header srcLogo="marvel-logo-mini.png" />
                <div className="o-content-container">
                    {
                        this.drawProfile()
                    }
                    <SelectBox paramFromChild={this.onSelectChange} data={selectOptions} text="Select what type of data to show: "/>
                    <div className="o-cards-container">
                        {
                            this.state.data.map((heroeData) => {
                                return (
                                    <Card srcImage={`${heroeData.thumbnail.path}.${heroeData.thumbnail.extension}`} 
                                    heroeName={heroeData.title} id={heroeData.id} key={heroeData.id}/>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    };
}

export default withRouter(CharacterInfo);