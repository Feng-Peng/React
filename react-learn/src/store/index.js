import { createStore, bindActionCreators, applyMiddleware } from 'redux'
import reducer from './reducer'
import { createAddUserAction, createDeleteUserAction } from './action/userAction'


const logger1 = store => next => action => {
    console.log('中间件1');
    console.log('旧数据', store.getState());
    console.log('action', action)
    next(action); // 此时调用的是中间件2
    console.log('新数据', store.getState());
    console.log("");
}

const logger2 = store => next => action => {
    console.log('中间件2');
    console.log('旧数据', store.getState());
    console.log('action', action)
    next(action);
    console.log('新数据', store.getState());
    console.log("");
}

// /**
//  * 中间件函数
//  * @param {*} store 
//  */
// function logger1(store) {
//     return function (next) { // 此处的next就是dispatch函数
//         return function (action) {
//             console.log('中间件1');
//             console.log('旧数据', store.getState());
//             console.log('action', action)
//             next(action);
//             console.log('新数据', store.getState());
//             console.log("");
//         }
//     }
// }

// function logger2(store) {
//     return function (next) { // 此处的next就是dispatch函数
//         return function (action) {
//             console.log('中间件2');
//             console.log('旧数据', store.getState());
//             console.log('action', action)
//             next(action);
//             console.log('新数据', store.getState());
//             console.log("");
//         }
//     }
// }

// 1.
let store = createStore(reducer, applyMiddleware(logger1, logger2));

// 2.
// let store = applyMiddleware(logger1, logger2)(createStore)(reducer);

// store.subscribe(() => {
//     console.log(store.getState())
// })

let userAction = {
    createAdd: createAddUserAction,
    createDelete: createDeleteUserAction
}

const newUserAction = bindActionCreators(userAction, store.dispatch);

newUserAction.createAdd({
    id: 3,
    name: '用户1',
    age: 11
});

newUserAction.createDelete(3);