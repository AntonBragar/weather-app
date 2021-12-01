import {  combineReducers, configureStore } from "@reduxjs/toolkit";
import {addFavoriteReducer} from "./favorites/favoritesReducers";

const rootReducer = combineReducers({
    favorite: addFavoriteReducer,
})
const store = configureStore({
    reducer: rootReducer
})
export default store