import {createReducer} from "@reduxjs/toolkit";
import { addSearchCoordAction} from "./coordActions";

export const addSearchCoordReducer = createReducer({}, {
    [addSearchCoordAction]: (_, {payload}) => payload,
});