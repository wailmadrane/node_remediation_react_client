import React, { useState, useEffect } from 'react';
import GameItem from '../GameItem/GameItem'

const GameList = () => {
  const [games, setGames] = useState(null);

  useEffect(() => {
		// Get all games
		const callApi = async () => {
      try {
        const data = await fetch("http://localhost:5000/get/videogames/rating");
        const response = await data.json();
        console.log(response)
        setGames(prevState => response)       
      } catch (err) {
        console.error(err)
      }
		}
		callApi()
  }, [])

	const displayGames = (games)
		? games.map((e, i) => <GameItem key={i} title={e.title} rating={e.rating} />)
		: null

	return displayGames
}

export default GameList;