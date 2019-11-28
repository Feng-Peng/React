import { createStore, bindActionCreators } from 'redux'
import * as actionTypes from './action/action-type'
import * as numberActions from './action/number-action'

/**
 * reducer函数，按照action的描述信息会之前的state中的数据进行操作
 * @param {*} state 之前仓库中的数据
 * @param {*} action 对数据进行的操作类型
 */
function reducer(state, action) {
    if (action.type === actionTypes.INCREASE) {
        return state + 1;
    } else if (action.type === actionTypes.DECREASE) {
        return state - 1;
    } else if (action.type === actionTypes.SET){
        return action.payload
    }
    return state;
}

// 通过createStore函数创建一个仓库，函数的第一个参数时reducer函数，第二个参数时仓库中的默认数据
let store = createStore(reducer, 10);

//第一个参数，是action创建函数合并的对象，第二个参数是仓库的dispatch函数
//得到一个新的对象，新对象中的属性名与第一个参数的属性名一致
const bindActions = bindActionCreators(numberActions, store.dispatch)

console.log(store.getState());

bindActions.getIncreaseAction();
console.log(store.getState());

bindActions.getSetAction(3);
console.log(store.getState());