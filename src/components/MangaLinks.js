import React from 'react';
import Data from '../combogriffe.json'
import {useState} from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory
  } from "react-router-dom";

const MangaLinks = (props) => {
    const data = Data.Tableau
    const store = []
    const links = []
    const chapterID = []
    var nbrChapitre
    window.scroll(0, 0)

    const history = useHistory();
    function handleChange(value) {
        Yay(value)
        history.push(`/manga-view`);
      }


    const NombreChapitres = () => {
        for( let i = 0; i <= data.length-1; i++){
            const nbrChapters = Data.Tableau[i].nbrChapter
            store.push(nbrChapters)
        }
        return  nbrChapitre = store[props.ID]
    }
    NombreChapitres()

    const ChaptersID = () => {
        for( let z = 0; z <= data.length-1; z++){
            const chapterzID = Data.Tableau[z].ChapterId
            chapterID.push(chapterzID)
        }
    console.log(chapterID)
    }
    ChaptersID()

    const GenerateLinks = () => {
        for (let u = 0; u < nbrChapitre; u ++) {
            links.push(u)
        }
    }
    GenerateLinks()

    console.log(props)

    const Yay = (key) => {
        console.log(data[props.ID].urlPerChapter[key])
        props.setChapterKey(key)
        props.setChapterId(chapterID[props.ID][key]);
        props.setCurrentPage(1)
        props.setLien(data[props.ID].urlPerChapter[key])
        console.log(chapterID[props.ID][key])
        console.log(props.lien)
    }
     
    return (
        <div className="chapter-box">
            <nav className="sticky-nav" >
                <ul>
                    <li style={{listStyle:"none"}} >
                    <Link className="mangalist-link" to="/manga-tendances">:Tendances</Link>
                    </li>
                    <li>
                    <Link className="mangalist-link" to="/">:Mangas</Link>
                    </li>
                </ul>
            </nav>
            <div className="manga-presentation-box">
                <div className="manga-presentation-box-top">
                    <p className="manga-name">{props.name} - </p>
                    <p className="manga-description">{data[props.ID].description}</p>
                    <div class="selector-box">
                        <select className="select-chapter" onChange={event => handleChange(event.target.value)} className="selector">
                        <option value="">Choisir un Chapitre</option>
                        {
                            links.map((numero, key ) =>
                            <option value={numero}>{chapterID[props.ID][numero]}</option>
                            )
                        }
                        </select>
                    </div>
                </div>
                <div className="manga-presentation-box-bottom">
                    <img className="cover-manga" src={data[props.ID].cover} />
                </div>
            </div>
            
            <p style={{paddingLeft: "2rem" }} className="manga-name">Liste des Chapitres : </p>
            <div className="chapter-flex">
                {
                    links.map((numero, key) =>
                        <Link className="list-chapters" onClick={() => Yay(key)}  to="manga-view">
                            Chapitre : {chapterID[props.ID][numero]}
                        </Link>    
                    )
                }
            </div>
        </div>    
    );
};

export default MangaLinks;