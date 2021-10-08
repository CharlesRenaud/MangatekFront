import React from 'react';
import Data from '../combogriffe.json'

const MangaView = (props) => {
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

  
     
    return (
        <div>
            {
                links.map((numero) =>
                    <div>
                       Chapitre : {chapterID[props.ID][numero]}
                    </div>    
                )
            }
        </div>
    );
};

export default MangaView;