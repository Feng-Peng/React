import { createStore } from 'redux'
import reducer from './reducer'
import { createAddUserAction, createDeleteUserAction } from './action/userAction'

let store = createStore(reducer);

// subscribe接收一个无参函数
store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(createAddUserAction({
    id: 3,
    name: '新添加的用户',
    age: 21
}))

store.dispatch(createDeleteUserAction(3))

// store.dispatch(createUpdateUserAction(3, {
//     name: '新添加的用户',
//     age: 80
// }))