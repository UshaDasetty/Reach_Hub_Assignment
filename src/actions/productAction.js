import axios from "axios";

import {
    ALL_PRODUCT_FAIL,
    ALL_PRODUCT_REQUEST,
    ALL_PRODUCT_SUCCESS,

    PRODUCT_DETAILS_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,

    CLEAR_ERRORS,
} from "../constants/productConstants.js";


export const getProducts = () => async (dispatch) => {
    try {
        dispatch({ type: ALL_PRODUCT_REQUEST });

        const resposne = await axios.get("https://dummyjson.com/products");
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


export const getProductsDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_DETAILS_REQUEST });

        const response = await axios.get(`https://dummyjson.com/products/${id}`);
        console.log("Reponse...", response);
        let data = {}
        if (response.status === 200) {
            data = response.data
        }

        dispatch({
            type: PRODUCT_DETAILS_SUCCESS,
            payload: data,
        });

    } catch (error) {
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload: error,
        });

    }
};

export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS,
    })
}