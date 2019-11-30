function getRandomString(length) {
    return Math.random().toString(36).substr(2, length).split('').join('.');
}

export default {
    INIT: function () {
        return `@@redux/INIT${getRandomString(6)}`
    },
    UNKNOWN: function () {
        return `@@redux/PROBE_UNKNOWN_ACTION${getRandomString(6)}`
    }
}