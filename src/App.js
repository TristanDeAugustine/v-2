import React, { Component } from 'react'
import Journal from './components/Journal.jsx'
import Tasks from './components/Tasks.jsx'
import Calendar from './components/Calendar.jsx'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Cal from './images/Calendar.jpg'
import Jour from './images/Journal.jpg'
import Tas from './images/List.jpg'
import Homepage from './components/Homepage.jsx'

class App extends Component {
  render() {
    return (
      <Router>
        <div class="container">
          <div class="topnav">
            <Link className="Link-Journal" to="/Journal">
              <header className="edit-h1">Journal</header>
              {<img id="img1" className="img-icon" src={Jour}></img>}
            </Link>
            <Link className="Link-Tasks" to="/Tasks">
              <header className="edit-h1">To-Do List</header>
              {<img id="img2" className="img-icon" src={Tas}></img>}
            </Link>
            <Link className="Link-Calendar" to="/Calendar">
              <header className="edit-h1">Calendar</header>
              {<img id="img3" className="img-icon" src={Cal}></img>}
            </Link>
          </div>
        </div>

        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/Journal" component={Journal} />
          <Route exact path="/Tasks" component={Tasks} />
          <Route exact path="/Calendar" component={Calendar} />
        </Switch>
      </Router>
    )
  }
}

export default App
