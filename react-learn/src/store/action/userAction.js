import { getAllStudents } from '../../services/student'

export const ADDUSER = Symbol('addUser');
export const DELETEUSER = Symbol('deleteUser');
export const UPDATEUSER = Symbol('updateUser');
export const SETUSER = Symbol('setUser');
export const SETLOADING = Symbol('setLoading');

export function createAddUserAction(user) {
    return {
        type: ADDUSER,
        payload: user
    }
}

export function createDeleteUserAction(id) {
    return {
        type: DELETEUSER,
        payload: id
    }
}

export function createUpdateUserAction(id, newMessage) {
    return {
        type: UPDATEUSER,
        payload: {
            ...newMessage,
            id
        }
    }
}

export function createSetLoadingAction(user) {
    return {
        type: SETLOADING,
        payload: user
    }
}

export function createSetAction(user){
    return {
        type: SETUSER,
        payload: user
    }
}

export function fetchUsers() {
    return async function (dispatch) {
        dispatch(createSetLoadingAction(true)); // 正在加载
        const users = await getAllStudents();
        const action = createSetAction(users);
        dispatch(action);
        dispatch(createSetLoadingAction(false));
    }
}