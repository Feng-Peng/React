import { createStore } from '../redux'
import reducer from './reducer'
import { createAddUserAction, createDeleteUserAction } from './action/userAction'

let store = createStore(reducer);


// subscribe接收一个无参函数
const unListen = store.subscribe(() => {
    console.log('监听器1', store.getState())
})

store.dispatch(createAddUserAction({
    id: 3,
    name: '新添加的用户',
    age: 21
}))

unListen();

store.dispatch(createDeleteUserAction(3))