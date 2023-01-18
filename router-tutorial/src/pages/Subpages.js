import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Subpages = () => {
    const activeStyle = {
        backgroundColor: 'pink',
        fontSize: 24
    }
    return (
        <div>
            <ul>
                <li><NavLink to="/subpages/1"
                style={({isActive})=> isActive ? activeStyle : undefined}>서브페이지1</NavLink></li>
                <li><NavLink to="/subpages/2"
                style={({isActive})=> isActive ? activeStyle : undefined}>서브페이지2</NavLink></li>
                <li><NavLink to="/subpages/3"
                style={({isActive})=> isActive ? activeStyle : undefined}>서브페이지3</NavLink></li>
            </ul>
            <Outlet/>
        </div>
    );
};

export default Subpages;