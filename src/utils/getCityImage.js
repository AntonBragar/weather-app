import axios from "axios";

const accessKey = `21146300-df17acb11e029d73c17341eff` //pixabay

export const getCityImage = async (cityName) => {
    const {data: {hits}} = await axios.get(`https://pixabay.com/api/?key=${accessKey}&q=${cityName}-city&image_type=photo`)
    if (hits.length === 0) {
        const {data: {hits}} = await axios.get(`https://pixabay.com/api/?key=${accessKey}&q=landscape`)
        const getPicturesURLSArray = hits.map(({largeImageURL}) => largeImageURL)
        return getRandomImage(getPicturesURLSArray)
    }
    const getPicturesURLSArray = hits.map(({largeImageURL}) => largeImageURL)
    return getRandomImage(getPicturesURLSArray)
}

const getRandomImage = (somePicturesArray) => {
    const getRandomIndex = () => {
        return Math.floor(Math.random() * (somePicturesArray.length - 1) + 1);
    }
    return somePicturesArray[getRandomIndex()]
}