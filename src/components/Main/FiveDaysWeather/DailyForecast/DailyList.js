import React from 'react';
import DailyItems from "./DailyItems";

const DailyList = ({daily, onHandlerClickMoreInfo}) => {
    return (
        <ul className="dailyforecastsList">
            {daily?.map(element => (
                <DailyItems key={element.dt} element={element} onHandlerClickMoreInfo={onHandlerClickMoreInfo}/>
            ))}
        </ul>
    );
};

export default DailyList;
