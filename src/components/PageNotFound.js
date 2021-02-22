import React from 'react';
import { Link } from 'react-router-dom';


function PageNotFound () {
    return (
                <div className="not-found">

                    <h3 className="not-found__title">
                        <span>404</span> - здесь пока ничего нет
                    </h3>

                    <p className="not-found__text">
                        Страница находится в разработке
                    </p>

                    <Link className="button button_not-found" to="/">Назад</Link>
                </div>

    )
}

export default PageNotFound;