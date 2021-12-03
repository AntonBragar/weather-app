import React, {useState} from 'react';
import {FormWrapper} from "./FormStyled";
import sprite from "../../../../img/symbol-defs.svg";
import {useDispatch} from "react-redux";
import {addFavorite} from "../../../../redux/favorites/favoritesActions";

const Form = () => {
    const [favorite, setFavorite] = useState('');

    const dispatch = useDispatch()

    const onHandlerChange = (e) => {
        const {value} = e.target
        setFavorite(value)
    }

    const onHandlerSubmit = (e) => {
        e.preventDefault();
    }
    const onHandlerAddFavorite = () => {
        dispatch(addFavorite(favorite))
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
