import React, {useEffect} from 'react';
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import { AppWrapper} from "./AppStyled";
import {useDispatch, useSelector} from "react-redux";
import {weatherOperation} from "../redux/weather/weatherOperations";
import {getSearchCoordSelector} from "../redux/coords/coordSelectors";
import {getCoordsOperation} from "../redux/coords/coordOperations";
import BodyImage from "./BodyImage/BodyImage";
import {todayToggleSelector} from "../redux/daysButtons/daysButtonsSelector";

const App = () => {
    const dispatch = useDispatch()

    const coord = useSelector(getSearchCoordSelector)
    const isCurrentDateToggler = useSelector(todayToggleSelector)

    useEffect(() => {
        if (Object.keys(coord).length === 0) dispatch(getCoordsOperation('Kyiv'));
        else dispatch(weatherOperation(coord))
    }, [dispatch, coord])

    return (
        <>
            <BodyImage/>
            <AppWrapper className='container'>
                <Header/>
                <Main/>
                {isCurrentDateToggler && <Footer/>}
            </AppWrapper>
        </>

    );
};

export default App;
