import {  combineReducers, configureStore } from "@reduxjs/toolkit";
import {addFavoriteReducer} from "./favorites/favoritesReducers";
import {addSearchCoordReducer} from "./coords/coordReducers";
import weatherReducer from "./weather/weatherSlice"

const rootReducer = combineReducers({
    favorite: addFavoriteReducer,
    coords: addSearchCoordReducer,
    weather: weatherReducer,
})
const store = configureStore({
    reducer: rootReducer
})
export default store