import React, {useEffect, useState} from 'react';
import {BackgroundImageDiv} from "./BodyImageStyled";
import {useSelector} from "react-redux";
import {getSearchCoordSelector} from "../../redux/coords/coordSelectors";
import axios from "axios";

const BodyImage = () => {
    const [backgroundImageURL, setBackgroundImageURL] = useState()

    // const [picturesURLSArray, setPicturesURLSArray] = useState()

    const {name} = useSelector(getSearchCoordSelector)

    const accessKey = `21146300-df17acb11e029d73c17341eff` //pixabay

    const getPictures = async () => {
        const {data:{hits}} = await axios.get(`https://pixabay.com/api/?key=${accessKey}&q=${name}&image_type=photo`)
        let getPicturesURLSArray = hits.map(({largeImageURL}) => largeImageURL)
        // setPicturesURLSArray(getPicturesURLSArray)
        changePicture(getPicturesURLSArray)
    }

    const changePicture = (somePicturesArray) => {
        const getRandomIndex=()=>{
                return Math.floor(Math.random() * (19 - 1) + 1);
        }
            setBackgroundImageURL(somePicturesArray[getRandomIndex()])

            // let index = 0;
            // let interval = setInterval(() => {
            //     if (index >= somePicturesArray.length) {
            //         clearInterval(interval);
            //         // index = 0 //infinity change
            //     } else if (index <= somePicturesArray.length) {
            //         setBackgroundImageURL(somePicturesArray[index++])
            //     }
            // }, 5000)
    }

    useEffect(() => {
        name && getPictures();
    }, [name])

    return (
        <BackgroundImageDiv url={backgroundImageURL}/>
    )
}

export default BodyImage;