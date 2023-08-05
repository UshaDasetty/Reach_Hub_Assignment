import axios from "axios";

import {
    ALL_PRODUCT_FAIL,
    ALL_PRODUCT_REQUEST,
    ALL_PRODUCT_SUCCESS,
    CLEAR_ERRORS,
} from "../constants/productConstants.js";


export const getProducts = () => async (dispatch) => {
    try {
        dispatch({ type: ALL_PRODUCT_REQUEST });

        const resposne = await axios.get("https://dummyjson.com/products");
        console.log("response....", resposne);
        let data = []
        if (resposne.status === 200) {
            data = resposne.data.products
        }

        dispatch({
            type: ALL_PRODUCT_SUCCESS,
            payload: data,
        });

    } catch (error) {
        dispatch({
            type: ALL_PRODUCT_FAIL,
            payload: error,
        });
        console.log(error);
    }
};


export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS,
    })
}