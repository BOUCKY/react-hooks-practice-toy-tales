import React, { useState } from "react";

function ToyForm({addToyToState}) {

  const [name, setName] = useState('')
  const [image, setImage] = useState('')

  const handleName = (e) => setName(e.target.value)
  const handleImage= (e) => setImage(e.target.value)

  const addNewToy = (e) => {
    e.preventDefault()
    const newToy = {
      name : name,
      image : image,
      likes : 0
    }
   addToyToState(newToy)
  }

  return (
    <div className="container">
      <form onSubmit={addNewToy}className="add-toy-form">
        <h3>Create a toy!</h3>
        <input
          onChange={handleName}
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
        />
        <br />
        <input
        onChange={handleImage}
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
