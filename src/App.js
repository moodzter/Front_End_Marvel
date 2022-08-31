import './App.css';
import axios from 'axios'
import {useState, useEffect} from 'react'
import Create from './components/CreateComponent'
import Home from './components/HomeComponent'
import ComicNav from './components/NavComponent'
import ShowComic from './components/ShowComponent'

const App = () => {

  let [showNewForm, setNewForm] = useState(false)
  let [showComics, setComics] = useState(true)
  let [showId, setShowId]= useState(false)

  const [cart, setCart]= useState(0)




  return (
    <div className="parent">
      <div>
        <ComicNav cart={cart} setCart={setCart} setComics={setComics} showNewForm={showNewForm} setNewForm={setNewForm} showComics={showComics}/> 
      </div>
      <div>
      {showNewForm ?
        <Create/> :
        null}
      </div>
      <div className="home-container">
        {showComics ?
        <Home cart={cart} setCart={setCart} showId={showId} setShowId={setShowId}/>
          :
        null}
      </div>
      <div>
        {showId ? <ShowComic/> : null}
      </div>
    </div>
  )
}

export default App;
