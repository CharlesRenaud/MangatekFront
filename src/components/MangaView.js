import Data from '../combogriffe.json'
import React from 'react';



const MangaView = (props) => {
    const data = Data.Tableau
    console.log(props.lien)
    console.log(data[138])

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
            if((props.currentPage+1) <= 9 && (props.currentPage+1) <= 99)  {
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
        if((currentPage+1) < (data[props.ID].pagePerChapter[props.chapterKey])){
            props.setCurrentPage(currentPage + 1)
            DefineLink()
        }
        else{
            if((props.chapterKey < data[props.ID].nbrChapter) && (props.chapterKey > 0)){
                props.setCurrentPage(1)
                props.setChapterKey(props.chapterKey - 1)
                props.setChapterId(chapterID[props.ID][(props.chapterKey-1)])
                console.log("hla")
                DefineLink()
            }
            else{
                props.setCurrentPage(1)
                alert("Manga terminé")
                DefineLink()

            }
        }
    }



    



    return (
        <div>
                {props.currentPage} - 
                {props.chapitreID}
                <img onError={(e)=> {DefineLink(e)}} onClick={() => { PageIncrement(props.currentPage)}} style={{width: "50%"}} src={props.lien} />

        </div>
    );
};

export default MangaView;