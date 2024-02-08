import { GET_ALL_BRAND, CREATE_BRAND, GET_ERROR } from '../type';

const initial = {
    brands: [],
    loading: true,
    error: null, // Include an error field in your initial state
};

const brandReducer = (state = initial, action) => {
    switch (action.type) {
        case GET_ALL_BRAND:
            return {
                ...state,
                brands: action.payload,
                loading: false
            };
        case CREATE_BRAND:
            return {
                ...state, // Spread the existing state
                brands: [...state.brands, action.payload],
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

export default brandReducer;
