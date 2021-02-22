import React from 'react';
import { NavLink } from 'react-router-dom';


const MenuItem = React.memo ((props) => {

    return (
        <section className={`menu__item ${props.class}`}>
            <NavLink className="menu__link" exact to={props.link}>
                <h3 className="menu__link-title">{props.title}</h3>
                <p className="menu__link-subtitle">{props.subtitle}</p>
            </NavLink>
        </section>
    );
})

export default MenuItem;