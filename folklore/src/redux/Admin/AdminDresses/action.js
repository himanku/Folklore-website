import axios from "axios"
import {ADMIN_ADD_DRESS_FAILURE, ADMIN_ADD_DRESS_REQUEST, ADMIN_ADD_DRESS_SUCCESS, ADMIN_DELETE_DRESS_FAILURE, ADMIN_DELETE_DRESS_REQUEST, ADMIN_DELETE_DRESS_SUCCESS, ADMIN_GET_DRESS_FAILURE, ADMIN_GET_DRESS_REQUEST, ADMIN_GET_DRESS_SUCCESS, ADMIN_SINGLE_DRESS_FAILURE, ADMIN_SINGLE_DRESS_REQUEST, ADMIN_SINGLE_DRESS_SUCCESS, ADMIN_UPDATE_DRESS_FAILURE, ADMIN_UPDATE_DRESS_REQUEST, ADMIN_UPDATE_DRESS_SUCCESS} from "./actionTypes";

//get DRESSs
export const getDress = (page, search, sort, brand) => (dispatch) => {
    dispatch({type: ADMIN_GET_DRESS_REQUEST});
    return axios.get(`http://localhost:8080/dress?page=${page}&search=${search}&brand=${brand.toString()}&sort=${sort.sort},${sort.order}`)
    .then((res) => {
        dispatch({type: ADMIN_GET_DRESS_SUCCESS, payload: res.data});
        console.log(res.data)
    })
    .catch((err) => {
        dispatch({type: ADMIN_GET_DRESS_FAILURE})
    })
}
//add task
export const addDress = (payload) => (dispatch) => {
    dispatch({type: ADMIN_ADD_DRESS_REQUEST})
    return axios.post(`http://localhost:8080/dress/`, payload)
    .then((res) => {
        dispatch({type: ADMIN_ADD_DRESS_SUCCESS, payload: res.data});
    })
    .catch((err) => {
        dispatch({type: ADMIN_ADD_DRESS_FAILURE})
    })
}

//update DRESS
export const updateDress = (id, payload) => (dispatch) => {
    dispatch({type: ADMIN_UPDATE_DRESS_REQUEST})
    return axios.put(`http://localhost:8080/dress/update/${id}`, payload)
    .then((res) => {
        dispatch({type: ADMIN_UPDATE_DRESS_SUCCESS});
    })
    .catch((err) => {
        dispatch({type: ADMIN_UPDATE_DRESS_FAILURE})
    })
}

//delete task
export const deleteDress = (id) => (dispatch) => {
    dispatch({type: ADMIN_DELETE_DRESS_REQUEST})
    return axios.delete(`http://localhost:8080/dress/delete/${id}`)
    .then((res) => {
        dispatch({type: ADMIN_DELETE_DRESS_SUCCESS, payload: id});
    })
    .catch((err) => {
        dispatch({type: ADMIN_DELETE_DRESS_FAILURE})
    })
}

//singleUser
export const getSinglePageData = (id) => (dispatch) => {
    dispatch({type: ADMIN_SINGLE_DRESS_REQUEST})
    return axios.get(`https://apple-api.onrender.com/ipad/${id}`)
    .then((res) => {
        dispatch({type: ADMIN_SINGLE_DRESS_SUCCESS, payload: res.data});
        console.log(res.data)
    })
    .catch((err) => {
        dispatch({type: ADMIN_SINGLE_DRESS_FAILURE})
        console.log(err)
    })
}
