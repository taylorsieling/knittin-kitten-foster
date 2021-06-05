import { combineReducers } from 'redux';
import kittenReducer from './kittenReducer'
import applicationReducer from './applicationReducer'

const rootReducer = combineReducers({
    kittenReducer,
    applicationReducer
})

export default rootReducer