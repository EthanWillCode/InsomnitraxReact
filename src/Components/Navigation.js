import React from 'react';
import Link from 'react-router-dom'

export default function Navigation(props){

    return (
        <nav>
            <Link to="/">Insomnitrax</Link>
            <Link to="/music">Music</Link>
            <Link to="/aboutUs">About Us</Link>
        </nav>
    )
}