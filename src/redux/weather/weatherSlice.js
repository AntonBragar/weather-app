import {createSlice} from "@reduxjs/toolkit"

const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        current: {},
        hourly: [],
        daily: [],
    },
    reducers: {
        getCurrentWeather(state, {payload}) {
            state.current = payload
        },
        getHourlyWeather(state, {payload}) {
            state.hourly = payload
        },
        getDailyWeather(state, {payload}) {
            state.daily = payload
        }
    }
})

export const {getCurrentWeather, getHourlyWeather, getDailyWeather} = weatherSlice.actions;

export default weatherSlice.reducer;