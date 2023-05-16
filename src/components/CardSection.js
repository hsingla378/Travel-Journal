import React from 'react';
import data from '../data';
import Card from './Card';

export default function CardSection() {
  let cardsData = data.map(item => {
    return <Card {...item}/>
  })

  return (
    <section id='card-section'>
      {cardsData}
    </section>
  );
}
