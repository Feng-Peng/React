import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"

function A(props) {
    return <div>
        <p>
            显示{props.match.params.year}年{props.match.params.month}月{props.match.params.day}日的新闻
        </p>
    </div>
}

export default function App() {
    return (
        <Router>
            <Route path="/news/:year(\d+)/:month(\d+)/:day(\d+)" component={A} />
        </Router>
    )
}
