import React from 'react';
import Card from "./Card.js";
import { Link } from 'react-router-dom';

const CardList = React.memo ((props) => {

    return (
        <section className="emperors">

            <h2 className="emperors__title">{props.title}</h2>
            <p className="emperors__subtitle">{props.subtitle}</p>

            <ul className="cards">
                {props.cards.map((card, i) =>
                    (<Card
                        key={i}
                        card={card}
                        onCardClick={props.onCardClick}
                    />)
                )}
            </ul>

             <Link className="button button_list" to="/byzantium">На главную</Link>

        </section>
    );
})

export default CardList;