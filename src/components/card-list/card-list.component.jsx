import React from 'react';
import './card-list.styles.css';
import { Card } from '../card/card.component';

export const CardList = props => {
    return <div className="card-list">
                {props.cardsInfo.map( cardInfo => 
                (<Card key={cardInfo.id} cardInfo={cardInfo}/>))}
          </div>;
}