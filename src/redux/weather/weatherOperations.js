import axios from "axios";
import {getCurrentWeather, getDailyWeather, getHourlyWeather} from "./weatherSlice";

const API_KEY = "48bbbb719c2c5b12dc6d3c6ec2e60cd2";
export const weatherOperation = (coord) => async (dispatch) => {
    try {
        const {lat, lon} = coord;
        const {data} = lat && lon ? await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely,alerts&appid=${API_KEY}`):'';
        const {current,timezone,timezone_offset} = data
        dispatch(getCurrentWeather({...current,timezone,timezone_offset}));
        dispatch(getHourlyWeather(data.hourly));
        dispatch(getDailyWeather(data.daily));
    } catch (error) {

    } finally {

    }
}