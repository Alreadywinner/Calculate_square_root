import squareReducer from './squareReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    root:squareReducer
});

export default rootReducer;