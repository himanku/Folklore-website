import {
    ADMIN_GET_USERS_FAILURE,
    ADMIN_GET_USERS_REQUEST,
    ADMIN_GET_USERS_SUCCESS,
    SINGLE_USER_FAILURE,
    SINGLE_USER_REQUEST,
    SINGLE_USER_SUCCESS,
    UPDATE_USER_FAILURE,
    UPDATE_USER_REQUEST,
    UPDATE_USER_SUCCESS
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


      case UPDATE_USER_REQUEST:
        return {
          ...state,
          isLoading: true,
        };
      case UPDATE_USER_SUCCESS:
        let updated_data=state.users.map((el)=>{
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
          users:updated_data
        };
      case UPDATE_USER_FAILURE:
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
      case SINGLE_USER_REQUEST:
        return {
          ...state,
          isLoading: true,
        };
      case SINGLE_USER_SUCCESS:
        return {
          ...state,
          isLoading: false,
          user: payload,
        };
      case SINGLE_USER_FAILURE:
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
  