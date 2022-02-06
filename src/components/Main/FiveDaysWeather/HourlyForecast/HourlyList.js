import React, {useRef} from 'react';
import HourlyItems from "./HourlyItems";
import ButtonScroll from "../../../../utils/ButtonScroll/ButtonScroll";

const HourlyList = ({hourly}) => {
    const ulWeatherHourlyRef = useRef();
    return (
        <div className="hourlyForecastWrapper">
            <ButtonScroll ulWithScrollRef={ulWeatherHourlyRef} scrollLength={150} direction={'left'}/>
            <ul className="hourlyForecastsList" ref={ulWeatherHourlyRef}>
                {hourly?.map(element => (
                    <HourlyItems key={element.dt} element={element}/>
                ))}
            </ul>
            <ButtonScroll ulWithScrollRef={ulWeatherHourlyRef} scrollLength={150} direction={'right'}/>
        </div>

    );
};

export default HourlyList;