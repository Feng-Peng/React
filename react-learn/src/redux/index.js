import { createStore } from 'redux'

/**
 * reducer函数，按照action的描述信息会之前的state中的数据进行操作
 * @param {*} state 之前仓库中的数据
 * @param {*} action 对数据进行的操作类型
 */
function reducer(state, action) {
    if (action.type === 'increase') {
        return state + 1;
    } else if (action.type === 'decrease') {
        return state - 1;
    }
    return state;
}

// 通过createStore函数创建一个仓库，函数的第一个参数时reducer函数，第二个参数时仓库中的默认数据
let store = createStore(reducer, 10);

const action = {
    type: 'increase'
}

console.log(store.getState());
store.dispatch(action); // 向仓库传递一个action对象，目的是传递state+1的命令
console.log(store.getState());