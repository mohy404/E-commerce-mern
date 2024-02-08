import {
  CREATE_PRODUCT,
  GET_ALL_PRODUCTS,
  GET_ONE_PRODUCT,
  GET_ERROR,
} from "../type";

const initial = {
  products: [],
  allProducts: [],
  oneProduct: [],
  loading: true,
  error: null, // Include an error field in your initial state
};

const productReducer = (state = initial, action) => {
  switch (action.type) {
    case CREATE_PRODUCT:
      return {
        ...state, // Spread the existing state
        products: action.payload,
        loading: false,
      };
    case GET_ALL_PRODUCTS:
      return {
        ...state, // Spread the existing state
        allProducts: action.payload,
        loading: false,
      };
    case GET_ONE_PRODUCT:
      return {
        oneProduct: action.payload,
        loading: false,
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

export default productReducer;
