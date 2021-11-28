import React from 'react';
import {FormWrapper} from "./FormStyled";
import sprite from "../../../../img/symbol-defs.svg";

const Form = () => {

    return (
        <FormWrapper className='container'>
            <div className='inputBox'>
                <div className='inputForm'>
                    <button className='target'>
                        <svg width={22} height={22} className="phone">
                            <use xlinkHref={sprite + "#icon-location"}/>
                        </svg>
                    </button>
                    <input type="text" placeholder="Enter the city"/>
                    <button className='favorite'>
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
