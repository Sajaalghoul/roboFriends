import React from "react";
import Card from "./Card";
const CardList = ({ robots }) => {
  // if(true){//the catch will work just in deplyment
  //   throw('new error');
  // }
  const CardArray = robots.map((robot) => {
    return (
      <Card
        key={robot.id}
        name={robot.name}
        email={robot.email}
        id={robot.id}
      />
    );
  });
  return(
    <div>
        {CardArray}
    </div>
  )
};

export default CardList;
