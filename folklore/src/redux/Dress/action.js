import axios from "axios";
import { GET_DRESS_FAILURE, GET_DRESS_REQUEST, GET_DRESS_SUCCESS, POST_DRESS_FAILURE, POST_DRESS_REQUEST, POST_DRESS_SUCCESS } from "./actionTypes"

const getDressRequest = () => {
    return { type: GET_DRESS_REQUEST };
}

const getDressSuccess = (payload) => {
    return { type: GET_DRESS_SUCCESS, payload };
}

const getDressFailure = () => {
    return { type: GET_DRESS_FAILURE };
}

const postAddToCart = (payload) => {
    return { type: POST_DRESS_SUCCESS, payload }
}



export const getDress = (params) => (dispatch) => {
    // const { brand, sort, order } = params;

    // console.log('brand: ',brand,'sort: ',sort,'order: ',order);
    // console.log('params: ', params);

    dispatch(getDressRequest());

    // axios.get(`${process.env.REACT_APP_API_URL}${brand}?sort=${sort || "rating"},${order || "asc"}`)
    // axios.get(`${process.env.REACT_APP_API_URL}${params.brand}`)
    axios.get(`https://vast-puce-mussel-tie.cyclic.app/dress?page=1&limit=30`)
        .then((res) => {
            // console.log(`${process.env.REACT_APP_API_URL}/dress`);
            dispatch(getDressSuccess(res.data))
        })
        .catch((error) => {
            dispatch(getDressFailure())
        });
}


export const singleDressData = (id) => (dispatch) => {
    // console.log(`${process.env.REACT_APP_API_URL}/${id}`)
    axios.get(`https://vast-puce-mussel-tie.cyclic.app/dress/${id}`)
        .then((res) => {
            dispatch(getDressSuccess(res.data))
        })
        .catch((error) => {
            dispatch(getDressFailure())
        })
}



export const addTocart = (payload) => (dispatch) => {
    dispatch({ type: POST_DRESS_REQUEST });

    return axios
        // .post(`${process.env.REACT_APP_API_URL}/carts/addtocart`, payload)
        .post(`https://vast-puce-mussel-tie.cyclic.app/carts/addtocart`, payload)
        .then((res) => {
            dispatch({ type: POST_DRESS_SUCCESS, payload: res.data })
        })
        .catch((error) => {
            dispatch({ type: POST_DRESS_FAILURE })
        })
};