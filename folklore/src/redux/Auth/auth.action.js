import * as types from "./auth.actionTypes";
import { AddUserApi,LoginApi } from "./auth.api";


export const Signin=( user)=>async(dispatch)=>{
  dispatch({ type: types.ADD_USER_LOADING });
  console.log(user,"11111111111111111")

  try {

    let data = await AddUserApi(user);
    dispatch({ type: types.ADD_USER_SUCCESS, payload: data });


  } catch (error) {
    dispatch({ type: types.ADD_USER_ERROR });

  }

}

export const Login=( user={})=>async(dispatch)=>{
  dispatch({ type: types.GET_USER_LOADING });


  try {
      let data = await LoginApi(user);
    dispatch({ type: types.GET_USER_SUCCESS, payload: data});
  } catch (error) {
    dispatch({ type: types.GET_USER_ERROR });
  }

}