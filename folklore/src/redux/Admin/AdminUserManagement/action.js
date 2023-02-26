import axios from "axios";
import { ADMIN_GET_USERS_FAILURE, ADMIN_GET_USERS_REQUEST, ADMIN_GET_USERS_SUCCESS, SINGLE_USER_FAILURE, SINGLE_USER_REQUEST, SINGLE_USER_SUCCESS, UPDATE_USER_FAILURE, UPDATE_USER_REQUEST, UPDATE_USER_SUCCESS } from "./actionTypes";

export const getUsers = () => (dispatch) => {
    dispatch({type: ADMIN_GET_USERS_REQUEST});
    return axios.get(`https://vast-puce-mussel-tie.cyclic.app/users`)
    .then((res) => {
        dispatch({type: ADMIN_GET_USERS_SUCCESS, payload: res.data});
    })
    .catch((err) => {
        dispatch({type: ADMIN_GET_USERS_FAILURE})
    })
}

export const UpdateUser = (id, payload) => (dispatch) => {
    console.log("payload", payload)
    dispatch({type: UPDATE_USER_REQUEST});
    return axios.patch(`https://vast-puce-mussel-tie.cyclic.app/users/update/${id}`, payload)
    .then((res) =>{
        dispatch({type: UPDATE_USER_SUCCESS, payload: res.data});
        console.log(res.data)
    })
    .catch((err) => {
        dispatch({type: UPDATE_USER_FAILURE})
    })
  };

export const getSingleUser = (id) => (dispatch) => {
    dispatch({type: SINGLE_USER_REQUEST});
    return axios.get(`https://vast-puce-mussel-tie.cyclic.app/users/${id}`)
    .then((res) => {
        dispatch({type: SINGLE_USER_SUCCESS, payload: res.data});
        //console.log(res.data)
    })
    .catch((err) => {
        dispatch({type: SINGLE_USER_FAILURE});
        console.log(err);
    })
}