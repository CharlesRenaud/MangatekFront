import './App.css';
import Data from './combogriffe.json'
import MangaList from './components/MangaList';
import MangaLinks from './components/MangaLinks';
import MangaView from'./components/MangaView';
import {useState} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App = () => {
  const data = Data.Tableau
  console.log(data)

  const [mangaID, setMangaID] = useState()
  const [chaptrerId, setChapterId] = useState()
  const [mangaName, setMangaName] = useState()
  const [currentPage, setCurrentPage] = useState(1)
  const [chapterKey, setChapterKey] = useState()
  const [lien, setLien] = useState()


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


  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">MangaList</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
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
