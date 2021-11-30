import React, {useState} from 'react';
import {FavoriteWrapper} from "./FavoritesStyled";
import sprite from "../../../../img/symbol-defs.svg";

const Favorites = () => {
    const [cities, setCities] = useState([
        {name: "Kharkiv", id: 1},
        {name: "Kiev", id: 2},
        {name: "Lviv", id: 3}
    ]);

    const deleteCity = (evt) => {
        const {id} = evt.target;
        const filteredCities = cities.filter((city) => city.id !== +id)
        setCities(filteredCities)
    }
    console.log(cities);

    return (
        <FavoriteWrapper className="container">
            <div className="favoriteBox">
                <ul className='citiesList'>
                    {cities.map(city => (
                        <li key={city.id} className="cityItem"><span className='cityTitle'>{city.name}</span>
                            <button className="deleteItem" id={city.id} onClick={deleteCity}>
                                <svg  id={city.id} onClick={deleteCity} width={10} height={10} className="phone">
                                    <use xlinkHref={sprite + "#icon-close"}/>
                                </svg>
                            </button>
                        </li>
                    ))}
                </ul>
                <button className='rightArrow'>
                    <svg width={22} height={22} className="phone">
                        <use xlinkHref={sprite + "#icon-arrow-right"}/>
                    </svg>
                </button>
            </div>
        </FavoriteWrapper>
    );
};

export default Favorites;
