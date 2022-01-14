import React from 'react';
import CurrentWeather from "./CurrentWeather/CurrentWeather";
import FiveDaysWeather from "./FiveDaysWeather/FiveDaysWeather";
import DaysButtons from "./DaysButtons/DaysButtons";
import CurrentDate from "./CurrentDate/CurrentDate";
import {useSelector} from "react-redux";
import {fiveDaysToggleSelector, todayToggleSelector} from "../../redux/daysButtons/daysButtonsSelector";

const Main = () => {
    const isCurrentDateToggler = useSelector(todayToggleSelector)
    const isFiveDaysToggler = useSelector(fiveDaysToggleSelector)

    return (
        <div>
            {isCurrentDateToggler && <CurrentWeather/>}
            <DaysButtons/>
            {isCurrentDateToggler && <CurrentDate/>}
            {isFiveDaysToggler && <FiveDaysWeather/>}
        </div>
    );
};

export default Main;
