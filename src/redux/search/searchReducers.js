import {createReducer} from "@reduxjs/toolkit";
import {addSearchCity} from "./searchActions";

export const addSearchCityReducer = createReducer("", {
    [addSearchCity]: (_, {payload}) => payload,
});