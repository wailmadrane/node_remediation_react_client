
import React, { useState, useEffect } from 'react';
import Header from './Components/Header/Header'
import GameList from './Components/Main/GameList/GameList'
import Form from './Components/Main/Aside/Form/Form'
import "./App.css"

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
    const reqBody = {
      title: e.target.title.value,
      stock: e.target.stock.value,
      type: e.target.type.value
    }
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
			<GameList games={games}/>
      <Form handleSubmit={handleSubmit} />
		</div>
	);
}

export default App;
