import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';
import {createStore,applyMiddleware,compose,combineReducers} from 'redux';
import {Provider} from 'react-redux';
import burgerBuilderReducer from './store/reducer/burgerBuilderRed';
import orderReducer from './store/reducer/orderRed'
import authReducer from './store/reducer/authRed'
import thunk from  'redux-thunk';
import createSagaMiddleWare from 'redux-saga';
import {watchAuth,
        watchOrder,
        watchBurgerBuilder} from './store/saga/index'

const composeEnhancers = process.env.NODE_ENV  ==='development'? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ :null|| compose;

const rootReducer = combineReducers({
    burgerBuilder:burgerBuilderReducer,
    order:orderReducer,
    auth: authReducer
})

const sagaMiddleWare=createSagaMiddleWare()

const store=createStore(rootReducer,composeEnhancers(
    applyMiddleware(thunk,sagaMiddleWare)
));

sagaMiddleWare.run(watchAuth);
sagaMiddleWare.run(watchOrder);
sagaMiddleWare.run(watchBurgerBuilder)

const app= (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>   
)

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
