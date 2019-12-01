import { createStore, bindActionCreators, applyMiddleware } from 'redux'
import reducer from './reducer'
import { createAddUserAction, createDeleteUserAction } from './action/userAction'
import logger from 'redux-logger'


let store = createStore(reducer, applyMiddleware(logger));


// let store = applyMiddleware(logger1, logger2)(createStore)(reducer);

store.subscribe(() => {
    console.log(store.getState())
})

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