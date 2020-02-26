import React, { useEffect, useState } from 'react'
import GameItem from '../GameItem/GameItem'

const SingleGame = props => {
  const [game, setGame] = useState(null)

  const getGame = async () => {
    const id = props.match.params.id
    try {
      const rawData = await fetch(`http://localhost:5000/get/videogame/${id}`)
      const res = await rawData.json()
      setGame(res)
    } 
    catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getGame()
  }, [])


  console.log(props)
  return (
    (game != null) 
      ?<GameItem id={game._id} title={game.title} type={game.type} stock={game.stock} />
      : null
  )
}

export default SingleGame