import {combineReducers} from 'redux'

import user from './user'
import message from './message'

const reducer=combineReducers({
    user,
    message,
})

export default reducer