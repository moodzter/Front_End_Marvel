import axios from 'axios'
import {useState, useEffect} from 'react'

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
    <div>
        <div>
            <h1>Add a NEW Comic</h1>
        </div>
        <div>
            <form onSubmit={handleComicSubmission}>
                Superhero: <input type='text' onChange={handleChangeSuperhero}/><br/>
                Comic Cover Art Link: <input type='text' onChange={handleChangeImg}/><br/>
                Release Date: <input type='text' onChange={handleChangeReleaseDate}/><br/>
                Author: <input type='text' onChange={handleChangeAuthor}/><br/>
                Description: <input type='text' onChange={handleChangeDescription}/><br/>
                <input type='submit' value='Submit NEW Comic'/>
            </form>
        </div>
    </div>
)
}

export default Create;
