import React from 'react';
import Form from './Form/Form'

const AddGame = () => {

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

    addGame(reqBody, e.persist())
    e.target.reset()
  }

  // Post new game to DB and Add new game to state
  const addGame = async (reqBody, e) => {
    try {
      await fetch("http://localhost:5000/post/videogames", {
        method: "POST", 
        headers: { "Content-Type": "application/json" },
        mode: "cors",
        body: JSON.stringify(reqBody)
      }) 

    } catch (err) {
      console.error(err)
    } 
  }

  return <Form handleSubmit={handleSubmit} />
}

export default AddGame