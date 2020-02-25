import React from 'react';
import Game from './Game/Game'

const GameList = ({ games }) => {
	console.log(games)
	const displayGames = (games)
		? games.map((e, i) => <Game key={i} title={e.title} />)
		: null

	return displayGames
}

export default GameList;