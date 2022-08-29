import './App.css';
import axios from 'axios'
import {useState, useEffect} from 'react'
import Create from './components/CreateComponent'

const App = () => {


  return (
    <div>
      <h1>Hello World</h1>
      <div>
        <Create/>
      </div>
    </div>
  )
}

export default App;
