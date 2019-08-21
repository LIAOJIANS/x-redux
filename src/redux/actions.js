import {
    ADD_COUNT,
    DEL_COUNT,
    ADD_MSG
} from './action-types'

// 同步增加
export const add_count = (value) => ({ type: ADD_COUNT, data: value })
// 异步增加
export const del_count = (value) => ({ type: DEL_COUNT, data: value })
//同步添加消息
export const add_msg = (msg) => ({ type: ADD_MSG, data: msg })

// 异步三秒增加

export function SanCount(value) {

    return dispatch => {

       setTimeout(() => {
           dispatch(add_count(value))
       }, 3000)
    }
}

