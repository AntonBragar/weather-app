import React, {useEffect, useState} from 'react';
import {FiveDaysWeatherWrapper} from "./FiveDaysWeatherStyled";
import {useSelector} from "react-redux";
import {dailyWeatherSelector, hourlyWeatherSelector} from "../../../redux/weather/weatherSelectors";
import {getSearchCoordSelector} from "../../../redux/coords/coordSelectors";
import DailyList from "./DailyForecast/DailyList";
import HourlyList from "./HourlyForecast/HourlyList";


const FiveDaysWeather = () => {
    const dailySelector = useSelector(dailyWeatherSelector);
    const hourlySelector = useSelector(hourlyWeatherSelector);
    const {name, country} = useSelector(getSearchCoordSelector);

    const [state, setState] = useState()

    useEffect(() => {
        if (dailySelector && hourlySelector && name && country) {
            const daily = dailySelector.map(({dt, temp, weather}) => {
                const convertingTimeFnForState = timeConverter(dt);
                const convertingTempFnForState = tempConverter(temp)
                return {dt: dt, ...convertingTimeFnForState, ...convertingTempFnForState, icon: weather[0].icon}
            })

            const hourly = hourlySelector.map(({dt, temp, feels_like, pressure, humidity, wind_speed, weather}) => {
                const convertingTimeFnForState = timeConverter(dt);
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
    }, [dailySelector, hourlySelector, name, country])

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

    function timeConverter(dt) {
        const converter = (date) => new Date(date * 1000);
        const monthsShortName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul",
            "Aug", "Sep", "Oct", "Nov", "Dec"];
        const daysFullName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const slicer = (data) => {
            let result = converter(data).toLocaleTimeString()
            return result.slice(0, result.lastIndexOf(':'))
        }
        return {
            date: converter(dt).getDate(),
            time: slicer(dt),
            weekDayFull: daysFullName[converter(dt).getDay()],
            monthShort: monthsShortName[converter(dt).getMonth()]
        }
    }

    return (
        <FiveDaysWeatherWrapper className="container">
            <div className="weatherBox">
                <p className="titleLocation">{state?.name},{state?.country}</p>
                <DailyList daily={state?.daily} onHandlerClickMoreInfo={onHandlerClickMoreInfo}/>
                {state?.filteredHourlyWeather && <HourlyList hourly={state?.filteredHourlyWeather}/>}
            </div>
        </FiveDaysWeatherWrapper>
    );
};

export default FiveDaysWeather;
