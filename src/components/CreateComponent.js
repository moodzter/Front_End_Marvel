import axios from 'axios'
import { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Create = () => {


    //States
    let [comics, setComics] = useState()
    let [newSuperhero, setNewSuperhero] = useState()
    let [newImg, setNewImg] = useState()
    let [newAuthor, setNewAuthor] = useState()
    let [newReleaseDate, setNewReleaseDate] = useState()
    let [newDescription, setNewDescription] = useState()


    //=====>Functions
    const handleChangeSuperhero = (event) => {
        setNewSuperhero(event.target.value)
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

    const handleComicSubmission = (event) => {
        event.preventDefault();
        axios.post(
            'https://ancient-badlands-39410.herokuapp.com/comics',
            {
                superhero: newSuperhero,
                img: newImg,
                author: newAuthor,
                releaseDate: newReleaseDate,
                description: newDescription,
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
        <Form onSubmit={handleComicSubmission}>
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
                <Form.Control className='NewForm' type='text' placeholder='Enter Desccription Here' onChange={handleChangeDescription}/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
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