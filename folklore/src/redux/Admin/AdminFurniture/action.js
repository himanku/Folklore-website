import axios from "axios"
import {ADMIN_ADD_FURNITURE_FAILURE, ADMIN_ADD_FURNITURE_REQUEST, ADMIN_ADD_FURNITURE_SUCCESS, ADMIN_DELETE_FURNITURE_FAILURE, ADMIN_DELETE_FURNITURE_REQUEST, ADMIN_DELETE_FURNITURE_SUCCESS, ADMIN_GET_FURNITURE_FAILURE, ADMIN_GET_FURNITURE_REQUEST, ADMIN_GET_FURNITURE_SUCCESS, ADMIN_SINGLE_FURNITURE_FAILURE, ADMIN_SINGLE_FURNITURE_REQUEST, ADMIN_SINGLE_FURNITURE_SUCCESS, ADMIN_UPDATE_FURNITURE_FAILURE, ADMIN_UPDATE_FURNITURE_REQUEST, ADMIN_UPDATE_FURNITURE_SUCCESS} from "./actionTypes";

//get furnitures
export const getFurniture = (page, search, sort, brand) => (dispatch) => {
    dispatch({type: ADMIN_GET_FURNITURE_REQUEST});
    return axios.get(`http://localhost:8080/sofas?page=${page}&search=${search}&brand=${brand.toString()}&sort=${sort.sort},${sort.order}`)
    .then((res) => {
        dispatch({type: ADMIN_GET_FURNITURE_SUCCESS, payload: res.data});
        //console.log(res.data)
    })
    .catch((err) => {
        dispatch({type: ADMIN_GET_FURNITURE_FAILURE})
    })
}

//http://localhost:8080/sofas?page=${page}&sort=${sort.sort},${sort.order}&brand=${brand.toString()}$search=${search}

//add task
export const addFurniture = (payload) => (dispatch) => {
    dispatch({type: ADMIN_ADD_FURNITURE_REQUEST})
    return axios.post(`http://localhost:8080/sofas/addsofa`, payload)
    .then((res) => {
        dispatch({type: ADMIN_ADD_FURNITURE_SUCCESS, payload: res.data});
        console.log(res.data);
    })
    .catch((err) => {
        dispatch({type: ADMIN_ADD_FURNITURE_FAILURE})
    })
}

//update FURNITURE
export const updateFurniture = (id, payload) => (dispatch) => {
    dispatch({type: ADMIN_UPDATE_FURNITURE_REQUEST})
    return axios.put(`http://localhost:8080/sofas/update/${id}`, payload)
    .then((res) => {
        dispatch({type: ADMIN_UPDATE_FURNITURE_SUCCESS});
    })
    .catch((err) => {
        dispatch({type: ADMIN_UPDATE_FURNITURE_FAILURE})
    })
}

//delete task
export const deleteFurniture = (id) => (dispatch) => {
    dispatch({type: ADMIN_DELETE_FURNITURE_REQUEST})
    return axios.delete(`http://localhost:8080/sofas/delete/${id}`)
    .then((res) => {
        dispatch({type: ADMIN_DELETE_FURNITURE_SUCCESS, payload: id});
    })
    .catch((err) => {
        dispatch({type: ADMIN_DELETE_FURNITURE_FAILURE})
    })
}

//singleUser
export const getSinglePageData = (id) => (dispatch) => {
    dispatch({type: ADMIN_SINGLE_FURNITURE_REQUEST})
    return axios.get(`https://apple-api.onrender.com/ipad/${id}`)
    .then((res) => {
        dispatch({type: ADMIN_SINGLE_FURNITURE_SUCCESS, payload: res.data});
        console.log(res.data)
    })
    .catch((err) => {
        dispatch({type: ADMIN_SINGLE_FURNITURE_FAILURE})
        console.log(err)
    })
}
