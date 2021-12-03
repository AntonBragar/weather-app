import {createReducer} from "@reduxjs/toolkit";
import {addFavorite, deleteFavorite} from "./favoritesActions";
import {generate} from "shortid"

export const addFavoriteReducer = createReducer([], {
    [addFavorite]: (state, {payload}) => ([...state, {city: payload, id: generate()}]),
    [deleteFavorite]: (state, {payload}) => state.filter((city) => city.id !== payload),
})

