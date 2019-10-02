import React from 'react'
import Cal from '../images/Calendar.jpg'
import Jour from '../images/Journal.jpg'
import Tas from '../images/List.jpg'
import '../index.css'

const Homepage = () => {
  return (
    <div class="container">
      <div class="topnav">
        <header className="edit-h1">Journal</header>
        {<img id="img1" className="img-icon" src={Jour}></img>}

        <header className="edit-h1">To-Do List</header>
        {<img id="img2" className="img-icon" src={Tas}></img>}

        <header className="edit-h1">Calendar</header>
        {<img id="img3" className="img-icon" src={Cal}></img>}
      </div>
    </div>
  )
}

export default Homepage
