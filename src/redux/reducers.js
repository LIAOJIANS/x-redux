
import { combineReducers } from 'redux'
import {
    ADD_COUNT,
    DEL_COUNT,
    ADD_MSG
} from './action-types'


const count = 0
function funCount(state =count, action) {

    switch (action.type) {
        case ADD_COUNT:
            return state + action.data
        case DEL_COUNT:
            return state - action.data
        default:
            return state
    }
}

const msgs = ['消息1', '消息2', '消息3']
function addMsg(state = msgs, action) {
    switch (action.type) {
        case ADD_MSG:
            return [ ...action.data, state ]
        default:
            return state
    }
}
export default combineReducers({

    funCount,
    addMsg
})
