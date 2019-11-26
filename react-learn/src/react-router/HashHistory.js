import { createHashHistory } from 'history'

window.createBrowserHistory = createHashHistory;
window.h = createHashHistory({
    basename: '/news',
    keyLength: 4,
    getUserConfirmation: (msg, callback) => {
        callback(window.confirm(msg))
    },
    hashType: "slash"
})
// window.unListen = window.h.listen((location, action) => {
//     console.log("页面跳转了")
//     console.log(location, action)
// })
window.h.block("真的要跳转页面吗？")

export default function HashHistory() {
    return null
}
