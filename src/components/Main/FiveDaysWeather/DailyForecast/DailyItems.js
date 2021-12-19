import React from 'react';
import {createWeatherIconSrc} from "../../../../utils/createWeatherIconSrc";


const DailyItems = ({element, onHandlerClickMoreInfo}) => {
    const {weekDayFull, date, monthShort, tempMin, tempMax, icon, dt} = element

    return (
        <>
            <li className="forecastItem">
                <p className="week">{weekDayFull}</p>
                <p className="date">{date} {monthShort}</p>
                <img src={createWeatherIconSrc(icon)} alt={'Weather Icon'} className="icon"/>
                <ul className='tempList'>
                    <li className='tempItem'>
                        <span className='tempTitle'>min</span>
                        <span className='tempNum'>{tempMin}&#176;</span>
                    </li>
                    <li className='tempItem'>
                        <span className='tempTitle'>max</span>
                        <span className='tempNum'>{tempMax}&#176;</span>
                    </li>
                </ul>
                <button onClick={onHandlerClickMoreInfo} href="" id={date} className="moreInfo">more info</button>
            </li>
        </>
    );
};

export default DailyItems;
