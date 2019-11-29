export const SETLOGINUSERTYPE = Symbol('set-login-user');

/**
 * 设置登录用户的action
 */
export function createSetLoginUserAction(user){
    return {
        type: SETLOGINUSERTYPE,
        payload: user
    }
}