import { createStore, combineReducers } from 'redux';
import numberReducer from './reducers/numbers'

const reducers = combineReducers({
    numbers: numberReducer
});

export default () => createStore(reducers);