function createThunkMiddleware(extra) {
    return store => next => action => {
        // 如果action是一个函数就直接执行
        if (typeof action === 'function') {
            return action(store.dispatch, store.getState, extra);
        }
        // action不是一个函数时就继续向后传递
        return next(action);
    }
}

const thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;
export default thunk;