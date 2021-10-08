import React from 'react';
import Data from '../combogriffe.json'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  
const MangaList = (props) => {
    const data = Data.Tableau
    const defineMangaID = (id) => {
        props.setMangaID(id)
    }
    console.log(props)

    return (
        <div className="App">
        {
            data.map((id, key) =>
            <div style={{padding : "5rem"}}> 
                <Link to="manga-view" onClick={()=>defineMangaID(key)}>{id.name}</Link>
                <div>{id.nbrChapter}</div>
            </div>
            )
        }
        </div>
    );
};

export default MangaList;