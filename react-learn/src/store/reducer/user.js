import * as User from '../action/userAction'

const initialState = {
    isLoading: false,
    data: []
}

export default (state = initialState, { type, payload }) => {
    // 不能改变参数state的值，返回的都是新的值
    switch (type) {
        case User.ADDUSER:
            return {
                ...state,
                data: [...state.data, payload]
            };
        case User.DELETEUSER:
            return {
                ...state,
                data: state.filter(it => it.id !== payload)
            }
        case User.UPDATEUSER:
            return {
                ...state,
                data: state.map(it => it.id === payload.id ? { ...it, ...payload } : it)
            }
        case User.SETUSER:
            return {
                ...state,
                data: payload
            }
        default:
            return state
    }
}
