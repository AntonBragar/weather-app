import React from 'react';
import Form from "./SearchBar/Form/Form";
import Favorites from "./SearchBar/Favorites/Favorites";

const Header = () => {
    return (
        <div>
            <Form/>
            <Favorites/>
        </div>
    );
};

export default Header;
