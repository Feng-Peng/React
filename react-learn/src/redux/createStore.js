import getRandomString from './utils/getRandomString'
import isPlaneObject from './utils/isPlaneObject'

/**
 * 接收一个参数，返回一个对象，对象中有三个函数
 * @param {*} reducer reducer函数
 */
export default function createStore(reducer, state) {
    let currentState = state,
        currentReducer = reducer
    let listeners = []; // 该数组用于存放注册的监听器函数

    function dispatch(action) {
        if (!isPlaneObject(action)) {
            throw new TypeError("action must be a plane Object");
        }
        if (action.type === undefined) {
            throw new TypeError("action must has a type param");
        }
        currentState = currentReducer(currentState, action);

        for (const listener of listeners) {
            listener();
        }
    }

    function getState() {
        return currentState;
    }

    function subscribe(listener) {
        listeners.push(listener);
        let isRemove = false;
        return () => {
            if (isRemove) {
                return;
            }
            listeners.splice(listeners.indexOf(listener), 1);
            isRemove = true;
        }
    }

    // 创建store的时候要调用一次dispatch函数
    dispatch({
        type: `@@/ININT${getRandomString.INIT()}`
    });

    return {
        dispatch,
        getState,
        subscribe
    }
}
