import {
    ADMIN_GET_USERS_FAILURE,
    ADMIN_GET_USERS_REQUEST,
    ADMIN_GET_USERS_SUCCESS
  } from "./actionTypes";
  
  const initialState = {
    users: [],
    user: {},
    isLoading: false,
    isError: false,
  };
  
  const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case ADMIN_GET_USERS_REQUEST:
        return {
          ...state,
          isLoading: true,
        };
      case ADMIN_GET_USERS_SUCCESS:
        return {
          ...state,
          isLoading: false,
          users: payload,
        };
      case ADMIN_GET_USERS_FAILURE:
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
      default:
        return state;
    }
  };
  
  export { reducer };
  