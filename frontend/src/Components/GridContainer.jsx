import React from 'react';
import Card from './Card'; // Import the Card component

const GridContainer = ({ cards }) => {
  return (
    <div className="grid gap-4">
      {cards.map((card, index) => (
        <Card key={index} title={card.title} content={card.content} />
      ))}
    </div>
  );
};

export default GridContainer;
