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
  GET_FURNITURE_FAILURE,
  GET_FURNITURE_REQUEST,
  GET_FURNITURE_SUCCESS,
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
    case GET_FURNITURE_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_FURNITURE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        furnitures: payload,
      };
    case GET_FURNITURE_FAILURE:
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
      let updatedata=state.furnitures.map((el)=>{
        if(el._id===payload._id){
          el={...el,...payload}
          return el
        } else {
          return el
        }
      });
      return { 
        ...state, 
        isLoading: false,
        furnitures:updatedata
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
      const filteredTasks = state.furnitures.filter((item) => item._id !== payload);
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
