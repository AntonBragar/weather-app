import React, {useEffect, useState} from 'react';
import {FiveDaysWeatherWrapper} from "./FiveDaysWeatherStyled";
import weather from '../../../img/wether.png'
import sprite from "../../../img/symbol-defs.svg";
import {useSelector} from "react-redux";
import {dailyWeatherSelector} from "../../../redux/weather/weatherSelectors";
import {getSearchCoordSelector} from "../../../redux/coords/coordSelectors";
import DailyList from "./DailyForecast/DailyList";


const FiveDaysWeather = () => {
    const dailySelector = useSelector(dailyWeatherSelector);
    const {name, country} = useSelector(getSearchCoordSelector);

    const [state, setState] = useState()

    useEffect(() => {
        if (dailySelector && name && country) {
            const daily = dailySelector.map(({dt, temp, weather}) => {
                const convertingTimeFnForState = timeConverter(dt);
                const convertingTempFnForState = tempConverter(temp)
                return {dt: dt, ...convertingTimeFnForState, ...convertingTempFnForState, icon: weather[0].icon}
            })
            setState((prevState) => ({
                ...prevState,
                name:name,
                country:country,
                daily
            }))
        }
    }, [dailySelector,name, country])

    function tempConverter(temp) {
        const {min,max}=temp
        const converter = (data)=>Math.floor(data)
        return{
            tempMax: converter(max),
            tempMin: converter(min)
        }
    }

    function timeConverter(dt) {
        const converter = (date) => new Date(date * 1000);
        const monthsShortName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul",
            "Aug", "Sep", "Oct", "Nov", "Dec"];
        const daysFullName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        // const slicer = (data) => {
        //     let result = converter(data).toLocaleTimeString()
        //     return result.slice(0, result.lastIndexOf(':'))
        // }
        return {
            date: converter(dt).getDate(),
            weekDayFull: daysFullName[converter(dt).getDay()],
            monthShort: monthsShortName[converter(dt).getMonth()]
        }
    }

    return (
        <FiveDaysWeatherWrapper className="container">
            <div className="weatherBox">
                <p className="titleLocation">{state?.name},{state?.country}</p>

                <DailyList daily={state?.daily}/>

                <ul className="hourlyForecastsList">
                    <li className="hourlyForecastItem">
                        <p className="time">00:00</p>
                        <img src={weather} alt="" className="icon"/>
                        <p className="temp">-2&#176;</p>
                        <ul className="atmosphericList">
                            <li className="atmosphericItem">
                                <svg width={10} height={10} className="pressureIcon">
                                    <use xlinkHref={sprite + "#icon-barometr"}/>
                                </svg>
                                <p className="pressure text">772 mm</p>
                            </li>
                            <li className="atmosphericItem">
                                <svg width={10} height={10} className="humidityIcon">
                                    <use xlinkHref={sprite + "#icon-kaplya"}/>
                                </svg>
                                <p className="humidity text">54%</p>
                            </li>
                            <li className="atmosphericItem">
                                <svg width={10} height={10} className="windSpeedIcon">
                                    <use xlinkHref={sprite + "#icon-wind"}/>
                                </svg>
                                <p className="windSpeed text">3.7 m/s</p>
                            </li>
                        </ul>
                    </li>
                    <li className="hourlyForecastItem">
                        <p className="time">00:00</p>
                        <img src={weather} alt="" className="icon"/>
                        <p className="temp">-2&#176;</p>
                        <ul className="atmosphericList">
                            <li className="atmosphericItem">
                                <svg width={10} height={10} className="pressureIcon">
                                    <use xlinkHref={sprite + "#icon-barometr"}/>
                                </svg>
                                <p className="pressure text">772 mm</p>
                            </li>
                            <li className="atmosphericItem">
                                <svg width={10} height={10} className="humidityIcon">
                                    <use xlinkHref={sprite + "#icon-kaplya"}/>
                                </svg>
                                <p className="humidity text">54%</p>
                            </li>
                            <li className="atmosphericItem">
                                <svg width={10} height={10} className="windSpeedIcon">
                                    <use xlinkHref={sprite + "#icon-wind"}/>
                                </svg>
                                <p className="windSpeed text">3.7 m/s</p>
                            </li>
                        </ul>
                    </li>
                    <li className="hourlyForecastItem">
                        <p className="time">00:00</p>
                        <img src={weather} alt="" className="icon"/>
                        <p className="temp">-2&#176;</p>
                        <ul className="atmosphericList">
                            <li className="atmosphericItem">
                                <svg width={10} height={10} className="pressureIcon">
                                    <use xlinkHref={sprite + "#icon-barometr"}/>
                                </svg>
                                <p className="pressure text">772 mm</p>
                            </li>
                            <li className="atmosphericItem">
                                <svg width={10} height={10} className="humidityIcon">
                                    <use xlinkHref={sprite + "#icon-kaplya"}/>
                                </svg>
                                <p className="humidity text">54%</p>
                            </li>
                            <li className="atmosphericItem">
                                <svg width={10} height={10} className="windSpeedIcon">
                                    <use xlinkHref={sprite + "#icon-wind"}/>
                                </svg>
                                <p className="windSpeed text">3.7 m/s</p>
                            </li>
                        </ul>
                    </li>
                    <li className="hourlyForecastItem">
                        <p className="time">00:00</p>
                        <img src={weather} alt="" className="icon"/>
                        <p className="temp">-2&#176;</p>
                        <ul className="atmosphericList">
                            <li className="atmosphericItem">
                                <svg width={10} height={10} className="pressureIcon">
                                    <use xlinkHref={sprite + "#icon-barometr"}/>
                                </svg>
                                <p className="pressure text">772 mm</p>
                            </li>
                            <li className="atmosphericItem">
                                <svg width={10} height={10} className="humidityIcon">
                                    <use xlinkHref={sprite + "#icon-kaplya"}/>
                                </svg>
                                <p className="humidity text">54%</p>
                            </li>
                            <li className="atmosphericItem">
                                <svg width={10} height={10} className="windSpeedIcon">
                                    <use xlinkHref={sprite + "#icon-wind"}/>
                                </svg>
                                <p className="windSpeed text">3.7 m/s</p>
                            </li>
                        </ul>
                    </li>
                    <li className="hourlyForecastItem">
                        <p className="time">00:00</p>
                        <img src={weather} alt="" className="icon"/>
                        <p className="temp">-2&#176;</p>
                        <ul className="atmosphericList">
                            <li className="atmosphericItem">
                                <svg width={20} height={20} className="pressureIcon">
                                    <use xlinkHref={sprite + "#icon-barometr"}/>
                                </svg>
                                <p className="pressure text">772 mm</p>
                            </li>
                            <li className="atmosphericItem">
                                <svg width={20} height={20} className="humidityIcon">
                                    <use xlinkHref={sprite + "#icon-kaplya"}/>
                                </svg>
                                <p className="humidity text">54%</p>
                            </li>
                            <li className="atmosphericItem">
                                <svg width={20} height={20} className="windSpeedIcon">
                                    <use xlinkHref={sprite + "#icon-wind"}/>
                                </svg>
                                <p className="windSpeed text">3.7 m/s</p>
                            </li>
                        </ul>
                    </li>
                </ul>

            </div>
        </FiveDaysWeatherWrapper>
    );
};

export default FiveDaysWeather;
