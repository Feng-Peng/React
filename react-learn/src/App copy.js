import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

function User(props) {
    return <div>
        <h1>user组件固定的区域</h1>
        <Link to={`${props.match.url}/update`}>组件更新</Link>
        <Link to={`${props.match.url}/pay`}>支付</Link>
        <div style={{
            width: 500,
            height: 500,
            border: '1px solid #000',
            background: 'lightblue',
            margin: '0 auto'
        }}>
            <Route path={`${props.match.url}/update`} component={Update} />
            <Route path={`${props.match.url}/pay`} component={Pay} />
        </div>
    </div>
}

function Update(){
    return <div>
        <h1>组件更新页面</h1>
    </div>
}

function Pay(){
    return <div>
        <h1>支付页面</h1>
    </div>
}

export default function App() {
    return (
        <Router>
            <Route path="/u" component={User} />
        </Router>
    )
}
