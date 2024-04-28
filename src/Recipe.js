import React from "react";

const Recipe = (props) => {
  const { name, cookTime, servings, instructions } = props;

  return (
    <div>
      <div className="heading">
        <h2>{name}</h2>
        <div className="buttons">
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>
      <div>
        <span>Cook Time:</span>
        <span>{cookTime}</span>
      </div>
      <div>
        <span>Servings:</span>
        <span>{servings}</span>
      </div>
      <div>
        <span>Instructions:</span>
        <div>{instructions}</div>
      </div>
    </div>
  );
};

export default Recipe;
