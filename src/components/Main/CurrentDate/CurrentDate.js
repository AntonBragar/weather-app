import React, {useEffect, useState} from 'react';
import {CurrentDateWrapper} from "./CurrentDateStyled";
import sprite from "../../../img/symbol-defs.svg";
import {currentWeatherSelector} from "../../../redux/weather/weatherSelectors";
import {useSelector} from "react-redux";


const CurrentDate = () => {
    const {dt, sunrise, sunset} = useSelector(currentWeatherSelector)
    const [state, setState] = useState({
        thisDay: '',
        weekDay: '',
        month: '',
        sunrise: '',
        sunset: '',
    });

    function timeConverter(dt, sunrise, sunset) {
        const converter = (date) => new Date(date * 1000);
        const months = ["January","February","March","April","May","June","July",
            "August","September","October","November","December"];
        const days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];
        const slicer = (data) => {
            let result = converter(data).toLocaleTimeString()
            return result.slice(0, result.lastIndexOf(':'))
        }
        setState((prevState) => ({
            ...prevState,
            thisDay: converter(dt).getDay(),
            weekDay: days[converter(dt).getDay()],
            month: months[converter(dt).getMonth()],
            sunrise: slicer(sunrise),
            sunset: slicer(sunset),
        }));
    }

    useEffect(() => {
        if (dt && sunrise && sunset) {
            timeConverter(dt, sunrise, sunset)
        }
    }, [dt, sunrise, sunset])

    return (
        <div>
            <CurrentDateWrapper className="container">
                <div className="favoriteBox">
                    <div className="itemsBox">
                        <div className="dateAndDay">
                            <p className="date">{state.thisDay}<sup className="degree">th</sup></p>
                            <p className="day">{state.weekDay}</p>
                        </div>
                        <div className="monthAndTime">
                            <p className="month">{state.month}</p>
                            <p className="time">21:30:56</p>
                        </div>
                        <div className="sunShine">
                            <p className="sunrise">
                                <svg width={22} height={22} className="icon">
                                    <use xlinkHref={sprite + "#icon-sunrise"}/>
                                </svg>
                                {state.sunrise}
                            </p>
                            <p className="sunset">
                                <svg width={22} height={22} className="icon">
                                    <use xlinkHref={sprite + "#icon-sunset"}/>
                                </svg>
                                {state.sunset}
                            </p>
                        </div>
                    </div>
                </div>
            </CurrentDateWrapper>
        </div>
    );
};

export default CurrentDate;
