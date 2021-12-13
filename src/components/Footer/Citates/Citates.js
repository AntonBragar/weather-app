import React, {useEffect, useState} from 'react';
import {CitatesWrapper} from "./CitatesStyled";
import axios from "axios";

const Citates = () => {

    const [quote, setQuote] = useState();

    const getQuote = async () => {
        const {data} = await axios.get(`https://goquotes-api.herokuapp.com/api/v1/random?count=1`)
        const {quotes} = data;
        setQuote(...quotes)
    }

    useEffect(() => {
        if (!quote) {
            getQuote();
        }
        let timerGetQuote = setInterval(getQuote, 120000)
        return () => {
            clearInterval(timerGetQuote)
        }
    }, [quote])

    return (
        <CitatesWrapper className="container">
            <div className="quotes">
                <p className="quote">
                    {quote?.text}
                </p>
                <p className="author">{quote?.author}</p>
            </div>
        </CitatesWrapper>
    );
};

export default Citates;
