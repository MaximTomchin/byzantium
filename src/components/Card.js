import React from 'react';

const Card = React.memo ((props) => {

    function handleClick () {
        props.onCardClick(props.card);
    }

    return (
        <li className="cards__item">
            <img className="cards__image" src= {props.card.image}  alt= {props.card.name}  onClick={handleClick}/>
            <h3 className="cards__title">{props.card.name}</h3>
            <p className="cards__description">{props.card.description}</p>
            <a href={props.card.link} className="cards__link" target="_blank">Подробнее {'  '+ String.fromCharCode(8594)}</a>
        </li>
    );
})

export default Card;
