import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import qs from 'query-string'

function A(props) {
    console.log(props.location)
    var search = qs.parse(props.location.search);
    var hash = qs.parse(props.location.hash);
    console.log(search);
    console.log(hash)
    return <div>
        <p>组件A</p>
        <p>访问的地址：{props.location.pathname}</p>
        <p>地址参数：a:{search.a},b:{search.b},c:{search.c}</p>
        <p>哈希值：ad:{hash.ad},aa:{hash.aa}</p>
    </div>
}

export default function App(props) {
    return (
        <Router>
            <Switch>
                <Route component={A}></Route>
            </Switch>
        </Router>
    )
}

