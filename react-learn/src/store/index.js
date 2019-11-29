import { createStore, bindActionCreators } from '../redux'
import reducer from './reducer'
import { createAddUserAction, createDeleteUserAction } from './action/userAction'

let store = createStore(reducer);

store.subscribe(() => {
    console.log('监听器1', store.getState())
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