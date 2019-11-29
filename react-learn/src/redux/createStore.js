/**
 * 判断一个对象是不是plane-object
 * @param {*} obj 
 */
function isPlanObject(obj) {
    if (typeof obj !== 'object') {
        return false;
    }
    if (Object.getPrototypeOf(obj) === Object.prototype) {
        return true;
    } else {
        return false;
    }
}

/**
 * 获取指向长度的字符串，该字符串只包含数字和字母
 */
function random(length) {
    return Math.random().toString(36).substr(2, length).split('').join('.');
}

/**
 * 接收一个参数，返回一个对象，对象中有三个函数
 * @param {*} reducer reducer函数
 */
export default function createStore(reducer, state) {
    let currentState = state,
        currentReducer = reducer
    let listeners = []; // 该数组用于存放注册的监听器函数

    function dispatch(action) {
        if(!isPlanObject(action)){
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
        type: `@@/ININT${random()}`
    });

    return {
        dispatch,
        getState,
        subscribe
    }
}
