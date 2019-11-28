import React from 'react'
import { BrowserRouter, Route, Link, NavLink } from "./react-router-dom"

function Page1() {
    return <h1>Page1</h1>
}

function Page2() {
    return <h1>Page2</h1>
}

export default function App() {
    return (
        <BrowserRouter>
            <Route path="/page1" component={Page1} />
            <Route path="/page2" component={Page2} />
            <div>
                <NavLink to={{
                    pathname: '/page1',
                    search: '?a=1'
                }}>到Page1</NavLink>
                <br />
                <NavLink to="/page2">到Page2</NavLink>
            </div>
        </BrowserRouter>
    )
}
