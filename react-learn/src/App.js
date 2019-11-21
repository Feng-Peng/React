import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Personal from './Personal'
import ProtectedRoute from './ProtectedRoute'

export default function App() {
    return (
        <Router>
            <div>
                <ul>
                    <li><Link to="/">首页</Link></li>
                    <li><Link to="/login">登录页</Link></li>
                    <li><Link to="/personal">个人信息页</Link></li>
                </ul>
            </div>
            <div>
                <Switch>
                    <Route path="/login" component={Login} ></Route>
                    <ProtectedRoute path="/personal" component={Personal} ></ProtectedRoute>
                    <Route path="/" component={Home} ></Route>
                </Switch>
            </div>
        </Router>
    )
}
