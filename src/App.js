import './App.css';
import Data from './combogriffe.json'
import MangaList from './components/MangaList';
import MangaView from'./components/MangaView';
import {useState} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const data = Data.Tableau
  console.log(data)

  const [mangaID, setMangaID] = useState()

  let props = {
    setMangaID: setMangaID,
    ID: mangaID
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
            <MangaView {...props}/>
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
