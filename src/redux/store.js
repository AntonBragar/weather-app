import {  combineReducers, configureStore } from "@reduxjs/toolkit";
import {addFavoriteReducer} from "./favorites/favoritesReducers";
import {addSearchCityReducer} from "./search/searchReducers";

const rootReducer = combineReducers({
    favorite: addFavoriteReducer,
    search: addSearchCityReducer,
})
const store = configureStore({
    reducer: rootReducer
})
export default store