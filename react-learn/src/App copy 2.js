import React from 'react'
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom"
import './App.css'

function A() {
    return <h1>组件A</h1>
}

function B() {
    return <h1>组件B</h1>
}

function Move() {
    return <div>
        <NavLink
            activeClassName="newActive"
            activeStyle={{
                backgroundColor: 'rgb(200,200,200)'
            }}
            strict
            to="/a"
            innerRef={node => {
                console.log(node)
            }}
            replace={true} style={{
                marginRight: 10
            }}>去组件A</NavLink>
        <NavLink
            activeClassName="newActive"
            activeStyle={{
                backgroundColor: 'rgb(200,200,200)'
            }}
            to={{
                pathname: "/b",
                hash: "#abc",
                search: "?a=1&b=2"
            }} > 去组件B</NavLink>
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
