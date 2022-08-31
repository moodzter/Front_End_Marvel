import { useState, useEffect } from 'react'
import axios from 'axios'
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';




const Show = (props) => {

    let [showSinglecomic, setSinglecomic] = useState({})
    let [editSuperhero, setEditSuperhero] = useState('')
    let [editImg, setEditImg] = useState('')
    let [editAuthor, setEditAuthor] = useState('')
    let [editReleaseDate, setEditReleaseDate] = useState('')
    let [editDescription, setEditDescription] = useState('')



    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  

    const handleShowComic = (comic) => {
        axios.get(`https://ancient-badlands-39410.herokuapp.com/comics/${comic._id}`)
        .then((response) => {
            setSinglecomic(response.data)
        }
    )
}

    const handleEditSuperhero = (event) => {
        setEditSuperhero(event.target.value)
    }

    const handleEditImg = (event) => {
        setEditImg(event.target.value)
    }

    const handleEditAuthor = (event) => {
        setEditAuthor(event.target.value)
    }

    const handleEditReleaseDate = (event) => {
        setEditReleaseDate(event.target.value)
    }

    const handleEditDescription = (event) => {
        setEditDescription(event.target.value)
    }

    const comicDelete = (comic) => {
        axios.delete(`https://ancient-badlands-39410.herokuapp.com/comics/${comic._id}`)
        .then(()=>{
            axios
            .get('https://ancient-badlands-39410.herokuapp.com/comics')
            .then((response) => {
                props.setNewComic(response.data)
            })
        })
    }

    const editComic = (comic) => {
        axios.put(`https://ancient-badlands-39410.herokuapp.com/comics/${comic._id}`,
        {
            superhero: editSuperhero,
            img: editImg, 
            author: editAuthor,
            releaseDate: editReleaseDate,
            description: editDescription,
        })
        .then(() => {
            axios.get('https://ancient-badlands-39410.herokuapp.com/comics')
            .then((response) => {
                props.setNewComic(response.data)
            })
        })
    }

    

    return <div>
        <Button variant="info" onClick={()=>{ handleShowComic(props.comic); handleShow ()}} >
                  Show More
                </Button>
                <Offcanvas show={show} onHide={handleClose} backdrop="static">
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Comic Info</Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <h1>{showSinglecomic.author}</h1>
                    <h3>{showSinglecomic.releaseDate}</h3>
                    <h3>{showSinglecomic.rating}</h3>
                    <p>{showSinglecomic.description}</p>
                    <button onClick={(event) => {
                        comicDelete(props.comic)
                    }}>DELETE</button>
                  </Offcanvas.Body>
                </Offcanvas>
                <>
      {['top'].map((placement) => (
        <OverlayTrigger
          trigger="click"
          key={placement}
          placement={placement}
          overlay={
            <Popover id={`popover-positioned-${placement}`}>
              <Popover.Header as="h3"> EDIT</Popover.Header>
              <Popover.Body>
              <form onSubmit={() => {{editComic(props.comic)}}}>
                    Superhero Name: <input type='text' onChange={handleEditSuperhero} value={props.comic.superhero}/><br/>
                    Cover Art URL: <input type='text' onChange={handleEditImg} value={props.comic.img}/><br/>
                    Author: <input type='text' onChange={handleEditAuthor} placeholder={props.comic.author}/><br/>
                    Release Date: <input type='text' onChange={handleEditReleaseDate} placeholder={props.comic.releaseDate}/><br/>
                    Description: <input type='text' onChange={handleEditDescription} placeholder={props.comic.description}/><br/>
                    <input type='submit' placeholder='SUBMIT CHANGES'/>
                </form>
              </Popover.Body>
            </Popover>
          }
        >
          <Button variant="primary">Edit Comic</Button>
        </OverlayTrigger>
      ))}
    </>
               

    
    </div>


}


export default Show

    {/* <details onClick={() => {handleShowComic(props.comic)}}>
            <summary>Show More</summary>
            <h1>
                Author: {showSinglecomic.author}
            </h1>
            <h3>Release Date: {showSinglecomic.releaseDate}</h3>
            <h3>Rating: {showSinglecomic.rating}</h3>
            <p>
                {showSinglecomic.description}
            </p>
            <button onClick={(event) => {
                comicDelete(props.comic)
            }}>DELETE</button>
            <details>
            <summary>EDIT</summary>
            <form onSubmit={() => {{editComic(props.comic)}}}>
                    Superhero Name: <input type='text' onChange={handleEditSuperhero} value={props.comic.superhero}/><br/>
                    Cover Art URL: <input type='text' onChange={handleEditImg} value={props.comic.img}/><br/>
                    Author: <input type='text' onChange={handleEditAuthor} placeholder={props.comic.author}/><br/>
                    Release Date: <input type='text' onChange={handleEditReleaseDate} placeholder={props.comic.releaseDate}/><br/>
                    Description: <input type='text' onChange={handleEditDescription} placeholder={props.comic.description}/><br/>
                    <input type='submit' placeholder='SUBMIT CHANGES'/>
                </form>
        </details>
        </details> */}