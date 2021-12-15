import React, {useEffect, useState} from 'react';
import {FiveDaysWeatherWrapper} from "./FiveDaysWeatherStyled";
import weather from '../../../img/wether.png'
import sprite from "../../../img/symbol-defs.svg";
import {useSelector} from "react-redux";
import {dailyWeatherSelector} from "../../../redux/weather/weatherSelectors";



const FiveDaysWeather = () => {
    const dailySelector = useSelector(dailyWeatherSelector);
    // {dt, temp: {min, max}}
    // const [state, setState] = useState({
    //     weekDay: "",
    //     date: "",
    //     month: "",
    //     dailyIcon: "",
    //     tempMax: "",
    //     tempMin: "",
    //     time: "",
    //     hourlyIcon: "",
    //     pressure: "",
    //     humidity: "",
    //     windSpeed: "",
    // });

    const [daily, setDaily] = useState()

    useEffect(() => {
        if (dailySelector) {
            setDaily(dailySelector)
            // timeConverter(daily);
        }
        // if (daily.temp?.min && daily.temp?.max) {
        //     setState((prevState) => ({
        //         ...prevState,
        //         tempMax: daily.temp?.max,
        //         tempMin: daily.temp?.min,
        //     }))
        // }
    }, [dailySelector])

    // function timeConverter(daily) {
    //     const {dt} = daily;
    //     const converter = (date) => new Date(date * 1000);
    //     const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul",
    //         "Aug","Sep","Oct","Nov","Dec"];
    //     const days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];
    //     const slicer = (data) => {
    //         let result = converter(data).toLocaleTimeString()
    //         return result.slice(0, result.lastIndexOf(':'))
    //     }
    //
    //     setState((prevState) => ({
    //         ...prevState,
    //         date: converter(dt).getDate(),
    //         weekDay: days[converter(dt).getDay()],
    //         month: months[converter(dt).getMonth()],
    //     }));
    // }

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
