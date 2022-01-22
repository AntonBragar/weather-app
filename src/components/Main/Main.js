import React from 'react';
import CurrentWeather from "./CurrentWeather/CurrentWeather";
import FiveDaysWeather from "./FiveDaysWeather/FiveDaysWeather";
import DaysButtons from "./DaysButtons/DaysButtons";
import CurrentDate from "./CurrentDate/CurrentDate";
import {useSelector} from "react-redux";
import {fiveDaysToggleSelector, todayToggleSelector} from "../../redux/daysButtons/daysButtonsSelector";
import Citates from "./Citates/Citates";
import {MainWrapper} from "./MainStyled";

const Main = () => {
    const isTodayToggle = useSelector(todayToggleSelector)
    const isFiveDaysToggle = useSelector(fiveDaysToggleSelector)

    return (
        <MainWrapper>
            {isTodayToggle && <div className="firstBlock">
                <CurrentWeather/>
                <DaysButtons/>
            </div>}
            {isTodayToggle && <div className="secondBlock">
                <CurrentDate/>}
                <Citates/>}
            </div>}
            {isFiveDaysToggle && <div className="thirdBlock">
                <DaysButtons/>
                <FiveDaysWeather/>
            </div>}
        </MainWrapper>
    );
};

export default Main;
