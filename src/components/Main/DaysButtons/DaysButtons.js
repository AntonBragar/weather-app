import React from 'react';
import {DaysButtonsWrapper} from "./DaysButtonsStyled";
import {useDispatch} from "react-redux";
import {dayIsToggled, fiveDaysIsToggled} from "../../../redux/daysButtons/daysButtonsSlice";

const DaysButtons = () => {

    const dispatch = useDispatch();

    const onClickHandler = (e) => {
        const {id} = e.target;
        if (id === "today") {
            dispatch(dayIsToggled())
        } else if (id === "fiveDays") {
            dispatch(fiveDaysIsToggled())
        }
    }

    return (
        <DaysButtonsWrapper className="container">
            <div className="buttonsBox">
                <button className="button today" id="today" onClick={onClickHandler}>today</button>
                <button className="button fiveDays" id="fiveDays" onClick={onClickHandler}>5 days</button>
            </div>
        </DaysButtonsWrapper>
    );
};

export default DaysButtons;
