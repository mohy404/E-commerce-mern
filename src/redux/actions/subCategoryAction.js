import {CREATE_SUBCATEGORY, GET_SUBCATEGORY, GET_ERROR } from '../type'

import { useInsertData } from '../../Hooks/useInsertData';
import useGetData from '../../Hooks/useGetData';

// Create subCategory
export const createSubCategory = (data) => async (dispatch) => {
    try {
        const res = await useInsertData("/api/v1/subcategories", data);
        dispatch({
            type: CREATE_SUBCATEGORY,
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

// Get subCategory  depemd in Id
export const getSubCategoryById = (id) => async (dispatch) => {
    try {
        const res = await useGetData(`/api/v1/categories/${id}/subcategories`);
        // console.log(res.data)
        dispatch({
            type: GET_SUBCATEGORY,
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

