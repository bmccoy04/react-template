import React from 'react';
import { Link, Route, BrowserRouter as Router} from 'react-router-dom';

import Home from './Home';
import Form from './Form';

const Body = () => {
    return (
        <div>
            <Router>
                <Route exact path="/" component={Home}></Route>
                <Route  path="/form" component={Form}></Route>
            </Router>
        </div>
    )
}

export default Body;