import Data from '../combogriffe.json'
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const MangaView = (props) => {
    const data = Data.Tableau
    console.log(props.lien)

    function get_url_extension( url ) {
        return url.split(/[#?]/)[0].split('.').pop().trim();
    }

    var extension = get_url_extension(props.lien);

    var newlink = data[props.ID].link
    var finallink = newlink.replace("https://frscan.cc", "https://frscan.cc/uploads" )
    console.log(props)


    if(data[props.ID].pagesPatern[props.chapterKey].includes("001")){
        if(props.currentPage <= 9 && props.currentPage <= 99)  {
            props.setLien(finallink + "/chapters/" + props.chapitreID + "/" + "00" + props.currentPage.toString() + "." + extension)
        }
        else if(props.currentPage > 9 && props.currentPage <= 99) {
            props.setLien(finallink + "/chapters/" + props.chapitreID + "/0" + props.currentPage.toString() + "."+ extension)
        }
        else if(props.currentPage > 99) {
            props.setLien(finallink + "/chapters/" + props.chapitreID + "/" + props.currentPage.toString() + "."+ extension)
        }
    }
    else{
        if( props.currentPage <= 9){
            props.setLien(finallink + "/chapters/" + props.chapitreID + "/" + "0" + props.currentPage.toString() + "." + extension)
        }
        else{
            props.setLien(finallink + "/chapters/" + props.chapitreID + "/" + props.currentPage.toString() + "."+ extension)
        }
    }

   

    
  
   
    const chapterID = []
    const ChaptersID = () => {
        for( let z = 0; z <= data.length-1; z++){
            const chapterzID = Data.Tableau[z].ChapterId
            chapterID.push(chapterzID)
        }
    return chapterID
    }    
  

    const PageIncrement = (currentPage) => {
        ChaptersID()

        console.log(data[props.ID])
        console.log(chapterID)

        console.log( data[props.ID].pagePerChapter[props.chapterKey])
        if(currentPage < (data[props.ID].pagePerChapter[props.chapterKey])){
            props.setCurrentPage(currentPage + 1)
        }
        else{
            if((props.chapterKey < data[props.ID].nbrChapter) && (props.chapterKey > 0)){
                props.setCurrentPage(1)
                props.setChapterKey(props.chapterKey - 1)
                props.setChapterId(chapterID[props.ID][(props.chapterKey-1)])
                console.log("hla")
            }
            else{
                props.setCurrentPage(1)
                alert("Manga terminé")
            }
        }
    }


    return (
        <div>
                {props.currentPage} - 
                 {props.chapitreID}
                <img  onClick={() => { PageIncrement(props.currentPage)}} style={{width: "50%"}} src={props.lien} />

        </div>
    );
};

export default MangaView;