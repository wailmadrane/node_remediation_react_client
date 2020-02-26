import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Header from './Components/Header/Header'
import GameList from './Components/GameList/GameList'
import AddGame from './Components/AddGame/AddGame'
import SingleGame from './Components/SingleGame/SingleGame'

import "./App.css"

const App = () => {
	return (
		<div className="App">
			<Header title="Game Api" description="let's go dude"/>
      <Router>
        <nav className="navigation" >
          <Link className="navigation__link" to="/">Home</Link>
          <Link className="navigation__link" to="/addgame">Add game</Link>
        </nav>

        <Switch>
          {/* Games */}
          <Route exact path='/' component={GameList}/>

          {/* Add game */}
          <Route path='/addgame' component={AddGame}/>

          {/* Game details */}
          <Route path={'/games/:id'} component={SingleGame}/>
        </Switch>

      </Router>
		</div>
	);
}

export default App;
