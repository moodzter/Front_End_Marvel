import axios from 'axios'
import {useState, useEffect} from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ShowComic from './ShowComponent'


const Home = (props) => {
    const [hero, setNewHero] = useState("")
    const [img, setNewImg] = useState("")
    const [releaseDate, setNewReleaseDate] = useState("")
    const [description, setNewDescription] = useState("")
    const [rating, setNewrating] = useState("")
    const [comic, setNewComic] = useState([])

    const [showComic, setShowComic] = useState (true)



    useEffect(() => {
        axios.get('https://ancient-badlands-39410.herokuapp.com/comics').then((response) => {
            setNewComic(response.data)
            console.log(response.data)
        })
    },[])

    const showPage = () => {
      setShowComic(!showComic)
     
      
    }


    return (
        <div className="collection">
            {comic.map((comic) => {
                return( 
                  <>
                    <Card style={{ width: '18rem', margin: '1em' }}>
                      <Card.Img variant="top" src={comic.img} />
                      <Card.Body>
                        <Card.Title>{comic.superhero}</Card.Title>
                        <Card.Text>
                        </Card.Text>
                        <Button variant="primary" onClick={showPage}>Show More</Button>
                      </Card.Body>
                    </Card>
                  {showComic? <details>
                    <summary>Learn More</summary>
                    <h1>
                      Author: {comic.author}
                    </h1>
                    <h3>Release Date: {comic.releaseDate}</h3>
                    <h3>Rating: {comic.rating}</h3>
                    <p>
                      {comic.description}
                    </p>

                  </details> : null}
                  </>
                );
              }
              
            )}

        </div>

    )

}

export default Home

//whaterver export is calling then inside of that you put in props!

