export default function createBrowserHistory(options) {
    const location = createLocation(options.basename);

    function go(number) {
        window.history.go(number)
    }
    function goBack() {
        window.history.goBack()
    }
    function goForward() {
        window.history.goForward()
    }

    return {
        action: 'POP',
        location,
        length: window.history.length,
        go: go,
        goBack: goBack,
        goForward: goForward
    }
}


/**
 * 创建一个location对象
 * @param {*} basename 
 */
function createLocation(basename = '') {
    let pathname = window.location.pathname;
    const reg = new RegExp(`^${basename}`);
    pathname = pathname.replace(reg, "");
    let search = window.location.search;
    let hash = window.location.hash;
    const location = {
        pathname,
        search,
        hash
    }
    // 处理state
    let state, historyState = window.history.state;
    if (historyState === null) {
        state = undefined;
    }
    else if (typeof historyState !== "object") {
        state = historyState;
    }
    else {
        if ("key" in historyState) {
            location.key = historyState.key;
            state = historyState.state;
        }
        else {
            state = historyState;
        }
    }
    location.state = state;
    return location;
}

// window.myHistory = createBrowserHistory({
//     basename: '/news'
// })

const state = createLocation('/news');
console.log(state)