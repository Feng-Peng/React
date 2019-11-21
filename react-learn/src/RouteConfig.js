const config = {
    user: {
        root: '/u',
        update: '/update', // -> /user/update
        // pay: {
        //     root: '/pay',
        //     afterPay: '/after', // -> /user/pay/after
        //     beforePay: '/before' // -> /user/pay/before
        // }
        pay: '/pay'
    }
}

function setConfig() {
    _setConfig(config, "")
}

function _setConfig(obj, basestr) {
    let newBaseUrl = basestr + (obj.root === undefined ? '' : obj.root)
    for (let props in obj) {
        const value = obj[props];
        if (typeof value === 'string') {
            if (props === 'root') {
                obj[props] = basestr + value
            } else {
                obj[props] = newBaseUrl + value
            }
        } else {
            _setConfig(value, newBaseUrl)
        }
    }
}

setConfig();
export default config