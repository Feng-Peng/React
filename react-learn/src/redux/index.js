import { createStore } from 'redux'
import reducer from './reducer'
import { createAddUserAction } from './action/userAction'
import uuid from 'uuid';

let store = createStore(reducer);

console.log(store.getState());

store.dispatch(createAddUserAction({
    id: uuid(),
    name: '新添加的用户',
    age: 21
}))

console.log(store.getState());