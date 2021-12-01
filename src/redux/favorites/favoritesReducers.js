import {createReducer} from "@reduxjs/toolkit";
import {addFavorite} from "./favoritesActions";
import {generate} from "shortid"

export const addFavoriteReducer = createReducer([], {
    [addFavorite]: (state, {payload}) =>  ([...state, {city: payload, id: generate()}]),
})
