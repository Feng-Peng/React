import React from 'react'
import {Link} from 'react-router-dom'

export default function Home() {
    return (
        <div>
            <h1>首页</h1>
            <Link to="/Login">去登录</Link>
        </div>
    )
}
