import { combineReducers } from 'redux';
import user from './user'
import linkedIn from './linkedIn'

const rootReducer = combineReducers({
    user,
    linkedIn
});

export default rootReducer;
