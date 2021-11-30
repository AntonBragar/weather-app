import React from 'react';
import {FiveDaysWeatherWrapper} from "./FiveDaysWeatherStyled";
import weather from '../../../img/wether.png'
import sprite from "../../../img/symbol-defs.svg";

const FiveDaysWeather = () => {
    return (
        <FiveDaysWeatherWrapper className="container">
            <div className="weatherBox">
                <p className="titleLocation">Kyiv, UA</p>
                <ul className="forecastsList">
                    <li className="forecastItem">
                        <p className="week">Sunday</p>
                        <p className="date">09 Feb</p>
                        <img src={weather} alt="" className="icon"/>
                        <ul className='tempList'>
                            <li className='tempItem'>
                                <span className='tempTitle'>min</span>
                                <span className='tempNum'>-2&#176;</span>
                            </li>
                            <li className='tempItem'>
                                <span className='tempTitle'>max</span>
                                <span className='tempNum'>-3&#176;</span>
                            </li>
                        </ul>
                        <button href="" className="moreInfo">more info</button>
                    </li>
                    <li className="forecastItem">
                        <p className="week">Sunday</p>
                        <p className="date">09 Feb</p>
                        <img src={weather} alt="" className="icon"/>
                        <ul className='tempList'>
                            <li className='tempItem'>
                                <span className='tempTitle'>min</span>
                                <span className='tempNum'>-2&#176;</span>
                            </li>
                            <li className='tempItem'>
                                <span className='tempTitle'>max</span>
                                <span className='tempNum'>-3&#176;</span>
                            </li>
                        </ul>
                        <button href="" className="moreInfo">more info</button>
                    </li>
                    <li className="forecastItem">
                        <p className="week">Sunday</p>
                        <p className="date">09 Feb</p>
                        <img src={weather} alt="" className="icon"/>
                        <ul className='tempList'>
                            <li className='tempItem'>
                                <span className='tempTitle'>min</span>
                                <span className='tempNum'>-2&#176;</span>
                            </li>
                            <li className='tempItem'>
                                <span className='tempTitle'>max</span>
                                <span className='tempNum'>-3&#176;</span>
                            </li>
                        </ul>
                        <button href="" className="moreInfo">more info</button>
                    </li>
                    <li className="forecastItem">
                        <p className="week">Sunday</p>
                        <p className="date">09 Feb</p>
                        <img src={weather} alt="" className="icon"/>
                        <ul className='tempList'>
                            <li className='tempItem'>
                                <span className='tempTitle'>min</span>
                                <span className='tempNum'>-2&#176;</span>
                            </li>
                            <li className='tempItem'>
                                <span className='tempTitle'>max</span>
                                <span className='tempNum'>-3&#176;</span>
                            </li>
                        </ul>
                        <button href="" className="moreInfo">more info</button>
                    </li>
                    <li className="forecastItem">
                        <p className="week">Sunday</p>
                        <p className="date">09 Feb</p>
                        <img src={weather} alt="" className="icon"/>
                        <ul className='tempList'>
                            <li className='tempItem'>
                                <span className='tempTitle'>min</span>
                                <span className='tempNum'>-2&#176;</span>
                            </li>
                            <li className='tempItem'>
                                <span className='tempTitle'>max</span>
                                <span className='tempNum'>-3&#176;</span>
                            </li>
                        </ul>
                        <button href="" className="moreInfo">more info</button>
                    </li>
                </ul>
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
