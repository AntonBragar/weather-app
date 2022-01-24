import React from 'react';
import sprite from "../../../../img/symbol-defs.svg";
import {useDispatch} from "react-redux";
import {deleteFavorite} from "../../../../redux/favorites/favoritesActions";

const FavoriteItems = ({city,id}) => {
    const dispatch = useDispatch()

    const deleteCity = (evt) => {
        const {id} = evt.target;
        dispatch(deleteFavorite(id))
    }
    return (
        <>
            <li className="cityItem"><span className='cityTitle'>{city}</span>
                <button className="deleteItem" id={id} onClick={deleteCity}>
                    <svg id={id} width={10} height={10} >
                        <use xlinkHref={sprite + "#icon-close"}/>
                    </svg>
                </button>
            </li>
        </>
    );
};

export default FavoriteItems;