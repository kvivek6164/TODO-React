import { createStore, combineReducers } from 'redux';
import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk';

const INITIAL_PRODUCT_STATE = {
    isLoading: false,
    error: null,
    product_data: []
}

const INITIAL_USER_STATE = {
    isLoading: false,
    error: null,
    user_data: []
}

const middleWare = [
    thunk,    
];

const PRODUCT_FETCH_START = 'PRODUCT_FETCH_START';
const PRODUCT_FETCH_SUCCESSFULL = 'PRODUCT_FETCH_SUCCESSFULL';
const PRODUCT_FETCH_ERROR = 'PRODUCT_FETCH_ERROR';

const USER_FETCH_START = 'USER_FETCH_START';
const USER_FETCH_SUCCESSFULL = 'USER_FETCH_SUCCESSFULL';
const USER_FETCH_ERROR = 'USER_FETCH_ERROR';

function productReducer (state = INITIAL_PRODUCT_STATE, action){
    switch(action.type){ 
        case PRODUCT_FETCH_START: 
            return { ...state, isLoading: true }
        case PRODUCT_FETCH_SUCCESSFULL: 
            return { ...state, isLoading: false, product_data:action.data}
        case PRODUCT_FETCH_ERROR: 
            return { ...state, isLoading: false, error: {}}
        default: 
            return {...state, INITIAL_PRODUCT_STATE}
    }
}

function userReducer (state = INITIAL_USER_STATE, action){
    switch(action.type) {
        case USER_FETCH_START: 
            return { ...state, isLoading: true }
        case USER_FETCH_SUCCESSFULL: 
            return { ...state, isLoading: false, user_data:action.data}
        case USER_FETCH_ERROR: 
            return { ...state, isLoading: false, error: {}}
        default: 
            return {...state, INITIAL_PRODUCT_STATE}
    }
}

const finalReducer = combineReducers({
    user: userReducer,
    product: productReducer,
})
const store = createStore(finalReducer, applyMiddleware(...middleWare));
export default store;