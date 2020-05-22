import React from "react";
import "./Searcher.css";
import { withRouter} from 'react-router-dom';

class Searcher extends React.Component {
    constructor(props) {
        super(props);
        this.state = { history: props.history, location: props.location };
    };

    render() {
        return (
            <form className="o-searcher" onSubmit={this.onSubmit}>
                <input className="o-searcher-input" onChange={this.onHandleChange} type="text" name="query" placeholder="Search marvel character" autoComplete="on" required />
                <button className="o-searcher-button" type="submit"><img src="/resources/img/search.png" alt="" /></button>
            </form>
        );
    };

    onHandleChange = (event) =>{
        this.setState({heroeInput: event.target.value});
    }

    onSubmit = (event) => {
        if (this.state.location.pathname !== "/search") {
            event.preventDefault();
            this.state.history.push({
                pathname: '/search',
                search: '?query=' + this.state.heroeInput,
                state: { some: 'state' }
            });
        }else{
            this.state.history.push("/search");
        }
    }
}

export default withRouter(Searcher);