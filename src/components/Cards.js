import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/bird-4.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='images/bird-5.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/bird-1.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/bird-3.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/bird-2.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;