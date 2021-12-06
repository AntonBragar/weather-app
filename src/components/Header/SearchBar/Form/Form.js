import React, {useState} from 'react';
import {FormWrapper} from "./FormStyled";
import sprite from "../../../../img/symbol-defs.svg";
import {useDispatch} from "react-redux";
import {addFavorite} from "../../../../redux/favorites/favoritesActions";
import {addSearchCity} from "../../../../redux/search/searchActions";

const Form = () => {
    const [city, setCity] = useState('');

    const dispatch = useDispatch()

    const onHandlerChange = (e) => {
        const {value} = e.target
        setCity(value)
    }

    const onHandlerSubmit = (e) => {
        e.preventDefault();
        dispatch(addSearchCity(city));
    }
    const onHandlerAddFavorite = () => {
        dispatch(addFavorite(city));
    }

    return (
        <FormWrapper className='container'>
            <div className='inputBox'>
                <div className='inputForm'>
                    <button className='target'>
                        <svg width={22} height={22} className="phone">
                            <use xlinkHref={sprite + "#icon-location"}/>
                        </svg>
                    </button>
                    <form onSubmit={onHandlerSubmit}>
                        <input type="text" placeholder="Enter the city" onChange={onHandlerChange}/>
                    </form>
                    <button className='favorite' onClick={onHandlerAddFavorite}>
                        <svg width={22} height={22} className="phone">
                            <use xlinkHref={sprite + "#icon-star"}/>
                        </svg>
                    </button>
                </div>
            </div>
        </FormWrapper>
    );
};

export default Form;
