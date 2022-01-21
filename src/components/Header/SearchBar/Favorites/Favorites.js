import {FavoriteWrapper} from "./FavoritesStyled";
import sprite from "../../../../img/symbol-defs.svg";
import {useDispatch, useSelector} from "react-redux";
import {getFavoritesSelector} from "../../../../redux/favorites/favoritesSelectors";
import {deleteFavorite} from "../../../../redux/favorites/favoritesActions";


const Favorites = () => {
    let favoriteCities = useSelector(getFavoritesSelector)

    const dispatch = useDispatch()

    const deleteCity = (evt) => {
        const {id} = evt.target;
        dispatch(deleteFavorite(id))
    }

     return favoriteCities.length ?(
        <FavoriteWrapper className="">
                <ul className='citiesList'>
                    {favoriteCities?.map(({city, id}) => (
                        <li key={id} className="cityItem"><span className='cityTitle'>{city}</span>
                            <button className="deleteItem" id={id} onClick={deleteCity}>
                                <svg id={id} width={10} height={10} >
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
        </FavoriteWrapper>
    ):null;
};

export default Favorites;
