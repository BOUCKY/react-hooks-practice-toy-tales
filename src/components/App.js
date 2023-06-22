import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";
import ToyCard from "./ToyCard";

function App() {
  const [showForm, setShowForm] = useState(false);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  const [toys, setToys] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/toys')
      .then(response => response.json())
      .then(data => setToys(data))
  },[])

  const addToyToState = (newToyObject) => {
    setToys(prevToys => [...prevToys, newToyObject])
  }

  const donateToy = (toyID) => {
    setToys((currentToys) => {
      return currentToys.filter((toy) => toy.id !== toyID)
    })
  }

  const renderedToys = toys.map((toyObject) => {
    return(
      <ToyCard
        key={toyObject.id}
        name={toyObject.name}
        image={toyObject.image}
        likes={toyObject.likes}
        toyID={toyObject.id}
        donateToy={donateToy}
      />
    )
  })

  return (
    <>
      <Header />
      {showForm ? <ToyForm addToyToState={addToyToState} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer renderedToys={renderedToys} setToys={setToys} />
    </>
  );
}

export default App;
