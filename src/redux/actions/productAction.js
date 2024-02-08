import {CREATE_PRODUCT , GET_ALL_PRODUCTS, GET_ONE_PRODUCT,  GET_ERROR} from '../type'

import { useInsertDataWithImage } from '../../Hooks/useInsertData';
import  useGetData  from '../../Hooks/useGetData';

export const createProduct = (formData) => async (dispatch) => {
    try {
        const res = await useInsertDataWithImage("/api/v1/products", formData);
        dispatch({
            type: CREATE_PRODUCT,
            payload: res,
            loading: true
        });
    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Error: " + e.message // Assuming e is an Error object
        });
    }
};


export const getAllProducts = () => async (dispatch) => {
    try {
        const res = await useGetData("/api/v1/products");
        dispatch({
            type: GET_ALL_PRODUCTS,
            payload: res,
            loading: true
        });
    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Error: " + e.message // Assuming e is an Error object
        });
    }
};

export const getOneProduct = (id) => async (dispatch) => {
    try {
        const res = await useGetData(`/api/v1/products/${id}`);
        dispatch({
            type: GET_ONE_PRODUCT,
            payload: res,
            loading: true
        });
    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Error: " + e.message // Assuming e is an Error object
        });
    }
};