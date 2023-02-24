import {
    ADMIN_ADD_DRESS_FAILURE,
    ADMIN_ADD_DRESS_REQUEST,
    ADMIN_ADD_DRESS_SUCCESS,
    ADMIN_DELETE_DRESS_FAILURE,
    ADMIN_DELETE_DRESS_REQUEST,
    ADMIN_DELETE_DRESS_SUCCESS,
    ADMIN_GET_DRESS_FAILURE,
    ADMIN_GET_DRESS_REQUEST,
    ADMIN_GET_DRESS_SUCCESS,
    ADMIN_SINGLE_DRESS_FAILURE,
    ADMIN_SINGLE_DRESS_REQUEST,
    ADMIN_SINGLE_DRESS_SUCCESS,
    ADMIN_UPDATE_DRESS_FAILURE,
    ADMIN_UPDATE_DRESS_REQUEST,
    ADMIN_UPDATE_DRESS_SUCCESS,
  } from "./actionTypes";
  
  const initialState = {
    dresses: [],
    dress: {},
    isLoading: false,
    isError: false,
  };
  
  const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case ADMIN_GET_DRESS_REQUEST:
        return {
          ...state,
          isLoading: true,
        };
      case ADMIN_GET_DRESS_SUCCESS:
        return {
          ...state,
          isLoading: false,
          dresses: payload,
        };
      case ADMIN_GET_DRESS_FAILURE:
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
      case ADMIN_SINGLE_DRESS_REQUEST:
        return {
          ...state,
          isLoading: true,
        };
      case ADMIN_SINGLE_DRESS_SUCCESS:
        return {
          ...state,
          isLoading: false,
          dress: payload,
        };
      case ADMIN_SINGLE_DRESS_FAILURE:
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
      case ADMIN_ADD_DRESS_REQUEST:
        return {
          ...state,
          isLoading: true,
        };
      case ADMIN_ADD_DRESS_SUCCESS:
        return {
          ...state,
          isLoading: false,
          dresses: [...state.dresses, payload],
        };
      case ADMIN_ADD_DRESS_FAILURE:
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
      case ADMIN_UPDATE_DRESS_REQUEST:
        return {
          ...state,
          isLoading: true,
        };
      case ADMIN_UPDATE_DRESS_SUCCESS:
        return {
          ...state,
          isLoading: false,
        };
      case ADMIN_UPDATE_DRESS_FAILURE:
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
      case ADMIN_DELETE_DRESS_REQUEST:
        return {
          ...state,
          isLoading: true,
        };
      case ADMIN_DELETE_DRESS_SUCCESS:
        const filteredTasks = state.dresses.filter((item) => {
          return item.id !== payload;
        });
        return {
          ...state,
          isLoading: false,
          dresses: filteredTasks,
        };
      case ADMIN_DELETE_DRESS_FAILURE:
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
  