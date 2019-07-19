import * as actionTypes from './actionTypes';
import axios from 'axios';

export const authStart = () => {
    return {
        type:actionTypes.AUTH_START
    }
};

export const authSuccess= (idToken,userId) => {
    return {
        type:actionTypes.AUTH_SUCCESS,
        idToken: idToken,
        userId: userId
    }
};

export const authFail = (error) => {
    return {
        type:actionTypes.AUTH_FAIL,
        error:error
    }
};

export const authLogout = () => {
    // localStorage.removeItem('expirationTime');
    // localStorage.removeItem('idToken');
    // localStorage.removeItem('userId')
    return {
        type: actionTypes.AUTH_LOGOUT_INITIATE
    }
}

export const authLogoutSuccess = () => {
    return {
        type: actionTypes.AUTH_LOGOUT
    }
}



export const checkAuthTimeOut = (expirationTime) => {
    return {type:actionTypes.AUTH_CHECK_TIMEOUT,
    expirationTime:expirationTime}
}

export const authentication = (email,password,isSignUp) => {
    return {
        type:actionTypes.AUTH_USER,
        email,
        password,
        isSignUp
    }
}

export const setAuthRedirectPath = (path) => {
    return {
        type:actionTypes.SET_AUTH_REDIRECT_PATH,
        path:path
    }
}

export const authCheckState = () => {
    return {
        type:actionTypes.CHECK_AUTH_STATE_SAGA
    }
}