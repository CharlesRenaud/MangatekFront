const TryPng = (e) => {
    console.log(e)
if(e == undefined){
        if( props.currentPage <= 9){
            props.setLien(finallink + "/chapters/" + props.chapitreID + "/" + "0" + props.currentPage.toString() + ".jpg")
        }
        else{
           props.setLien(finallink + "/chapters/" + props.chapitreID + "/" + props.currentPage.toString() + ".jpg")
}       }
else{
    if( props.currentPage <= 9){
        props.setLien(finallink + "/chapters/" + props.chapitreID + "/" + "0" + props.currentPage.toString() + ".png")

    }
    else{
        props.setLien(finallink + "/chapters/" + props.chapitreID + "/" + props.currentPage.toString() + ".png")
    }
}
}

var links = ""

console.log(props.chapterKey + "Chapter key")


var newlink = infos[props.ID].link
var finallink = newlink.replace("https://frscan.cc", "https://frscan.cc/uploads" )

console.log(props.lien)












if(props.ID !== 138){
    if( props.currentPage <= 9){
        props.setLien(finallink + "/chapters/" + props.chapitreID + "/" + "0" + props.currentPage.toString() + "." + extension)
    }
    else{
        props.setLien(finallink + "/chapters/" + props.chapitreID + "/" + props.currentPage.toString() + "."+ extension)
    }
}
else{
    if(props.chapitreID < 357) {
        if(props.ID <= 9){
            if(props.currentPage <= 99){
                if(props.currentPage <= 9){
                    props.setLien(finallink + "/chapters/000" + props.chapitreID + "/" + "00" + props.currentPage.toString() + "." + extension)
                }
                else{
                    props.setLien(finallink + "/chapters/000" + props.chapitreID + "/" + "0" + props.currentPage.toString() + "."+ extension)
                }
            }
            else{
                props.setLien(finallink + "/chapters/000" + props.chapitreID + "/"  + props.currentPage.toString() + "."+ extension)
            }
        }
        else{
            if(props.currentPage <= 99){
                if( props.currentPage <= 9){
                    props.setLien(finallink + "/chapters/00" + props.chapitreID + "/" + "00" + props.currentPage.toString() + "." + extension)
                }
                else{
                    props.setLien(finallink + "/chapters/00" + props.chapitreID + "/" + "0" + props.currentPage.toString() + "."+ extension)
                }
            }
            else{
                props.setLien(finallink + "/chapters/00" + props.chapitreID + "/"  + props.currentPage.toString() + "."+ extension)
            }
        }
    }
    else{
        console.log(extension)
        if(extension === "png"){
            if( props.currentPage <= 9){
                props.setLien(finallink + "/chapters/" + props.chapitreID + "/" + "00" + props.currentPage.toString() + "." + extension)
            }
            else{
                props.setLien(finallink + "/chapters/" + props.chapitreID + "/0" + props.currentPage.toString() + "."+ extension)
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
    }
}
