import './App.css';
import axios from 'axios'
import {useState, useEffect} from 'react'
import Create from './components/CreateComponent'
import Home from './components/HomeComponent'
import ComicNav from './components/NavComponent'

const App = () => {

  let [showNewForm, setNewForm] = useState(false)
  let [showComics, setComics] = useState(true)

  return (
    <div className="parent">
      <div>
        <ComicNav setComics={setComics} showNewForm={showNewForm} setNewForm={setNewForm} showComics={showComics}/> 
      </div>
      <div>
      {showNewForm ?
        <Create/> :
        null}
      </div>
      <div className="home-container">
        {showComics ?
        <Home/>
          :
        null}
      </div>
    </div>
  )
}

export default App;
