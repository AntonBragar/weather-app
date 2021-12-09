import React from 'react';
import {CurrentDateWrapper} from "./CurrentDateStyled";
import sprite from "../../../img/symbol-defs.svg";
import {currentWeatherSelector} from "../../../redux/weather/weatherSelectors";
import {useSelector} from "react-redux";


const CurrentDate = () => {
    const {dt,sunrise,sunset} = useSelector(currentWeatherSelector)
    return (
        <div>
            <CurrentDateWrapper className="container">
                <div className="favoriteBox">
                    <div className="itemsBox">
                        <div className="dateAndDay">
                            <p className="date">8<sup className="degree">th</sup></p>
                            <p className="day">Sat</p>
                        </div>
                        <div className="monthAndTime">
                            <p className="month">February</p>
                            <p className="time">21:30:56</p>
                        </div>
                        <div className="sunShine">
                            <p className="sunrise">
                                <svg width={22} height={22} className="icon">
                                    <use xlinkHref={sprite + "#icon-sunrise"}/>
                                </svg>
                                07:04
                            </p>
                            <p className="sunset">
                                <svg width={22} height={22} className="icon">
                                    <use xlinkHref={sprite + "#icon-sunset"}/>
                                </svg>
                                17:05
                            </p>
                        </div>
                    </div>
                </div>
            </CurrentDateWrapper>
        </div>
    );
};

export default CurrentDate;
