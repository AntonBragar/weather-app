import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {currentWeatherSelector} from "../../../redux/weather/weatherSelectors";
import {format, utcToZonedTime} from "date-fns-tz";


const Clock = () => {
    const {timezone} = useSelector(currentWeatherSelector)

    const [clock, setClock] = useState()

    const start = (timezone) => {
        return setInterval(() => {

            const date = new Date()
            const timeZone = timezone
            const zonedDate = utcToZonedTime(date, timeZone)
            const pattern = 'HH:mm:ss'
            const time = format(zonedDate, pattern, timeZone)

            setClock(time);
        }, 1000);
    }

    const stop = (intervalId) => {
        return clearInterval(intervalId)
    }

    useEffect(() => {
        const intervalId = start(timezone)
        return () => {
            stop(intervalId)
        }
    }, [timezone])

    return (
        <>
            <p className="time">{clock}</p>
        </>
    )
}
export default Clock