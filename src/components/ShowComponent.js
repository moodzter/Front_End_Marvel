import { useState, useEffect } from 'react'
import axios from 'axios'

const Show = (props) => {

    useEffect(() => {
        axios.get(`https://ancient-badlands-39410.herokuapp.com/comics/${props.comic._id}`).then((response) => {
            console.log(response.data)
        })
    }, [])

    return <div>
        <details >
            <summary>Show More</summary>
            <h1>
                Author: {props.comic.author}
            </h1>
            <h3>Release Date: {props.comic.releaseDate}</h3>
            <h3>Rating: {props.comic.rating}</h3>
            <p>
                {props.comic.description}
            </p>
            <button>DELETE</button>
        </details>
    </div>


}


export default Show