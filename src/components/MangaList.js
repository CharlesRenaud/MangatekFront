import React from 'react';
import Data from '../combogriffe.json'
import {useState} from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  
const MangaList = (props) => {
    const data = Data.Tableau
    const [searchTerm, setsearchTerm] = useState("")
    const defineMangaID = (identifiant) => {
        props.setMangaID(identifiant)
        console.log(props.ID)
        props.setMangaName(data[identifiant].name)
    }


    return (
        <div className="mangalist-box">
            <nav className="sticky-nav" >
                <ul>
                    <li style={{listStyle:"none"}} >
                    <Link className="mangalist-link" to="/manga-tendances">Tendances</Link>
                    <input className="recherche-box-input" type="text" placeholder="Recherche..." onChange={(event)=>{setsearchTerm(event.target.value)}} />
                    </li>
                </ul>
            </nav>
            <div className="manga-box">
                {
                data.filter((val) => {
                    if(searchTerm ==""){
                        return val
                    } else if(val.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())) {
                        return val
                    }
                }).map((ids, key) =>
                <div className="manga-card">
                    <Link to="manga-links" onClick={()=>defineMangaID(ids.identifiant)}>
                        <p>{ids.name.slice(0, 30).concat("...")}</p>
                        <img src={ids.cover}/>
                    </Link>
                    <div>Chapitres : {ids.nbrChapter}</div>
                </div>
                )
            }
            </div>
        </div>
    );
};

export default MangaList;