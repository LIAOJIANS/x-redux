
import { combineReducers } from 'redux'
import {
    ADD_COUNT,
    DEL_COUNT,
    ADD_MSG
} from './action-types'


const initCount = 0 // 初始数量
function count(state = initCount, action) {

    switch (action.type) {
        case ADD_COUNT:
            return state + action.data * 1
        case DEL_COUNT:
            return state - action.data * 1
        default:
            return state
    }
}

const initMsgs = [] // 初始值
function msgs(state = initMsgs, action) {

    switch (action.type) {
        case ADD_MSG:
            return [ action.data, ...state ]
        default:
            return state
    }
}
export default combineReducers({
    count,
    msgs
})
