import React from 'react';
import Game from './Game/Game'

const GameList = ({ games }) => {
	const displayGames = (games)
		? games.map(e => <Game key={e._id}  title={e.title} />)
		: null

	return displayGames
}

export default GameList;