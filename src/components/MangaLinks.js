import React from 'react';
import Data from '../combogriffe.json'
import {useState} from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
const MangaLinks = (props) => {
    const data = Data.Tableau
    const store = []
    const links = []
    const chapterID = []
    var nbrChapitre


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
        <div>
            {
                links.map((numero, key) =>
                    <Link onClick={() => Yay(key)}  to="manga-view">
                       Chapitre : {chapterID[props.ID][numero]}
                    </Link>    
                )
            }
        </div>
    );
};

export default MangaLinks;