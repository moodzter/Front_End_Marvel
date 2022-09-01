import axios from 'axios'
import { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { propTypes } from 'react-bootstrap/esm/Image';

const Create = (props) => {


    //States
    let [comics, setComics] = useState()
    let [newSuperhero, setNewSuperhero] = useState()
    let [newImg, setNewImg] = useState()
    let [newAuthor, setNewAuthor] = useState()
    let [newReleaseDate, setNewReleaseDate] = useState()
    let [newDescription, setNewDescription] = useState()
    let [newRating, setNewRating] = useState()
    let [newPrice, setNewPrice] = useState()

    //=====>Functions
    const handleChangeSuperhero = (event) => {
        setNewSuperhero(event.target.value)
    }

    const handleChangeRating = (event) => {
        setNewRating(event.target.value)
    }

    const handleChangePrice = (event) => {
        setNewPrice(event.target.value)
    }

    const handleChangeImg = (event) => {
        setNewImg(event.target.value)
    }

    const handleChangeAuthor = (event) => {
        setNewAuthor(event.target.value)
    }
    const handleChangeReleaseDate = (event) => {
        setNewReleaseDate(event.target.value)
    }
    const handleChangeDescription = (event) => {
        setNewDescription(event.target.value)
    }

    const showCollection = () => {
        props.setNewForm(!props.showNewForm)
        props.setComic(!props.showComics)
    }

    const handleComicSubmission = (event) => {
        alert(`You've added a new Comic!!!! Visit Collection To See Your Comic!!!!!!`)
        event.preventDefault();
        axios.post(
            'https://ancient-badlands-39410.herokuapp.com/comics',
            {
                superhero: newSuperhero,
                img: newImg,
                author: newAuthor,
                releaseDate: newReleaseDate,
                description: newDescription,
                rating: newRating,
                price: newPrice,
            }
        ).then(() => {
            axios.get('https://ancient-badlands-39410.herokuapp.com/comics')
                .then((response => {
                    setComics(response.data)
                }))
        })
    }


    //=====>Return Statement
    return (
        <Form onSubmit={(handleComicSubmission)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Super-Hero Name</Form.Label>
                <Form.Control className='NewForm' type="text" placeholder="Enter Superhero Name" onChange={handleChangeSuperhero}/>
                <Form.Label>Cover Art URL</Form.Label>
                <Form.Control className='NewForm' type='text' placeholder='Enter URL Here' onChange={handleChangeImg}/>
                <Form.Label>Release Date of Comic</Form.Label>
                <Form.Control className='NewForm' type='text' placeholder='Enter Release Date Here' onChange={handleChangeReleaseDate}/>
                <Form.Label>Author</Form.Label>
                <Form.Control className='NewForm' type='text' placeholder='Enter Author Here' onChange={handleChangeAuthor}/>
                <Form.Label>Description</Form.Label>
                <Form.Control className='NewForm' type='text' placeholder='Enter Description Here' onChange={handleChangeDescription}/>
                <Form.Label>Rating</Form.Label>
                <Form.Control className='NewForm' type='number' placeholder='Enter Rating Here' onChange={handleChangeRating}/>
                <Form.Label>Price</Form.Label>
                <Form.Control className='NewForm' type='number' placeholder='Enter Price Here' onChange={handleChangePrice}/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            <Button variant="success" onClick={showCollection}>
                To Collection
            </Button>
        </Form>
    )
}

export default Create;

{/* <div className="createWrapper">
        <div>
            <h1>Add a NEW Comic</h1>
        </div>
        <div className='newForm'>
            <form onSubmit={handleComicSubmission}>
                <div className="inputElements">
                    Superhero: <input className='inputNewForm' type='text' onChange={handleChangeSuperhero}/><br/>
                </div>
                <div className="inputElements">
                    Comic Cover Art Link: <input className='inputNewForm' type='text' onChange={handleChangeImg}/><br/>
                </div>
                <div className="inputElements">
                    Release Date: <input className='inputNewForm' type='text' onChange={handleChangeReleaseDate}/><br/>
                </div>
                <div className="inputElements">
                    Author: <input className='inputNewForm' type='text' onChange={handleChangeAuthor}/><br/>
                </div>
                <div className="inputElements">
                    Description: <input className='inputNewForm' type='text' onChange={handleChangeDescription}/><br/>
                </div>
                <input type='submit' value='Submit NEW Comic'/>
            </form>
        </div>
    </div> */}