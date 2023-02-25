import * as types from "./auth.actionTypes";
import { getItem, setItem } from "../../utility/localStorage";
const initialState = {
  isLoading: false,
  isError: false,
  userData: {},
  isAuth: false,
 


};

export const Authreducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.ADD_USER_LOADING: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case types.ADD_USER_SUCCESS: {
      
      return {
        ...state,
        isLoading: false,
        isError: false,
        isAuth: true,
      };
    }

    case types.ADD_USER_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    case types.GET_USER_LOADING: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case types.GET_USER_SUCCESS: {
      setItem("userData", payload);
      return {
        ...state,
        isLoading: false,
        isError: false,
        isAuth: true,
      };
    }

    case types.GET_USER_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

   
    default:
      return state;
  }
};