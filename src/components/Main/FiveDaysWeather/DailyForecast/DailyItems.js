import React from 'react';
import weather from "../../../../img/wether.png";

const DailyItems = ({element}) => {
    const{weekDayFull,date,monthShort,tempMin,tempMax}=element
    return (
        <>
                <li className="forecastItem">
                <p className="week">{weekDayFull}</p>
                <p className="date">{date} {monthShort}</p>
                <img src={weather} alt="" className="icon"/>
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
                <button href="" className="moreInfo">more info</button>
                </li>
          </>
    );
};

export default DailyItems;
