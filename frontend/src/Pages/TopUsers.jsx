import React from 'react'
import GridContainer from '../Components/GridContainer';

function TopUsers() {

const cards = [
  // Replace with your actual card data objects
  { name:'Dhruvisha', title: '1:1 Call', content: 'Personal call to solve all doubts' },
  { name: 'Yashvi', title: 'Virtual meet', content: 'Virtual meet to have any mock interview.' },
  { name: 'Khushi', title: 'Direct Message', content: 'Direct message service ' },
  // ... add more cards
];

  return (
    <div className="container mx-auto px-4 py-8">
      <GridContainer cards={cards} />
    </div>
  );
}

export default TopUsers