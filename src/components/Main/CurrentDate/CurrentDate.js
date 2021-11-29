import React from 'react';
import {FavoriteCurrentDateWrapper} from "./CurrentDateStyled";
import wether from '../../../img/wether.png'

const CurrentDate = () => {
    return (
        <FavoriteCurrentDateWrapper className="container">
            <div className='favoriteBox'>
                <div className='itemsBox'>
                    <div className='weatherAndLocation'>
                        <img className='weatherImage' src={wether}/>
                        <p className="location">Kyiv,UA</p>
                    </div>
                    <div className='temperature'>
                        <p className='tempBigNum'>-3</p>
                        <ul className='tempList'>
                            <li className='tempItem'>
                                <span className='tempTitle'>min</span>
                                <span className='tempNum'>-2&#176;</span>
                            </li>
                            <li className='tempItem'>
                                <span className='tempTitle'>max</span>
                                <span className='tempNum'>-3&#176;</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </FavoriteCurrentDateWrapper>
    );
};

export default CurrentDate;
