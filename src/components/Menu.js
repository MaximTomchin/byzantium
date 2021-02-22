import React from 'react';
import MenuItem from "./MenuItem";

const Menu = React.memo ((props) => {

    return (
        <section className="menu">

            <h2 className="menu__title">Самое важное о Византийской империи</h2>

            <nav className="menu__list">

                <MenuItem
                    class={"menu__item_type_facts"}
                    link={'/facts'}
                    title={"Византия: главное"}
                    subtitle={"История Восточной Римской империи в цифрах и фактах"}
                />

                <MenuItem
                    class={"menu__item_type_emperors"}
                    link={'/byzantium/emperors'}
                    title={"Византийские императоры"}
                    subtitle={"Все правители Византии от Константина I до Константина XI"}
                />

                <MenuItem
                    class={"menu__item_type_timeline"}
                    link={'/timeline'}
                    title={"Хронология на карте"}
                    subtitle={"Все основные события тысячелетней истории Византии на карте"}
                />

                <MenuItem
                    class={"menu__item_type_culture"}
                    link={'/culture'}
                    title={"Культура и искусство"}
                    subtitle={"Архитектура, изобразительное искусство и многое другое"}
                />

                <MenuItem
                    class={"menu__item_type_heritage"}
                    link={'/heritage'}
                    title={"Наследие"}
                    subtitle={"Что оставила Византия после себя"}
                />

                <MenuItem
                    class={"menu__item_type_library"}
                    link={'/library'}
                    title={"Что почитать о Византии?"}
                    subtitle={"Книги и интернет-ресурсы о Византии"}
                />
            </nav>
        </section>
    );
})

export default Menu;