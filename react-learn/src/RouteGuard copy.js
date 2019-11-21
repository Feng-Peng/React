import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class RouteGuard extends Component {
    componentDidMount() {
        // 设置监听
        this.unListen = this.props.history.listen((location, action) => {
            if (this.props.onChange) {
                const preLocation = this.props.location;
                this.props.onChange(preLocation, location, action, this.unListen)
            }
        })
    }
    componentWillUnmount(){
        this.unListen()
    }
    render() {
        return this.props.children
    }
}

export default withRouter(RouteGuard)