import React, {useEffect, useState} from 'react';
import {CurrentDateWrapper} from "./CurrentDateStyled";
import sprite from "../../../img/symbol-defs.svg";
import {currentWeatherSelector} from "../../../redux/weather/weatherSelectors";
import {useSelector} from "react-redux";
import Clock from "./Clock";
import { utcToZonedTime} from "date-fns-tz";



const CurrentDate = () => {
    const {dt, sunrise, sunset, timezone} = useSelector(currentWeatherSelector)
    const [state, setState] = useState({
        thisDay: '',
        weekDay: '',
        month: '',
        sunrise: '',
        sunset: '',
    });

    function timeConverter(dt, sunrise, sunset, timezone) {

        const converter = (dateUtc,timezone) => {
            const date = new Date(dateUtc*1000)
            return  utcToZonedTime(date, timezone)
        };

        const months = ["January", "February", "March", "April", "May", "June", "July",
            "August", "September", "October", "November", "December"];
        const days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];

        const sunriseTime = `${converter(sunrise,timezone).getHours()}:${converter(sunrise,timezone).getMinutes()}`;
        const sunsetTime = `${converter(sunset,timezone).getHours()}:${converter(sunset,timezone).getMinutes()}`;

        setState((prevState) => ({
            ...prevState,
            thisDay: converter(dt,timezone).getDate(),
            weekDay: days[converter(dt,timezone).getDay()],
            month: months[converter(dt,timezone).getMonth()],
            sunrise: sunriseTime,
            sunset: sunsetTime,
        }));
    }

    useEffect(() => {
        if (dt && sunrise && sunset && timezone) {
            timeConverter(dt, sunrise, sunset, timezone)
        }
    }, [dt, sunrise, sunset, timezone])

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
                            <Clock/>
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
