import * as actionTypes from './actionTypes';

export const purchaseBurgerSuccess = (id,orderData) => {
    return {
        type:actionTypes.PURCHASE_BURGER_SUCCESS,
        orderData: orderData,
        orderId: id
    }
}

export const purchaseBurgerFail = (error) => {
    return {
        type:actionTypes.PURCHASE_BURGER_FAIL,
        error:error
    }
}

export const purchaseBurgerStart = () => {
    return {
        type:actionTypes.PURCHASE_BURGER_START,
    }
}

export const purchaseBurger= (orderData,token) => {
    return {
        type: actionTypes.PURCHASE_BURGER,
        orderData,
        token
    }

}

export const purchaseInit = () => {
    return {
        type:actionTypes.INIT_PURCHASE
    }
}

export const fetchOrderStart = () => {
    return{
        type:actionTypes.FETCH_ORDERS_START
    }
}

export const fetchOrderSuccess = (orders) => {
    return{
        type:actionTypes.FETCH_ORDERS_SUCCESS,
        orders:orders
    }
}

export const fetchOrderFail = (error) => {
    return{
        type:actionTypes.FETCH_ORDERS_FAIL,
        error:error
    }
}

export const fetchOrders = (token,userId) => {
    return {
        type:actionTypes.FETCH_ORDERS,
        token,
        userId
    }
}