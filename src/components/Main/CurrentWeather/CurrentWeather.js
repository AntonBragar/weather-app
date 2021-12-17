import {CurrentWeatherWrapper} from "./CurrentWeatherStyled";
import {useSelector} from "react-redux";
import {getSearchCoordSelector} from "../../../redux/coords/coordSelectors";
import {createWeatherIconSrc} from "../../../utils/createWeatherIconSrc";


const CurrentWeather = () => {

    const {name, country, temp, temp_max, temp_min, icon} = useSelector(getSearchCoordSelector);

    return (
        <CurrentWeatherWrapper className="container">
            <div className='favoriteBox'>
                <div className='itemsBox'>
                    <div className='weatherAndLocation'>
                        <img className='weatherImage' alt={'Weather Icon'} src={createWeatherIconSrc(icon)}/>
                        <p className="location">{name},{country}</p>
                    </div>
                    <div className='temperature'>
                        <p className='tempBigNum'>{Math.floor(temp) || '0'}</p>
                        <ul className='tempList'>
                            <li className='tempItem'>
                                <span className='tempTitle'>min</span>
                                <span className='tempNum'>{Math.floor(temp_min) || '0'}&#176;</span>
                            </li>
                            <li className='tempItem'>
                                <span className='tempTitle'>max</span>
                                <span className='tempNum'>{Math.floor(temp_max) || '0'}&#176;</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </CurrentWeatherWrapper>
    );
};

export default CurrentWeather;
