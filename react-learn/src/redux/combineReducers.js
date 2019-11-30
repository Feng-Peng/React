import getRandomString from './utils/getRandomString'
import isPlaneObject from './utils/isPlaneObject'

function validateReducers(reducers){
    if(typeof reducers !== 'object'){
        throw new TypeError("reducers must be an object");
    }
    if(!isPlaneObject(reducers)){
        throw new TypeError("reducers must be a plane object");
    }
    for (const key in reducers) {
        if (reducers.hasOwnProperty(key)) {
            const reducer = reducers[key];
            let result = reducer(undefined, {
                type: getRandomString.INIT()
            })
            if(result === undefined){
                throw new Error('reducer must not return undefined')
            }
            result = reducer(undefined, {
                type: getRandomString.UNKNOWN()
            })
            if(result === undefined){
                throw new Error('reducer must not return undefined')
            }
        }
    }
}
/**
 * 将多个reducers转换为一个新的reducer
 * @param {*} reducers 
 */
export default function (reducers) {
    // 判断传入的reducers对象是否符合规范
    validateReducers(reducers);
    // combineReducers返回的是reducer函数，该函数返回的是一个对象
    return function (state = {}, action) {
        const newState = {};
        for (const key in reducers) {
            if (reducers.hasOwnProperty(key)) {
                const reducer = reducers[key];
                newState[key] = reducer(state[key], action);
            }
        }
        return newState;
    }
}