import axios from 'axios'
import { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Show from './ShowComponent'
import Offcanvas from 'react-bootstrap/Offcanvas';



const Home = (props) => {
  const [hero, setNewHero] = useState("")
  const [img, setNewImg] = useState("")
  const [releaseDate, setNewReleaseDate] = useState("")
  const [description, setNewDescription] = useState("")
  const [rating, setNewrating] = useState("")
  const [comic, setNewComic] = useState([])
  const [specificComic, setSpecificComic] = useState({})

  const [showComic, setShowComic] = useState(true)
  const [hidden, setHidden] = useState('')
  const [id, setId] = useState('')
  const [giveID, setgiveID] = useState('')





  const addCart = () => {
    props.setCart(props.cart + 1)
}


  useEffect(() => {
    axios.get('https://ancient-badlands-39410.herokuapp.com/comics').then((response) => {
      setNewComic(response.data)
    })
  }, [])

  const changeIdName = (comic) => {
    setId(comic._id)
  }
    
  const showPage = () => {
    setShowComic(!showComic)
  }


  return (
    <div className="collection">
      {comic.map((singleComic) => {
        return (
          <>
            
            <Card className={hidden} key={singleComic._id} style={{ width: '18rem', margin: '1em' }}>
              <Card.Img variant="top" src={singleComic.img} />
              <Card.Body>
                <Card.Title>{singleComic.superhero}</Card.Title>
                <Button onClick={addCart}variant="primary">Add To Cart</Button>
                {showComic ? <Show setNewComic={setNewComic}comic={singleComic} setHidden={setHidden} setgiveID={setgiveID}/> : null}
                </Card.Body>
            </Card>
          </>
        );
      }

      )}

    </div>

  )

}

export default Home

//whaterver export is calling then inside of that you put in props!

