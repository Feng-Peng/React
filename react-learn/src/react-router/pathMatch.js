import pathToRegexp from 'path-to-regexp'

/**
 * 得到匹配结果（match对象）
 * @param {*} path 匹配规则
 * @param {*} pathname 具体的路径
 * @param {*} options 相关配置
 */
export default function matchPath(path, pathname, options) {
    const keys = []
    const regExp = pathToRegexp(path, keys, getOptions(options))
    let result = regExp.exec(pathname) // 匹配url地址
    if (!result) {
        return null
    }

    let groups = Array.from(result)
    groups = groups.slice(1)
    const params = getParams(groups, keys)

    return {
        isExact: pathname === result[0],
        params,
        path,
        url: result[0]
    }
}

/**
 * 将传入的react-router配置转换为path-to-regexp的配置
 * @param {*} options 
 */
function getOptions(options = {}) {
    const defaultOptions = {
        sensitive: false,
        strict: false,
        exact: false
    }
    const ops = { ...defaultOptions, ...options }
    return {
        sensitive: ops.sensitive,
        strict: ops.strict,
        end: ops.exact
    }
}

/**
 * 根据匹配的分组结果，得到一个params对象
 * @param {*} groups 
 * @param {*} keys 
 */
function getParams(groups, keys) {
    let params = {}
    for (let i = 0; i < groups.length; i++) {
        let key = keys[i].name;
        let value = groups[i];
        params[key] = value;
    }
    return params;
}