import React from 'react';
import CurrentWeather from "./CurrentWeather/CurrentWeather";
import FiveDaysWeather from "./FiveDaysWeather/FiveDaysWeather";
import DaysButtons from "./DaysButtons/DaysButtons";
import CurrentDate from "./CurrentDate/CurrentDate";

const Main = () => {
    return (
        <div>
            <CurrentWeather/>
            <DaysButtons/>
            <CurrentDate/>
            <FiveDaysWeather/>
        </div>
    );
};

export default Main;
