import React from 'react';
import DailyItems from "./DailyItems";

const DailyList = ({daily}) => {
    return (
        <ul className="dailyforecastsList">
            {daily?.map(element => (
                <DailyItems key={element.dt} element={element}/>
            ))}
        </ul>
    );
};

export default DailyList;
