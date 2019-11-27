import React, { Component } from 'react'
import { createBrowserHistory } from 'history'
import { Router } from '../react-router'

// 该文件用于提供history对象
export default class BrowserRouter extends Component {
    history = createBrowserHistory(this.props);
    render() {
        return (
            <Router history={this.history}>
                {this.props.children}
            </Router>
        )
    }
}
