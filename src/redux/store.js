import {  combineReducers, configureStore } from "@reduxjs/toolkit";
import {addFavoriteReducer} from "./favorites/favoritesReducers";
import {addSearchCoordReducer} from "./coords/coordReducers";
import weatherReducer from "./weather/weatherSlice"
import togglerReducer from "./daysButtons/daysButtonsSlice"

const rootReducer = combineReducers({
    favorite: addFavoriteReducer,
    coords: addSearchCoordReducer,
    weather: weatherReducer,
    isToggled: togglerReducer,
})
const store = configureStore({
    reducer: rootReducer
})
export default store