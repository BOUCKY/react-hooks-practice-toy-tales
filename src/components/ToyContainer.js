import React from "react";

function ToyContainer({renderedToys}) {

  return (
    <div id="toy-collection">
      {renderedToys}
    </div>
  );
}

export default ToyContainer;
