import './App.css';
import Data from './combogriffe.json'
import MangaList from './components/MangaList';
import MangaLinks from './components/MangaLinks';
import MangaView from'./components/MangaView';
import MangaTrend from './components/MangaTrend';
import {useState, useEffect} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";


const App = () => {
  

  const data = Data.Tableau
  console.log(data)

  const [mangaID, setMangaID] = useState(0)
  const [chaptrerId, setChapterId] = useState(0)
  const [mangaName, setMangaName] = useState(":Rebirth")
  const [currentPage, setCurrentPage] = useState(1)
  const [chapterKey, setChapterKey] = useState(0)
  const [lien, setLien] = useState("//frscan.cc/uploads/manga/rebirth/chapters/0/01.jpg ")


  let props = {
    setMangaID: setMangaID,
    setChapterId: setChapterId,
    setMangaName: setMangaName,
    setCurrentPage: setCurrentPage,
    setChapterKey: setChapterKey,
    setLien: setLien,
    ID: mangaID,
    chapitreID: chaptrerId,
    name: mangaName,
    currentPage: currentPage,
    chapterKey: chapterKey,
    lien: lien,
  }

  const history = useHistory()

  useEffect(() => {
    window.addEventListener("beforeunload", alertUser);
    return () => {
      window.removeEventListener("beforeunload", alertUser);
    };
  }, []);
  const alertUser = (e) => {
    e.preventDefault();
    e.returnValue = "";
  };
  

 
                   
  return (
    <Router >
      <div >
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/manga-tendances">
            <MangaTrend {...props} />
          </Route>
          <Route path="/manga-view">
            <MangaView {...props} />
          </Route>
          <Route path="/manga-links">
            <MangaLinks {...props}/>
          </Route>
          <Route path="/">
            <MangaList {...props} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
