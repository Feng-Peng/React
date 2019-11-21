import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import RouteGuard from './RouteGuard'

function Page1() {
    return <h1>
        组件Page1
    </h1>
}

function Page2() {
    return <h1>
        组件Page2
    </h1>
}

export default function App() {
    let mount = 0;
    return (
        <RouteGuard
            onBeforeChange={(prev, cur, action, commit, unBlock) => {
                console.log(`页面想要从组件${prev.pathname}跳转到${cur.pathname},跳转方式为${action},允许跳转`)
                commit(true);
                // unBlock();
            }}
            onChange={(preLocation, location, action, unListen) => {
                // mount ++;
                console.log(`日志：从${preLocation.pathname}进入页面${location.pathname}，进入方式${action}`)
                // if(mount === 5) {
                //     unListen();
                // }
            }}
        >
            <ul>
                <li><Link to="/page1">Page1页面</Link></li>
                <li><Link to="/page2">Page2页面</Link></li>
            </ul>
            <Route path="/page1" component={Page1}></Route>
            <Route path="/page2" component={Page2}></Route>
        </RouteGuard>
    )
}
