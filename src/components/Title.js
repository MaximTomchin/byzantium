import React, {useState, useEffect, lazy, Suspense} from 'react';
import { useTransition, animated, config } from 'react-spring'
import slides from "../utils/slides";


const Title = React.memo ((props) => {
    const [index, set] = useState(0)
    const transitions = useTransition(slides[index], item => item.id, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: config.molasses,
    })
    useEffect(() => void setInterval(() => set(state => (state + 1) % 3), 7500), [])

    return (
        <section className="justinian">
            <h1 className="justinian__title">Imperium Romanum Orientale</h1>
            <p className="justinian__subtitle">Тысячелетняя история Восточной Римской империи. 395 - 1453 гг.</p>
            <Suspense fallback={<div>Загрузка...</div>}>
            {transitions.map(({ item, props, key }) => (
                <animated.img
                    className="justinian__main-illustration"
                    key={key}
                    style={props}
                    src={item.url}
                />
            ))}
            </Suspense>
        </section>
    );
})

export default Title;