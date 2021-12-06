import React, {useCallback, useEffect} from 'react';
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import {AppWrapper} from "./AppStyled";
import {useDispatch, useSelector} from "react-redux";
import {weatherOperation} from "../redux/weather/weatherOperations";
import {getSearchCoordSelector} from "../redux/coords/coordSelectors";


const App = () => {
    const dispatch = useDispatch()

    let coord = useSelector(getSearchCoordSelector)
    console.log(coord)

    useEffect(() => {
        dispatch(weatherOperation(coord))
    })

    return (
        <AppWrapper className='container'>
            <Header/>
            <Main/>
            <Footer/>
        </AppWrapper>
    );
};

export default App;
