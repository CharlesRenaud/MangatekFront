import Data from '../combogriffe.json'
import React,{useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory
  } from "react-router-dom";


const MangaView = (props) => {

    const data = Data.Tableau
    window.scroll(0, 120)
    function get_url_extension( url ) {
        return url.split(/[#?]/)[0].split('.').pop().trim();
    }

    var extension = get_url_extension(data[props.ID].pagesPatern[props.chapterKey]);
    console.log(props)
    console.log(data[props.ID].pagesPatern[props.currentPage])

    var newlink = data[props.ID].link
    var finallink = newlink.replace("https://frscan.cc", "https://frscan.cc/uploads" )
    console.log(props)


    var errors = false
    
    const DefineLink = (e) => {   
        console.log(e)
    if(errors === false){
        if(e !== undefined){
            var tooglerTypes = props.lien.substring(0, props.lien.length - 3);
            var tooglerTyp = tooglerTypes.toString() + "png"
            var tooglerType = tooglerTyp.toString()

            props.setLien(tooglerType)
        }  
        else{
            errors = true    
            if(data[props.ID].pagesPatern[props.chapterKey].includes("001")){
                if((props.currentPage +1) <= 9 && (props.currentPage +1) <= 99)  {
                    props.setLien(finallink + "/chapters/" + props.chapitreID + "/" + "00" + (props.currentPage+1).toString() + "." + extension)
                }
                else if((props.currentPage+1) > 9 && (props.currentPage+1) <= 99) {
                    props.setLien(finallink + "/chapters/" + props.chapitreID + "/0" + (props.currentPage+1).toString() + "."+ extension)

                }
                else if((props.currentPage+1) > 99) {
                    props.setLien(finallink + "/chapters/" + props.chapitreID + "/" + (props.currentPage+1).toString() + "."+ extension)
                }
            }
            else{
                if((props.currentPage+1) <= 9){
                    props.setLien(finallink + "/chapters/" + props.chapitreID + "/" + "0" + (props.currentPage+1).toString() + "." + extension)
                }
                else{
                    props.setLien(finallink + "/chapters/" + props.chapitreID + "/" + (props.currentPage+1).toString() + "."+ extension)
                }
            }
        }
    }else{
        errors = false
    }  
}


DefineLink()


    
  
   
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

    }


    const store = []
    const links = []
    var nbrChapitre

    const history = useHistory();
    function handleChange(value) {
        Yay(value)
      }


    const NombreChapitres = () => {
        for( let i = 0; i <= data.length-1; i++){
            const nbrChapters = Data.Tableau[i].nbrChapter
            store.push(nbrChapters)
        }
        return  nbrChapitre = store[props.ID]
    }
    NombreChapitres()

    const GenerateLinks = () => {
        for (let u = 1; u < nbrChapitre; u ++) {
            links.push(u)
        }
    }
    GenerateLinks()

    console.log(props)

    const Yay = (key) => {

        props.setCurrentPage(parseInt(key))

    }
    

    var nbrPages = []

    const ListPageGenerator = () => {


        var longueur = data[props.ID].pagePerChapter[props.chapterKey]
        for(let i = 1; i < longueur+1; i++){
            nbrPages.push(i)
        }
        console.log(nbrPages)

    }
    ListPageGenerator()
   return (
        <div>
             <nav className="fixed-nav" >
                <ul>
                    <li style={{listStyle:"none"}} >
                        <Link className="mangalist-link" to="/manga-tendances">Tendances</Link>
                    </li>
                    <li>
                        <Link className="mangalist-link" to="/">Mangas</Link>
                    </li>
                    <li>
                        <p className="manga-infos" style={{color: "white"}}>{props.name}</p>
                    </li>
                    <li>
                        <p className="manga-infos" style={{color: "lightblue"}}>Page : {props.currentPage+1} / {data[props.ID].pagePerChapter[props.chapterKey]} - Chapitre : {props.chapitreID}</p> 
                    </li>
                    <li>
                    <div class="selector-box">
                        <select className="select-chapter" onChange={event => handleChange(event.target.value)} className="selector">
                        <option value="">Choisir une Page</option>
                        {
                            nbrPages.map((numero, key ) =>
                            <option value={key}>{numero}</option>
                            )
                        }
                        </select>
                    </div>
                    </li>
                </ul>
            </nav>
            <div className="Pagebox">
                    <img onError={(e)=> {DefineLink(e); errors=true}} onClick={() => { PageIncrement(props.currentPage)}} className="Page" src={props.lien} />
            </div>
        </div>
    );
};

export default MangaView;