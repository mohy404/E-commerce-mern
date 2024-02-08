import { GET_ALL_CATEGORY, CREATE_CATEGORY, GET_ONE_CATEGORY, GET_ERROR } from '../type';

const initial = {
    category: [],
    oneCategory: {},
    loading: true,
    error: null,
};

const categoryReducer = (state = initial, action) => {
    switch (action.type) {
        case GET_ALL_CATEGORY:
            return {
                ...state,
                category: action.payload,
                loading: false,
            };
        case GET_ONE_CATEGORY:
            return {
                ...state,
                oneCategory: action.payload, // Assuming oneCategory should be an object
                loading: false,
            };
        case CREATE_CATEGORY:
            return {
                ...state,
                // If action.payload is a new category object, add it to the category array
                category: [...state.category, action.payload],
                loading: false,
            };
        case GET_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload, // Assuming action.payload contains error information
            };
        default:
            return state;
    }
};

export default categoryReducer;
