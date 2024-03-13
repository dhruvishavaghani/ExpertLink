import React from 'react';

const Card = ({ name, title, content }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-black font-bold">{name}</h2>
      <h3 className="text-black font-bold mb-2">{title}</h3>
      <p className="text-black">{content}</p>
    </div>
  );
};

export default Card;
