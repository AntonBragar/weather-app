import React from 'react';
import {FavoriteWrapper} from "./FavoritesStyled";
import sprite from "../../../../img/symbol-defs.svg";

const Favorites = () => {
    return (
        <FavoriteWrapper className="container">
            <div className="favoriteBox">
                <ul className='citiesList'>
                    <li className="cityItem"><span className='cityTitle'>Kiev</span>  <button className="deleteItem"><svg width={10} height={10} className="phone">
                        <use xlinkHref={sprite + "#icon-close"}/>
                    </svg></button></li>
                    <li className="cityItem"><span className='cityTitle'>Kiev</span>  <button className="deleteItem"><svg width={10} height={10} className="phone">
                        <use xlinkHref={sprite + "#icon-close"}/>
                    </svg></button></li>
                    <li className="cityItem"><span className='cityTitle'>Kiev</span>  <button className="deleteItem"><svg width={10} height={10} className="phone">
                        <use xlinkHref={sprite + "#icon-close"}/>
                    </svg></button></li>
                    <li className="cityItem"><span className='cityTitle'>Kiev</span>  <button className="deleteItem"><svg width={10} height={10} className="phone">
                        <use xlinkHref={sprite + "#icon-close"}/>
                    </svg></button></li>
                    <li className="cityItem"><span className='cityTitle'>Kiev</span>  <button className="deleteItem"><svg width={10} height={10} className="phone">
                        <use xlinkHref={sprite + "#icon-close"}/>
                    </svg></button></li>
                    <li className="cityItem"><span className='cityTitle'>Kiev</span>  <button className="deleteItem"><svg width={10} height={10} className="phone">
                        <use xlinkHref={sprite + "#icon-close"}/>
                    </svg></button></li>
                    <li className="cityItem"><span className='cityTitle'>Kiev</span>  <button className="deleteItem"><svg width={10} height={10} className="phone">
                        <use xlinkHref={sprite + "#icon-close"}/>
                    </svg></button></li>
                    <li className="cityItem"><span className='cityTitle'>Kiev</span>  <button className="deleteItem"><svg width={10} height={10} className="phone">
                        <use xlinkHref={sprite + "#icon-close"}/>
                    </svg></button></li>
                    <li className="cityItem"><span className='cityTitle'>Kiev</span>  <button className="deleteItem"><svg width={10} height={10} className="phone">
                        <use xlinkHref={sprite + "#icon-close"}/>
                    </svg></button></li>
                    <li className="cityItem"><span className='cityTitle'>Kiev</span>  <button className="deleteItem"><svg width={10} height={10} className="phone">
                        <use xlinkHref={sprite + "#icon-close"}/>
                    </svg></button></li>
                    <li className="cityItem"><span className='cityTitle'>Kiev</span>  <button className="deleteItem"><svg width={10} height={10} className="phone">
                        <use xlinkHref={sprite + "#icon-close"}/>
                    </svg></button></li>
                    <li className="cityItem"><span className='cityTitle'>Kiev</span>  <button className="deleteItem"><svg width={10} height={10} className="phone">
                        <use xlinkHref={sprite + "#icon-close"}/>
                    </svg></button></li>
                </ul>
                <button className='rightArrow'><svg width={22} height={22} className="phone">
                    <use xlinkHref={sprite + "#icon-arrow-right"}/>
                </svg></button>
            </div>
        </FavoriteWrapper>
    );
};

export default Favorites;
