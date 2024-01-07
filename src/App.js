import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar'
import Home from './components/Home'

const App = (props) => {
  return (
    <div className='App'>
        <NavBar/>
        <Home/>
    </div>
  )
}

export default App
