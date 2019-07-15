import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <NavLink to="/">
                Home
            </NavLink> 
            &nbsp; | &nbsp; 
            <NavLink to="/form">
                Form
            </NavLink>
        </div>
    )
}

export default Navigation;