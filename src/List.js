import React from "react";

const List = ({ people }) => {
  const uiContent = people.map((p) => {
    const { id, name, image, age } = p;
    return (
      <article className="person" key={id}>
        <img src={image} alt={name} />
        <div>
          <h4>{name}</h4>
          <p>{age} years</p>
        </div>
      </article>
    );
  });
  return <>{uiContent}</>;
};

export default List;
