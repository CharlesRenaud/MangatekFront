import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


const MangaTrend = () => {
   

    return (
        <div>
            <nav className="sticky-nav" >
                <ul>
                    <li style={{listStyle:"none"}} >
                    <Link className="mangalist-link" to="/">Mangas</Link>

                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default MangaTrend;

