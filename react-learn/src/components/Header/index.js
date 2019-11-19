import React, { Component } from 'react'
import "./index.css"

export default class Header extends Component {
    render() {
        return (
            <div className="header-content">
                <h1 className="left">
                    学生管理系统
                </h1>
                <div className="right">
                    <span>用户名</span>
                    <button>退出</button>
                </div>
            </div>
        )
    }
}
