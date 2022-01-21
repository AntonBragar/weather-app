import React from 'react';
import Form from "./SearchBar/Form/Form";
import Favorites from "./SearchBar/Favorites/Favorites";
import {HeaderWrapper} from "./HeaderStyled";

const Header = () => {
    return (
        <HeaderWrapper>
            <Form/>
            <Favorites/>
        </HeaderWrapper>
    );
};

export default Header;
