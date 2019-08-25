

// createStore
export function createStore(reducer) {
    // 产生新的state
    let state
    // 保存n个list数组
    const listeners = []

    state = reducer(state, { type: '@ljs-redux' })

    function getState() {
        return state
    }

    // 分发action，会触发reducer调用，返回一个新的state，调用所有绑定的listener
    function dispatch(action) {
        // 调用reduce，得到一个新的state，保存
        state = reducer(state, action)
        // 调用listeners中所用的监视回调函数
        listeners.forEach(listener => listener())
    }

    function subscribe(listener) {
        listeners.push(listener)
    }

    return { getState, dispatch, subscribe }
}
// combineReducers
export function combineReducers(reducers) {
    return function ( state = {}, action ) {

        return Object.keys(reducers).reduce((newState, key) => {
            newState[key] = reducers[key](state[key], action)
            return newState
        },{})
    }
}
