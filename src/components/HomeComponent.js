import axios from 'axios'
import {useState, useEffect} from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


const Home = () => {
    const [hero, setNewHero] = useState("")
    const [img, setNewImg] = useState("")
    const [releaseDate, setNewReleaseDate] = useState("")
    const [description, setNewDescription] = useState("")
    const [rating, setNewrating] = useState("")
    const [comic, setNewComic] = useState([])



    useEffect(() => {
        axios.get('http://localhost:3000/comics').then((response) => {
            setNewComic(response.data)
            console.log(response.data)
        })
    },[])


    return (
        <div>
            {comic.map((comic) => {
                return( 
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={comic.img} />
                    <Card.Body>
                      <Card.Title>{comic.superhero}</Card.Title>
                      <Card.Text>
                   
                      </Card.Text>
                      <Button variant="primary">Show More</Button>
                    </Card.Body>
                  </Card>
                );
              }
              
            )}

        </div>

    )

}

export default Home

