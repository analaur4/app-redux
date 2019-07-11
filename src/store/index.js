import { createStore, combineReducers } from 'redux';
import clickReducer from './ducks/index'

export const reducers = combineReducers({
    clickState: clickReducer,
})

export const Store = createStore(reducers);
