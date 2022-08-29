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
    <div className="createWrapper">
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
    </div>
)
}

export default Create;
