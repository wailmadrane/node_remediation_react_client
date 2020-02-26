import React from 'react';

const Form = ({ handleSubmit }) => {
  return (
    <form className="gameForm" onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Title"/>
        <input type="number" name="stock" placeholder="Stock"/>
        <input type="text" name="type" placeholder="Type"/>
        <input type="text" name="ratings" placeholder="Ratings: exemple 9.7, 8.5, 6."/>

        <div className="btn-wrapper">
          <input type="submit" className="btn" value="Add Game"/>
        </div> 
    </form>
  )
}

export default Form