import React from 'react';
import {FormWrapper} from "./FormStyled";


const Form = () => {

    const hello = () => {
        console.log("Hello world")
        return <p>Hello Nazarik</p>
    }
    return (
        <FormWrapper>
            <button>Location</button>
            <input type="text"/>
            <button>Favorite</button>
            {hello()}
        </FormWrapper>
    );
};

export default Form;
