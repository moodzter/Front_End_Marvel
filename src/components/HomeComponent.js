import axios from 'axios'
import { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Show from './ShowComponent'
import Offcanvas from 'react-bootstrap/Offcanvas';
import Dropdown from 'react-bootstrap/Dropdown';


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

  const uniqueNames = [];
  console.log(uniqueNames)

  const uniqueSuperheros = comic.filter(element => {
    const isDuplicate = uniqueNames.includes(element.superhero);

    if(!isDuplicate) {
      uniqueNames.push(element.superhero);

      return true;
    }

    return false;
  })
  

  //create a function that can sort by comic.superhero

  
  return (<>
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {uniqueNames.map(name => {
          return (
            <Dropdown.Item>{name.superhero}</Dropdown.Item>
          )
        })}
      </Dropdown.Menu>
    </Dropdown>
    <div className="collection">
      {comic.map((singleComic) => {
        return (
          <>
            
            <Card className={hidden} key={singleComic._id} style={{ width: '18rem', margin: '1em' }}>
              <Card.Img variant="top" src={singleComic.img} />
                <Card.Title>{singleComic.superhero}</Card.Title>
                <Card.Body>
                
                <Button variant="success"onClick={addCart}>Add To Cart</Button>
                {showComic ? <Show setNewComic={setNewComic}comic={singleComic} setHidden={setHidden} setgiveID={setgiveID}/> : null}
                </Card.Body>
            </Card>
          </>
        );
      }

      )}

    </div>
    </>

  )

}

export default Home

//whaterver export is calling then inside of that you put in props!

