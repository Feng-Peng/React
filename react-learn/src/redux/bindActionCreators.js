export default function bindActionCreators(acitonCreators, dispatch) {
    if (typeof acitonCreators === 'function') {
        return getAutoDispatchActionCreator(acitonCreators, dispatch);
    } else if (typeof acitonCreators === 'object') {
        let result = {};
        for (const key in acitonCreators) {
            if (acitonCreators.hasOwnProperty(key)) {
                const acitonCreator = acitonCreators[key];
                if (typeof acitonCreator === 'function') {
                    result[key] = getAutoDispatchActionCreator(acitonCreator, dispatch);
                }
            }
        }
        return result;
    } else {
        throw new TypeError("action type must an function or object whitch action error")
    }
}

/**
 * 获取增加dispatch功能的action创建函数
 */
function getAutoDispatchActionCreator(acitonCreator, dispatch) {
    return function (...args) {
        const action = acitonCreator(...args);
        dispatch(action);
    }
}