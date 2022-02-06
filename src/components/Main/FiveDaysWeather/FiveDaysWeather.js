import React, {useEffect, useState} from 'react';
import {FiveDaysWeatherWrapper} from "./FiveDaysWeatherStyled";
import {useSelector} from "react-redux";
import {
    currentWeatherSelector,
    dailyWeatherSelector,
    hourlyWeatherSelector
} from "../../../redux/weather/weatherSelectors";
import {getSearchCoordSelector} from "../../../redux/coords/coordSelectors";
import DailyList from "./DailyForecast/DailyList";
import HourlyList from "./HourlyForecast/HourlyList";
import {format, utcToZonedTime} from "date-fns-tz";


const FiveDaysWeather = () => {
    const {timezone} = useSelector(currentWeatherSelector)
    const dailySelector = useSelector(dailyWeatherSelector);
    const hourlySelector = useSelector(hourlyWeatherSelector);
    const {name, country} = useSelector(getSearchCoordSelector);

    const [state, setState] = useState()


    useEffect(() => {
        if (dailySelector && hourlySelector && name && country) {
            const daily = dailySelector.map(({dt, temp, weather}) => {
                const convertingTimeFnForState = timeConverter(dt,timezone);
                const convertingTempFnForState = tempConverter(temp)
                return {dt: dt, ...convertingTimeFnForState, ...convertingTempFnForState, icon: weather[0].icon}
            })

            const hourly = hourlySelector.map(({dt, temp, feels_like, pressure, humidity, wind_speed, weather}) => {
                const convertingTimeFnForState = timeConverter(dt,timezone);
                const convertingTempFnForState = tempConverter(temp, feels_like);
                return {
                    dt: dt,
                    ...convertingTimeFnForState,
                    ...convertingTempFnForState,
                    icon: weather[0].icon,
                    pressure: pressure,
                    humidity: humidity,
                    wind_speed: wind_speed
                }
            })

            setState((prevState) => ({
                ...prevState,
                name: name,
                country: country,
                daily: daily.slice(0, 5),
                hourly,
            }))
        }
    }, [dailySelector, hourlySelector, name, country, timezone])

    function onHandlerClickMoreInfo(e) {
        const {id} = e.target;
        const filteredHourlyWeather = state?.hourly.filter(({date}) => date === +id)
        setState((prevState) => ({
            ...prevState,
            filteredHourlyWeather,
        }))
    }


    function tempConverter(temp, feels_like) {
        const converter = (data) => Math.floor(data)
        if (Object.keys(temp).length > 0) {
            const {min, max} = temp
            return {
                tempMax: converter(max),
                tempMin: converter(min)
            }
        } else {
            return {
                temp: converter(temp),
                feelsLike: converter(feels_like)
            }
        }
    }

    function timeConverter(dt, timezone) {
        const converter = (dateUtc, timezone) => {
            const date = new Date(dateUtc * 1000)
            return utcToZonedTime(date, timezone)
        };
        const monthsShortName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul",
            "Aug", "Sep", "Oct", "Nov", "Dec"];
        const daysFullName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const pattern = 'HH:mm'
        return {
            date: converter(dt,timezone).getDate(),
            time: format(converter(dt,timezone), pattern, timezone),
            weekDayFull: daysFullName[converter(dt,timezone).getDay()],
            monthShort: monthsShortName[converter(dt,timezone).getMonth()]
        }
    }

    return (
        <FiveDaysWeatherWrapper className="">
                <p className="titleLocation">{state?.name},{state?.country}</p>
                <DailyList daily={state?.daily} onHandlerClickMoreInfo={onHandlerClickMoreInfo}/>
                {state?.filteredHourlyWeather && <HourlyList hourly={state?.filteredHourlyWeather}/>}
        </FiveDaysWeatherWrapper>
    );
};

export default FiveDaysWeather;
