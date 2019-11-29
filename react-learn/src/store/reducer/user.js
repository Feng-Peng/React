import * as User from '../action/userAction'
import uuid from 'uuid';

const initialState = [
    { id: uuid(), name: '用户1', age: 11 },
    { id: uuid(), name: '用户2', age: 2 }
]

export default (state = initialState, { type, payload }) => {
    // 不能改变参数state的值，返回的都是新的值
    switch (type) {
        case User.ADDUSER:
            return [...state, payload];
        case User.DELETEUSER:
            return state.filter(it => it.id !== payload);
        case User.UPDATEUSER:
            return state.map(it => it.id === payload.id ? {...it, ...payload} : it);
        default:
            return state
    }
}
