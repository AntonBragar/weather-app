import React from 'react';
import sprite from "../../../../img/symbol-defs.svg";
import {WeatherImageContainer} from "../FiveDaysWeatherStyled";

const HourlyItems = ({element}) => {
    const {time, temp, icon, feelsLike, pressure, humidity, wind_speed} = element
    return (
        <>
            <li className="hourlyForecastItem">
                <p className="time">{time}</p>
                <WeatherImageContainer icon={icon}/>
                <ul className='currentFeelsTempList'>
                    <li className='tempItem'>
                        <span className='tempTitle'>Current</span>
                        <span className='tempNum'>{temp}&#176;</span>
                    </li>
                    <li className='tempItem'>
                        <span className='tempTitle'>Feels</span>
                        <span className='tempNum'>{feelsLike}&#176;</span>
                    </li>
                </ul>
                <ul className="atmosphericList">
                    <li className="atmosphericItem">
                        <svg width={10} height={10} className="pressureIcon">
                            <use xlinkHref={sprite + "#icon-barometr"}/>
                        </svg>
                        <p className="pressure text">{pressure} mm</p>
                    </li>
                    <li className="atmosphericItem">
                        <svg width={10} height={10} className="humidityIcon">
                            <use xlinkHref={sprite + "#icon-kaplya"}/>
                        </svg>
                        <p className="humidity text">{humidity}%</p>
                    </li>
                    <li className="atmosphericItem">
                        <svg width={10} height={10} className="windSpeedIcon">
                            <use xlinkHref={sprite + "#icon-wind"}/>
                        </svg>
                        <p className="windSpeed text">{wind_speed} m/s</p>
                    </li>
                </ul>
            </li>
        </>
    );
};

export default HourlyItems;