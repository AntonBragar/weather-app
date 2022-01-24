import {FavoriteWrapper} from "./FavoritesStyled";
import {getFavoritesSelector} from "../../../../redux/favorites/favoritesSelectors";
import FavoriteItems from "./FavoriteItems";
import {useSelector} from "react-redux";
import {useRef} from "react";
import ButtonScroll from "../../../../utils/ButtonScroll/ButtonScroll";

const Favorites = () => {
    const favoriteCities = useSelector(getFavoritesSelector)

    const ulCitiesRef = useRef();


    return favoriteCities.length ? (
        <FavoriteWrapper className="">
            <ButtonScroll direction={'left'}  ulWithScrollRef={ulCitiesRef} scrollLength={150}/>
            <ul ref={ulCitiesRef} className='citiesList'>
                {favoriteCities?.map(({city, id}) => (
                    <FavoriteItems city={city} id={id} key={id}/>
                ))}
            </ul>
            <ButtonScroll direction={'right'}  ulWithScrollRef={ulCitiesRef} scrollLength={150}/>
        </FavoriteWrapper>
    ) : null;
};

export default Favorites;
