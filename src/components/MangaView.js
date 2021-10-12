import Data from '../combogriffe.json'
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


const MangaView = (props) => {
    const data = Data.Tableau
    console.log(props.lien)
    console.log(data[138])
    window.scroll(0, 70)

    function get_url_extension( url ) {
        return url.split(/[#?]/)[0].split('.').pop().trim();
    }

    var extension = get_url_extension(data[props.ID].pagesPatern[props.chapterKey]);
    console.log(props)
    console.log(data[props.ID].pagesPatern[props.currentPage])

    var newlink = data[props.ID].link
    var finallink = newlink.replace("https://frscan.cc", "https://frscan.cc/uploads" )
    console.log(props)

    const DefineLink = (e) => {
        console.log(e)
    if(e !== undefined){
        var tooglerTypes = props.lien.substring(0, props.lien.length - 3);
        var tooglerTyp = tooglerTypes.toString() + "png"
        var tooglerType = tooglerTyp.toString()

        props.setLien(tooglerType)
    }  
    else{
        if(data[props.ID].pagesPatern[props.chapterKey].includes("001")){
            if((props.currentPage) <= 9 && (props.currentPage) <= 99)  {
                props.setLien(finallink + "/chapters/" + props.chapitreID + "/" + "00" + (props.currentPage+1).toString() + "." + extension)
            }
            else if((props.currentPage) > 9 && (props.currentPage) <= 99) {
                props.setLien(finallink + "/chapters/" + props.chapitreID + "/0" + (props.currentPage+1).toString() + "."+ extension)
            }
            else if((props.currentPage) > 99) {
                props.setLien(finallink + "/chapters/" + props.chapitreID + "/" + (props.currentPage+1).toString() + "."+ extension)
            }
        }
        else{
            if((props.currentPage) <= 9){
                props.setLien(finallink + "/chapters/" + props.chapitreID + "/" + "0" + (props.currentPage+1).toString() + "." + extension)
            }
            else{
                props.setLien(finallink + "/chapters/" + props.chapitreID + "/" + (props.currentPage+1).toString() + "."+ extension)
            }
        }
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
        DefineLink()


        console.log(data[props.ID])
        console.log(chapterID)

        console.log( data[props.ID].pagePerChapter[props.chapterKey])
        if((currentPage+1) <= (data[props.ID].pagePerChapter[props.chapterKey]-1)){
            props.setCurrentPage(currentPage + 1)
        }
        else{
            if((props.chapterKey < data[props.ID].nbrChapter) && (props.chapterKey > 0)){
                props.setChapterKey(props.chapterKey - 1)
                props.setChapterId(chapterID[props.ID][(props.chapterKey-1)])
                props.setCurrentPage(0)
            }
            else{
                props.setCurrentPage(1)
                alert("Manga terminé")
            }
        }
        DefineLink()

    }



    



    return (
        <div>
             <nav className="fixed-nav" >
                <ul>
                    <li style={{listStyle:"none"}} >
                    <Link className="mangalist-link" to="/manga-tendances">Tendances</Link>
                    <p style={{color: "white"}}>{props.name} - {props.currentPage}/{data[props.ID].pagePerChapter[props.chapterKey]} - {props.chapitreID} -</p>
                    </li>
                </ul>
            </nav>
            <div className="Pagebox">
                    <img onError={(e)=> {DefineLink(e)}} onClick={() => { PageIncrement(props.currentPage)}} className="Page" src={props.lien} />
            </div>
        </div>
    );
};

export default MangaView;