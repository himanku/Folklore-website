import {
  ADMIN_ADD_FURNITURE_FAILURE,
  ADMIN_ADD_FURNITURE_REQUEST,
  ADMIN_ADD_FURNITURE_SUCCESS,
  ADMIN_DELETE_FURNITURE_FAILURE,
  ADMIN_DELETE_FURNITURE_REQUEST,
  ADMIN_DELETE_FURNITURE_SUCCESS,
  ADMIN_GET_FURNITURE_FAILURE,
  ADMIN_GET_FURNITURE_REQUEST,
  ADMIN_GET_FURNITURE_SUCCESS,
  ADMIN_SINGLE_FURNITURE_FAILURE,
  ADMIN_SINGLE_FURNITURE_REQUEST,
  ADMIN_SINGLE_FURNITURE_SUCCESS,
  ADMIN_UPDATE_FURNITURE_FAILURE,
  ADMIN_UPDATE_FURNITURE_REQUEST,
  ADMIN_UPDATE_FURNITURE_SUCCESS,
} from "./actionTypes";

const initialState = {
  furnitures: [],
  furniture: {},
  brands: [],
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADMIN_GET_FURNITURE_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ADMIN_GET_FURNITURE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        furnitures: payload,
      };
    case ADMIN_GET_FURNITURE_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case ADMIN_SINGLE_FURNITURE_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ADMIN_SINGLE_FURNITURE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        furniture: payload,
      };
    case ADMIN_SINGLE_FURNITURE_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case ADMIN_ADD_FURNITURE_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ADMIN_ADD_FURNITURE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        furnitures: [...state.furnitures, payload],
      };
    case ADMIN_ADD_FURNITURE_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case ADMIN_UPDATE_FURNITURE_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ADMIN_UPDATE_FURNITURE_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case ADMIN_UPDATE_FURNITURE_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case ADMIN_DELETE_FURNITURE_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ADMIN_DELETE_FURNITURE_SUCCESS:
      const filteredTasks = state.furnitures.filter((item) => {
        return item.id !== payload;
      });
      return {
        ...state,
        isLoading: false,
        furnitures: filteredTasks,
      };
    case ADMIN_DELETE_FURNITURE_FAILURE:
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
