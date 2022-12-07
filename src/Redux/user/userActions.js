import { FETCH_USER_REQUEST, FETCH_USER_FAILURE, FETCH_USER_SUCCESS } from "./userTypes";
import axios from "axios";

const fetchUserRequest = () => {
    return {
        type: FETCH_USER_REQUEST
    }
}

const fetchUserData = users => {
    return {
        type: FETCH_USER_SUCCESS,
        payload: users
    }
}

const fetchUserError = error => {
    return {
        type: FETCH_USER_REQUEST,
        payload: error
    }
}

export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUserRequest)
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response => {
            console.log(response.data)
            const users = response.data;
            dispatch(fetchUserData(users))
        })
        .catch(error => {
            dispatch(fetchUserError(error.message))
        })
    }
}