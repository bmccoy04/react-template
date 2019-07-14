import React from 'react';
import {  Route, Switch} from 'react-router-dom';

import Home from './Home';
import Form from './Form';

const Body = () => {
    return (
        <div>
            <Switch> 
                <Route exact path="/" component={Home}></Route>
                <Route  path="/form" component={Form}></Route>
            </Switch>
        </div>
    )
}

export default Body;