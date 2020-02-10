
import React, { useState, useEffect } from 'react';
import Header from './Components/Header/Header'
import GameList from './Components/Main/GameList/GameList'
import "./App.css"

const App = () => {
	const [games, setGames] = useState(null);

	useEffect(() => {

		// Get all games
		const callApi = async () => {
			const data = await fetch("http://localhost:5000/get/videogames");
			const response = await data.json();
			console.log(response)
			setGames(prevState => response)
		}
		callApi()

	}, [])

  const addGame = async () => {
		try {
			const reqBody = {
				title: "fgsdgsdfsdfsd",
				stock: 5,
				type: "test"
			}

			const res = await fetch("http://localhost:5000/post/videogames", {
				method: "POST", 
				header: new Headers().append("Content-Type", "application/json"),
				mode: "cors",
				body: JSON.stringify(reqBody)
			})
			const data = res.json()
			console.log(data)

		} catch (err) {
			console.error(err)
		}
  }

	return (
		<div className="App">
			<Header title="Game Api" description="let's go dude"/>
			<GameList games={games}/>
			<button className="btn" onClick={() => addGame()}>Add Game</button>
		</div>
	);
}

export default App;
