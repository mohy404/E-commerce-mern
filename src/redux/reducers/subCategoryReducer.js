import {CREATE_SUBCATEGORY, GET_SUBCATEGORY, GET_ERROR } from '../type'

const initial = {
    subcategory: [],
    loading: true,
    error: null, // Include an error field in your initial state
};

const subcategoryReducer = (state = initial, action) => {
    switch (action.type) {
        case CREATE_SUBCATEGORY:
            return {
                ...state, // Spread the existing state
                subcategory:  action.payload,
                loading: false
            };
            case GET_SUBCATEGORY:  
                return {
                    subcategory:  action.payload,
                    loading: false
                };
        case GET_ERROR:
            return {
                ...state, // Spread the existing state
                loading: false,
                error: action.payload, // Assuming action.payload contains error info
            };
        default:
            return state;
    }
};

export default subcategoryReducer;
