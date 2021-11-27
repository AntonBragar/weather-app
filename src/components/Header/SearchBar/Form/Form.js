import React from 'react';
import {FormWrapper} from "./FormStyled";
const hell=()=>{
    console.log('hell 0')
    return <p>HEEEEL</p>
}

const Form = () => {
    return (
        <FormWrapper>
            <button>Location</button>
            <input type="text"/>
            <button>Favorite</button>
            {hell()}
        </FormWrapper>
    );
};

export default Form;
