
import React, { useState, useEffect } from 'react';
import Header from './Components/Header/Header'
import GameList from './Components/Main/GameList/GameList'
import Form from './Components/Main/Aside/Form/Form'
import "./App.css"
// Router
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

const App = () => {
  const [games, setGames] = useState(null);

	useEffect(() => {
		// Get all games
		const callApi = async () => {
      try {
        const data = await fetch("http://localhost:5000/get/videogames");
        const response = await data.json();
        console.log(response)
        setGames(prevState => response)       
      } catch (err) {
        console.error(err)
      }
		}
		callApi()
  }, [])
  
  // Get new game data from From on submit
  const handleSubmit = async e => {
    e.preventDefault();

    const strRatings = e.target.ratings.value.replace(/[\s]/g, '').split(',')
    const ratings = strRatings.map(parseFloat)

    const reqBody = {
      title: e.target.title.value,
      stock: e.target.stock.value,
      type: e.target.type.value,
      ratings: ratings
    }
    console.log(reqBody)  
    addGame(reqBody, e.persist())
    e.target.reset()
  }

  // Post new game to DB and Add new game to state
  const addGame = async (reqBody, e) => {
    try {
      const res = await fetch("http://localhost:5000/post/videogames", {
        method: "POST", 
        headers: { "Content-Type": "application/json" },
        mode: "cors",
        body: JSON.stringify(reqBody)
      })
  
      const data = await res.json()
      setGames(prevState => [...prevState, data])

    } catch (err) {
      console.error(err)
    } 
  }

	return (
		<div className="App">
			<Header title="Game Api" description="let's go dude"/>
      <Router>
        <nav className="navigation" >
          <Link className="navigation__link" to="/">Home</Link>
          <Link className="navigation__link" to="/rating">Ratings</Link>
        </nav>

        {/* Games */}
        <Route exact path='/'>
          <GameList games={games}/>
        </Route>

        {/* Ratings */}
        <Route path='/rating'>
          <div>Ratings</div>
        </Route>

        {/* Game details */}
        <Route path='/test' component={null}/>

        <Form handleSubmit={handleSubmit} />
      </Router>
		</div>
	);
}

export default App;
