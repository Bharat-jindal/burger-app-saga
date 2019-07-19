import {put,delay} from 'redux-saga/effects'
import * as actions from '../actions/index';
import axios from 'axios'

export function* logoutSaga (action){
    yield localStorage.removeItem('expirationTime');
    yield localStorage.removeItem('idToken');
    yield localStorage.removeItem('userId');
    yield put(actions.authLogoutSuccess())
}

export function* checkAuthTimoutSaga (action){
    yield delay(action.expirationTime*1000)
    yield put(actions.authLogout())
}

export function * authsaga (action){
    yield put(actions.authStart());
        const reqPayload={
            email:action.email,
            password: action.password,
            returnSecureToken: true
        }
        let URL ='https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyCKXyGN9Vm7nGSNPtYv9z09fBGS33FI9LM'
        if(!action.isSignUp){
            URL='https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyCKXyGN9Vm7nGSNPtYv9z09fBGS33FI9LM'
        }
        try{
            const response=yield axios.post(URL,reqPayload)

        const expirationTime=new Date(new Date().getTime()+response.data.expiresIn*1000);
        yield localStorage.setItem('idToken',response.data.idToken);
        yield localStorage.setItem('expirationTime',expirationTime);
        yield localStorage.setItem('userId',response.data.localId)
        yield put(actions.checkAuthTimeOut(response.data.expiresIn))
        yield put(actions.authSuccess(response.data.idToken,response.data.localId))
        }catch(err){
            let error= err
            if(err.response){
                error=err.response.data.error
            }
            yield put(actions.authFail(error.message))
        }
}

export function* authCheckStateSaga(action){
    const idToken =yield  localStorage.getItem('idToken')
       if(!idToken){
        yield put(actions.authLogout())
       }else{
        const expirationTime = new Date(yield localStorage.getItem('expirationTime'));
        if(expirationTime < new Date()){
            yield put(actions.authLogout())
        }else{
            const userId=yield localStorage.getItem('userId')
            yield put(actions.authSuccess(idToken,userId))
            yield put(actions.checkAuthTimeOut((expirationTime.getTime()-new Date().getTime())/1000))
        }
       }
}