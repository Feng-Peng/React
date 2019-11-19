import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

function A(props) {
    console.log(props.match)
    return <div>
        <p>组件A</p>
    </div>
}

function B() {
    return <div>
        <p>组件B</p>
    </div>
}

function NotFound(props) {
    return <h1>找不到页面</h1>
}

export default function App() {
    return (
        <Router>
            <Route path="/a" component={A} />
            <Route path="/a/b" component={B} />
            {/* <Route component={NotFound} /> */}
        </Router>
    )
}
