import React from 'react';
import weather from "../../../../img/wether.png";
import sprite from "../../../../img/symbol-defs.svg";
import {createWeatherIconSrc} from "../../../../utils/createWeatherIconSrc";

const HourlyItems = ({element}) => {
    const {time, temp, icon, feels_like, pressure, humidity, wind_speed} = element
    return (
        <>
            <li className="hourlyForecastItem">
                <p className="time">{time}</p>
                <img src={createWeatherIconSrc(icon)} alt="" className="icon"/>
                <p className="temp">{temp}&#176;</p>
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