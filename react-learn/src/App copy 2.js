import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function A(props) {
    return <div>
        <h1>组件A</h1>
        <p>
            获取状态数据：{props.history.location.state}
        </p>
        <button onClick={() => {
            props.history.replace('/b', '跳转到组件B')
        }}>
            跳转到组件B
        </button>
    </div>
}

function B(props) {
    return <div>
        <h1>组件B</h1>
        <p>
            获取状态数据：{props.history.location.state}
        </p>
        <button onClick={() => {
            props.history.replace('/a', '跳转到组件A')
        }}>
            跳转到组件A
        </button>
    </div>
}

function C() {
    return <h1>找不到页面</h1>
}

export default function App(props) {
    return (
        <Router>
            <Switch>
                <Route path="/a" component={A}></Route>
                <Route path="/b" component={B}></Route>
                <Route component={C}></Route>
            </Switch>
        </Router>
    )
}

