import React, {useState} from 'react';
import {FormWrapper} from "./FormStyled";
import sprite from "../../../../img/symbol-defs.svg";
import {useDispatch, useSelector} from "react-redux";
import {addFavorite} from "../../../../redux/favorites/favoritesActions";
import {getCoordsOperation} from "../../../../redux/coords/coordOperations";
import axios from "axios";
import {getFavoritesSelector} from "../../../../redux/favorites/favoritesSelectors";

const Form = () => {
    let favoriteCities = useSelector(getFavoritesSelector)

    const [searchCity, setSearchCity] = useState('');

    const dispatch = useDispatch()

    const onHandlerChange = (e) => {
        const {value} = e.target
        setSearchCity(value)
    }

    const onHandlerSubmit = (e) => {
        e.preventDefault();
        dispatch(getCoordsOperation(searchCity));
    }
    const onHandlerAddFavorite = () => {
        let isInfavorite = favoriteCities.some(({city}) => city === searchCity);
        if (searchCity && !isInfavorite) {
            dispatch(addFavorite(searchCity))
        }
    }

    const onHandlerGetLocation = async () => {
        const {data} = await axios.get('https://api.db-ip.com/v2/free/self')
        const {city} = data
        let currentLocationCity = city.replace(/\(.+\)/,'')
        setSearchCity(currentLocationCity)
        if (currentLocationCity !== searchCity) {
            dispatch(getCoordsOperation(currentLocationCity));
        }
    }

    return (
        <FormWrapper className='container'>
            <div className='inputBox'>
                <div className='inputForm'>
                    <button className='target' onClick={onHandlerGetLocation}>
                        <svg width={22} height={22} className="targetSvg">
                            <use xlinkHref={sprite + "#icon-location"}/>
                        </svg>
                    </button>
                    <form onSubmit={onHandlerSubmit}>
                        <input type="text" placeholder="Enter the city" value={searchCity || ''}
                               onChange={onHandlerChange}/>
                    </form>
                    <button className='favorite' onClick={onHandlerAddFavorite}>
                        <svg width={22} height={22} className="favoriteSvg">
                            <use xlinkHref={sprite + "#icon-star"}/>
                        </svg>
                    </button>
                </div>
            </div>
        </FormWrapper>
    );
};

export default Form;
