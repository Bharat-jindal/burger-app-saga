import * as actionTypes from './actionTypes';

export const addIngredient = (ingName) => {
    return {
        type:actionTypes.ADD_INGREDIENTS,
            ingredientName:ingName
    }
}

export const removeIngredient = (ingName) => {
    return {
        type:actionTypes.REMOVE_INGREDIENTS,
            ingredientName:ingName
    }
}

export const setIngredients =(ingredients) => {
    return{
        type:actionTypes.INIT_INGREDIENTS,
            ingredients:ingredients
    }
}

export const fetchStateError = () => {
    return {
        type:actionTypes.FETCH_STATE_ERROR,
    }
}

export const initIngredient = () => {
    return {
        type:actionTypes.INIT_INGREDIENTS_SAGA
    }
}