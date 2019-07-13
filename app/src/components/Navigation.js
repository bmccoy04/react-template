import React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <Router>
                <Link to="/">
                    Home
            </Link>
                <Link to="/form">
                    Form
            </Link>
            </Router>
        </div>
    )
}

export default Navigation;