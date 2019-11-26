import { createBrowserHistory } from 'history'

window.createBrowserHistory = createBrowserHistory;
window.h = createBrowserHistory({
    basename: '/news',
    forceRefresh: false,
    keyLength: 4,
    getUserConfirmation: (msg, callback) => {
        callback(window.confirm(msg))
    }
})
// window.unListen = window.h.listen((location, action) => {
//     console.log("页面跳转了")
//     console.log(location, action)
// })
window.h.block("真的要跳转页面吗？")

export default function browserHistory() {
    return null
}
