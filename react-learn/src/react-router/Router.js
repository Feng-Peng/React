import React, { Component } from 'react'
import ctx from './RouterContext' // 引入一个上下文对象
import PropTypes from 'prop-types'
import matchPath from './pathMatch'

export default class Router extends Component {

    static propTypes = {
        history: PropTypes.object.isRequired,
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

    render() {
        // 每次渲染的时候得到一个新的ctxValue对象
        const ctxValue = {
            history: this.props.history,
            location: this.state.location,
            match: matchPath('/', this.state.location.pathname)
        }
        return <ctx.Provider value={ctxValue}>
            {this.props.children}
        </ctx.Provider>
    }
}
