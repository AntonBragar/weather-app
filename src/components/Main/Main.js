import React from 'react';
import CurrentWeather from "./CurrentWeather/CurrentWeather";
import FiveDaysWeather from "./FiveDaysWeather/FiveDaysWeather";
import DaysButtons from "./DaysButtons/DaysButtons";
import CurrentDate from "./CurrentDate/CurrentDate";
import {useSelector} from "react-redux";
import {fiveDaysToggleSelector, todayToggleSelector} from "../../redux/daysButtons/daysButtonsSelector";

const Main = () => {
    const isTodayToggle = useSelector(todayToggleSelector)
    const isFiveDaysToggle = useSelector(fiveDaysToggleSelector)

    return (
        <>
            {isTodayToggle && <CurrentWeather/>}
            <DaysButtons/>
            {isTodayToggle && <CurrentDate/>}
            {isFiveDaysToggle && <FiveDaysWeather/>}
        </>
    );
};

export default Main;
