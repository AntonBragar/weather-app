import React from 'react';
import {CitatesWrapper} from "./CitatesStyled";

const Citates = () => {
    return (
        <CitatesWrapper className="container">
            <div className="quotes">
                <p className="quote">
                    Who cares about the clouds when we're together?
                    Just sing a song, and bring the sunny weather.
                </p>
                <p className="author">Dale Evans</p>
            </div>
        </CitatesWrapper>
    );
};

export default Citates;
