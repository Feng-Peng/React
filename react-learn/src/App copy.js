import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

function A() {
    return <h1>组件A</h1>
}

function B() {
    return <h1>组件B</h1>
}

function Move() {
    return <div>
        <Link
            to="/a"
            innerRef={node => {
                console.log(node)
            }}
            replace={true} style={{
                marginRight: 10
            }}>去组件A</Link>
        <Link to={{
            pathname: "/b",
            hash: "#abc",
            search: "?a=1&b=2"
        }} > 去组件B</Link>
    </div>
}

export default function App() {
    return (
        <Router>
            <Move />
            <Route path="/a" component={A} />
            <Route path="/b" component={B} />
        </Router>
    )
}
