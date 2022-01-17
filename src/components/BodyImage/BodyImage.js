import React, {useEffect, useState} from 'react';
import {BackgroundImageDiv} from "./BodyImageStyled";
import {useSelector} from "react-redux";
import {getSearchCoordSelector} from "../../redux/coords/coordSelectors";
import axios from "axios";

const BodyImage = () => {
    const [backgroundImageURL, setBackgroundImageURL] = useState()

    const {name} = useSelector(getSearchCoordSelector)

    const accessKey = `21146300-df17acb11e029d73c17341eff` //pixabay

    const getPictures = async () => {
        const {data: {hits}} = await axios.get(`https://pixabay.com/api/?key=${accessKey}&q=${name}-city&image_type=photo`)
        console.log(hits)
        if (hits.length === 0) {
            const {data: {hits}} = await axios.get(`https://pixabay.com/api/?key=${accessKey}&q=landscape`)
            const getPicturesURLSArray = hits.map(({largeImageURL}) => largeImageURL)
            return changePicture(getPicturesURLSArray)
        }
        const getPicturesURLSArray = hits.map(({largeImageURL}) => largeImageURL)
        changePicture(getPicturesURLSArray)
    }

    const changePicture = (somePicturesArray) => {
        const getRandomIndex = () => {
            return Math.floor(Math.random() * (somePicturesArray.length - 1) + 1);
        }
        setBackgroundImageURL(somePicturesArray[getRandomIndex()])
    }

    useEffect(() => {
        name && getPictures();
    }, [name])

    return (
        <BackgroundImageDiv url={backgroundImageURL}/>
    )
}

export default BodyImage;