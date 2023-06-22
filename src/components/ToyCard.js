import React, { useState } from "react";

function ToyCard({name, image, likes, donateToy, toyID}) {

  const [toyLikes, setToyLikes] = useState(likes)
  const handleLikes = () => {
    const updatedLikes = toyLikes + 1
      setToyLikes(updatedLikes)
    fetch(`http://localhost:3001/toys/${toyID}`, {method : 'PATCH', headers : {'Content-Type' : "application/json"}, body : JSON.stringify({ likes: updatedLikes })} )
  }


  const handleDelete = () => {
    fetch(`http://localhost:3001/toys/${toyID}`, {method : 'DELETE'})
    donateToy(toyID)
  }


  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{toyLikes} Likes </p>
      <button onClick={handleLikes} className="like-btn">Like {"<3"}</button>
      <button onClick={handleDelete} className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
