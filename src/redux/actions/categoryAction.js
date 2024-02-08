import {GET_ALL_CATEGORY, GET_ERROR , GET_ONE_CATEGORY , CREATE_CATEGORY} from '../type'

import useGetData from '../../Hooks/useGetData'
import { useInsertDataWithImage } from '../../Hooks/useInsertData';


// Get All category
export const getAllCategory = (limit) => async (dispatch) => {
    try {
        const res = await useGetData(`/api/v1/categories?limit=${limit}`);
        dispatch({
            type: GET_ALL_CATEGORY,
            payload: res
        });
    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Error: " + e.message // Assuming e is an Error object
        });
    }
};


// Get Specifc category
export const getOneCategory = (id) => async (dispatch) => {
    try {
        const res = await useGetData(`/api/v1/categories/${id}`);
        dispatch({
            type: GET_ONE_CATEGORY,
            payload: res
        });
    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Error: " + e.message // Assuming e is an Error object
        });
    }
};

// Get All category with Pagination
export const getAllCategoryPage = (page) => async (dispatch) => {
    try {
        const res = await useGetData(`/api/v1/categories?limit=5&page=${page}`);
        dispatch({
            type: GET_ALL_CATEGORY,
            payload: res
        });
    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Error: " + e.message // Assuming e is an Error object
        });
    }
};

// Create Category
export const createCategory = (formData) => async (dispatch) => {
    try {
        const res = await useInsertDataWithImage(`/api/v1/categories`, formData);
        dispatch({
            type: CREATE_CATEGORY,
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

