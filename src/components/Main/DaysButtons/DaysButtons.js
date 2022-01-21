import React from 'react';
import {DaysButtonsWrapper} from "./DaysButtonsStyled";
import {useDispatch, useSelector} from "react-redux";
import {dayIsToggled, fiveDaysIsToggled} from "../../../redux/daysButtons/daysButtonsSlice";
import {fiveDaysToggleSelector, todayToggleSelector} from "../../../redux/daysButtons/daysButtonsSelector";
import classNames from "classnames";

const DaysButtons = () => {
    const dispatch = useDispatch();

    const isTodayToggle = useSelector(todayToggleSelector)
    const isFiveDaysToggle = useSelector(fiveDaysToggleSelector)

    function onClickHandler(e) {
        const {id} = e.target;
        if (id === "today") {
            dispatch(dayIsToggled())
        } else if (id === "fiveDays") {
            dispatch(fiveDaysIsToggled())
        }
    }


    return (
        <DaysButtonsWrapper className="">
                <button className={`${classNames(isTodayToggle ? "active" : "")} button`} id="today" onClick={onClickHandler}>today</button>
                <button className={`${classNames(isFiveDaysToggle ? "active" : "")} button`} id="fiveDays" onClick={onClickHandler}>5 days</button>
        </DaysButtonsWrapper>
    );
};

export default DaysButtons;
