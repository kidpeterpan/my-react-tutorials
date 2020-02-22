import React from 'react';
import './card.style.css';

export const Card = props => {

    return <div className="card-container">
                <img alt="monster" src={`https://robohash.org/${props.cardInfo.id}?set=set2&size=180x180`} />
                <h1>{props.cardInfo.name}</h1>
                <p>{props.cardInfo.email}</p>
           </div>;
           
}


