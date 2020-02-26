import React from 'react'
import "./GameItem.css"

const Game = props => {

  const renderData = (data) => {
    const arr = []
    for (let [key, value] of Object.entries(data)) {
      if (key == "rating") value = value.toFixed(1)
      arr.push(<div>{key} : <strong>{value}</strong></div>)
    }
    return arr
  } 

  return (
    <div className="Game">
      {renderData(props)}
    </div>
  )
}

export default Game