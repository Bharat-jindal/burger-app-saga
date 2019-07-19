import {put} from 'redux-saga/effects';
import * as actions from '../actions/index';
import axios from '../../axiosOreders';

export function* initIngredientsSaga (action){
    try{
        const response=yield axios.get('https://react-burger-app-773ea.firebaseio.com/ingredients.json')
        yield put(actions.setIngredients(response.data))
    }catch(error){
        yield put(actions.fetchStateError());
    }
}