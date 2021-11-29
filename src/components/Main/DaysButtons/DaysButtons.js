import React from 'react';
import {DaysButtonsWrapper} from "./DaysButtonsStyled";

const DaysButtons = () => {
    return (
        <DaysButtonsWrapper className="container">
            <div className="buttonsBox">
                <button className="button today">today</button>
                <button className="button fiveDays">5 days</button>
            </div>
        </DaysButtonsWrapper>
    );
};

export default DaysButtons;
