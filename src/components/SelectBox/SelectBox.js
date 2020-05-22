import React from "react";
import "./SelectBox.css";

class SelectBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            select: "",
            data: this.props.data.data,
            text: this.props.text
        }
    }

    onSelectChange = (event) => {
        this.setState({ select: event.target.value });
        this.props.paramFromChild(event.target.value);
    }

    render() {
        return (
            <div className="o-select-container">
                <h3>{this.state.text}</h3>
                <select onChange={this.onSelectChange}>
                    {
                        this.state.data.map((options) => {
                            return (<option value={options.value} key={options.id}>{options.value}</option>)
                        })
                    }
                </select>
            </div>
        )
    };
}

export default SelectBox;