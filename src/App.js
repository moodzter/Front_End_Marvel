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
        <Create showComics={showComics} showNewForm={showNewForm} setComic={setComics} setNewForm={setNewForm}/> :
        null}
      </div>
      
        {showComics ?
        <Home cart={cart} setCart={setCart} showId={showId} setShowId={setShowId}/>
          :
        null}
      
      <div>
        {showId ? <ShowComic/> : null}
      </div>
      <div className="footer">
          <div>&copy;All Rights Reserved</div>
          <div>Comic World &trade; </div>
          <div>&#9824;Mauricio Serrato & Nick Moody &#9824;</div>
      </div>
    </div>
  )
}

export default App;
