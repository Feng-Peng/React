export const ADDUSER = Symbol('addUser');
export const DELETEUSER = Symbol('deleteUser');
export const UPDATEUSER = Symbol('updateUser');

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