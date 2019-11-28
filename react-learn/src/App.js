import React from 'react'
import { BrowserRouter, Route, Switch, withRouter } from "./react-router-dom"

function Comp(props) {
    return <div>
        {props.text}
        <button onClick={() => {
            props.history.push('/page2')
        }}>到Page2</button>
    </div>
}

const CompWithRouter = withRouter(Comp);

function Page1() {
    return <h1>
        Page1
        <CompWithRouter text="abc" />
    </h1>
}

function Page2() {
    return <h1>Page2</h1>
}

export default function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/page1" component={Page1} />
                <Route path="/page2" component={Page2} />
            </Switch>
        </BrowserRouter>
    )
}
