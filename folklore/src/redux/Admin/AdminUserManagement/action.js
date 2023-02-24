import axios from "axios";
import { ADMIN_GET_USERS_FAILURE, ADMIN_GET_USERS_REQUEST, ADMIN_GET_USERS_SUCCESS } from "./actionTypes";

export const getUsers = () => (dispatch) => {
    dispatch({type: ADMIN_GET_USERS_REQUEST});
    return axios.get(`http://localhost:8080/users`)
    .then((res) => {
        dispatch({type: ADMIN_GET_USERS_SUCCESS, payload: res.data});
        //console.log(res.data)
    })
    .catch((err) => {
        dispatch({type: ADMIN_GET_USERS_FAILURE})
    })
}