import React from 'react';
import { Route, Switch } from 'react-router-dom';

import App from './App';
import Home from './pages/Home/Home';
import Search from './pages/Search/Search';
import CharacterInfo from './pages/CharacterInfo/CharacterInfo';

const Routes = () => {
    return (
        <App>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/home" component={Home}/>
                <Route exact path="/search" component={Search}/>
                <Route exact path="/character/:id" component={CharacterInfo}/>
            </Switch>
        </App>
    );
};

export default Routes;