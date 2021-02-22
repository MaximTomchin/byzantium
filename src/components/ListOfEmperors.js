import React from 'react';
import CardList from "./CardList";
import ImagePopup from "./ImagePopup";
import eastRomanEmperors from "../utils/eastRomanEmperors";
import emperors from "../utils/emperors";
import latinEmperors from "../utils/latinEmperors";
import nikeanEmperors from "../utils/nikeanEmperors";
import lateEmperors from "../utils/lateEmperors";


const ListOfEmperors = React.memo ((props) => {
    const [selectedCard, setSelectedCard] = React.useState(null);
    function handleCardClick (card) {
        setSelectedCard({
            name: card.name,
            image: card.image
        });
    }

    function closeAllPopups () {
        setSelectedCard(null);
    }

    return (
        <section className="list">

            <CardList
                title={'Императоры востока Римской империи'}
                subtitle={'От основания Константинополя (330 г.) и до окончательного разделения империи (395 г.). ' +
                'Приведены только правители, которые носили титул августа. Императоры, царствовавшие в других частях Римской' +
                ' империи, в список не включены.'}
                onCardClick={handleCardClick}
                cards={eastRomanEmperors}
            />

            <CardList
                title={'Императоры Византии'}
                subtitle={'От разделения Римской империи на Западную и Восточную (395 г.) и до Четвёртого крестового ' +
                'похода (1204 г.). Младшие соправители в список не включены.'}
                onCardClick={handleCardClick}
                cards={emperors}
            />

            <CardList
                title={'Латинские императоры'}
                subtitle={'Католические императоры-крестоносцы, царствовавшие в Константинополе с 1204 по 1261 г.'}
                onCardClick={handleCardClick}
                cards={latinEmperors}
            />

            <CardList
                title={'Никейские императоры'}
                subtitle={'Основные греческие претенденты на византийский престол, правившие в Никее с 1204 по 1261 г.'}
                onCardClick={handleCardClick}
                cards={nikeanEmperors}
            />

            <CardList
                title={'Императоры Византии'}
                subtitle={'Правители возрождённой Византийской империи с 1261 по 1453 г. Младшие соправители в список ' +
                'не включены.'}
                onCardClick={handleCardClick}
                cards={lateEmperors}
            />

            <ImagePopup
                card = {selectedCard}
                onClose={closeAllPopups}
            />

        </section>
    );
})

export default ListOfEmperors;