import {
    ADD_COUNT,
    DEL_COUNT,
    ADD_MSG
} from './action-types'

// 同步增加
export const addCount = (value) => ({ type: ADD_COUNT, data: value })
// 异步增加
export const delCount = (value) => ({ type: DEL_COUNT, data: value })
//同步添加消息
export const addMsg = (msg) => ({ type: ADD_MSG, data: msg })

