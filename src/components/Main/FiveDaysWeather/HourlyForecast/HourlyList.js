import React from 'react';
import HourlyItems from "./HourlyItems";

const HourlyList = ({hourly}) => {
    return (
            <ul className="hourlyForecastsList">
                {hourly?.map(element => (
                    <HourlyItems key={element.dt} element={element}/>
                ))}
            </ul>
    );
};

export default HourlyList;