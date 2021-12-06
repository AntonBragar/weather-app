// const URL = `https://test-35238-default-rtdb.firebaseio.com/`;
// const BASE = `phoneBook.json`;
// export const addALLContactOptions = () => async (dispatch, getState) => {
//     dispatch(setLoading())
//     try {
//         const { data } = await axios.get(URL + BASE);
//         if (data) {
//             const contacts = Object.keys(data).map((key) => ({
//                 id: key,
//                 ...data[key],
//             }));
//             dispatch(addALLContact(contacts));
//         } else return;
//     } catch (error) {
//         dispatch(setError(toast.error(`☠️Oh damn it ${error.message}!!`)));
//     } finally {
//         dispatch(setLoading());
//     }
// };


import axios from "axios";
import {addSearchCoordAction} from "../coords/coordActions";

const API_KEY = "48bbbb719c2c5b12dc6d3c6ec2e60cd2";

export const getCoordsOperation = (city) => async (dispatch) => {
    try {
        const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`)
        console.log(data)
        const {coord, name, sys:{country}, main:{temp,temp_max, temp_min}} = data;
        dispatch(addSearchCoordAction({...coord,name,country,temp,temp_max,temp_min}));
    } catch (error) {

    } finally {

    }
}