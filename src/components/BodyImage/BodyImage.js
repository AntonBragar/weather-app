import React, {useEffect, useState} from 'react';
import {BackgroundImageDiv} from "./BodyImageStyled";
import {useSelector} from "react-redux";
import {getSearchCoordSelector} from "../../redux/coords/coordSelectors";
import {getCityImage} from "../../utils/getCityImage";

const BodyImage = () => {
    const [backgroundImageURL, setBackgroundImageURL] = useState()

    const {name} = useSelector(getSearchCoordSelector)

    useEffect(() => {
        name && getCityImage(name).then(imageUrl=>setBackgroundImageURL(imageUrl))
    }, [name])

    return (
        <BackgroundImageDiv url={backgroundImageURL}/>
    )
}

export default BodyImage;