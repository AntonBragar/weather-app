import React from 'react';
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import {AppWrapper} from "./AppStyled";


const App = () => {
    return (
        <AppWrapper>
            <Header/>
            <Main/>
            <Footer/>
        </AppWrapper>
    );
};

export default App;
