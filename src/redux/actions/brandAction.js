import { GET_ALL_BRAND, CREATE_BRAND, GET_ERROR } from '../type';

import useGetData from '../../Hooks/useGetData'
import { useInsertDataWithImage } from '../../Hooks/useInsertData';


// Get All Brand
export const getAllBrand = (limit) => async (dispatch) => {
    try {
        const res = await useGetData(`/api/v1/brands?limit=${limit}`);
        dispatch({
            type: GET_ALL_BRAND,
            payload: res
        });
    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Error: " + e.message // Assuming e is an Error object
        });
    }
};

// Get All Brand with Pagination
export const getAllBrandPage = (page) => async (dispatch) => {
    try {
        const res = await useGetData(`/api/v1/brands?limit=5&page=${page}`);
        dispatch({
            type: GET_ALL_BRAND,
            payload: res
        });
    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Error: " + e.message // Assuming e is an Error object
        });
    }
};

// Create Brand
export const createBrand = (formData) => async (dispatch) => {
    try {
        const res = await useInsertDataWithImage(`/api/v1/brands`, formData);
        dispatch({
            type: CREATE_BRAND,
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