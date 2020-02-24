import React from 'react';

const Form = ({ handleSubmit }) => {
   return (
   <form className="gameForm" onSubmit={handleSubmit}>
      <input type="text" name="title" placeholder="Title"/>
      <input type="number" name="stock" placeholder="Stock"/>
      <input type="text" name="type" placeholder="Type"/>

      <div className="btn-wrapper">
         <input type="submit" className="btn" value="Add Game"/>
      </div> 
   </form>
   )
}

export default Form