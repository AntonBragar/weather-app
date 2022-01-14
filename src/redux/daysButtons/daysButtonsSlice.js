import {createSlice} from "@reduxjs/toolkit"

const daysButtonsSlice = createSlice({
    name: 'toggled',
    initialState: {
        todayToggle: true,
        fiveDaysToggle: false
    },
    reducers: {
        dayIsToggled(state) {
            state.todayToggle = true;
            state.fiveDaysToggle = false;
        },
        fiveDaysIsToggled(state) {
            state.fiveDaysToggle = true;
            state.todayToggle = false;
        },
    }
})

export const {dayIsToggled, fiveDaysIsToggled} = daysButtonsSlice.actions;

export default daysButtonsSlice.reducer;