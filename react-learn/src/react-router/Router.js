import React, { Component } from 'react'
import ctx from './RouterContext' // 引入一个上下文对象
import PropTypes from 'prop-types'
import matchPath from './pathMatch'

export default class Router extends Component {

    static propTypes = {
        history: PropTypes.object,
        children: PropTypes.node
    }

    state = {
        // 将location对象放到state中，每当页面地址发生变化都会重新创建一个location对象
        location: this.props.history.location
    }

    componentDidMount() {
        this.unListen = this.props.history.listen((location, action) => {
            this.props.history.action = action;
            this.setState({
                location
            })
        })
    }

    componentWillUnmount() {
        this.unListen();
    }

    ctxValue = {} // 上下文中的对象（三个）

    render() {
        this.ctxValue.history = this.props.history; // history对象不会变化
        this.ctxValue.location = this.state.location;
        this.ctxValue.match = matchPath('/', this.state.location.pathname)
        return <ctx.Provider value={this.ctxValue}>
            {this.props.children}
        </ctx.Provider>
    }
}
