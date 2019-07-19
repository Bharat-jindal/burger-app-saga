import {takeEvery} from 'redux-saga/effects';

import {logoutSaga,checkAuthTimoutSaga,authsaga,authCheckStateSaga} from './authSaga';
import {initIngredientsSaga} from './burgerBuilderSaga';
import {purchaseBurgerSaga,fetchOrdersSaga} from './orderSaga'
import * as actiontypes from '../actions/actionTypes';

export function* watchAuth () {
    yield takeEvery(actiontypes.AUTH_CHECK_TIMEOUT,checkAuthTimoutSaga);
    yield takeEvery(actiontypes.AUTH_LOGOUT_INITIATE,logoutSaga);
    yield takeEvery(actiontypes.AUTH_USER,authsaga);
    yield takeEvery(actiontypes.CHECK_AUTH_STATE_SAGA,authCheckStateSaga);
    
}
export function* watchBurgerBuilder (){
    yield takeEvery(actiontypes.INIT_INGREDIENTS_SAGA,initIngredientsSaga)
}

export function* watchOrder (){
    yield takeEvery(actiontypes.PURCHASE_BURGER,purchaseBurgerSaga);
    yield takeEvery(actiontypes.FETCH_ORDERS,fetchOrdersSaga);
}