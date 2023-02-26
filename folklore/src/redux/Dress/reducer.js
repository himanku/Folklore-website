import * as types from "./actionTypes";

const initState = {
    addtocart: [],
    dress: [],
    isLoading: false,
    isError: false
};

// action = { type, payload };
export const reducer = (state = initState, { type, payload }) => {
    switch (type) {
        case types.GET_DRESS_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case types.GET_DRESS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                dress: payload
            }
        case types.GET_DRESS_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        // add to cart
        case types.POST_DRESS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                addtocart: [...state.addtocart, payload]
            }
        default:
            return state;
    }
}
