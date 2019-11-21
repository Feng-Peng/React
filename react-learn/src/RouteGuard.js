import React, { Component } from 'react'
import { withRouter, BrowserRouter as Router } from 'react-router-dom'

let prevLoaction, location, action, unBlock;

// 该组件用于获取上下文对象
class _GrardHelper extends Component {
    componentDidMount() {
        // 添加阻塞
        unBlock = this.props.history.block((loc, ac) => {
            prevLoaction = this.props.location;
            location = loc;
            action = ac;
            return ''
        })
        // 设置监听
        this.unListen = this.props.history.listen((location, action) => {
            if (this.props.onChange) {
                const preLocation = this.props.location;
                this.props.onChange(preLocation, location, action, this.unListen)
            }
        })
    }
    componentWillUnmount() {
        unBlock();
        this.unListen()
    }
    render() {
        return null;
    }
}

const GrardHelper = withRouter(_GrardHelper)

class RouteGuard extends Component {

    handleConfirm = (msg, commit) => {
        if (this.props.onBeforeChange) {
            this.props.onBeforeChange(prevLoaction, location, action, commit, unBlock)
        }
    }

    render() {
        return <Router getUserConfirmation={this.handleConfirm}>
            <GrardHelper onChange={this.props.onChange} />
            {this.props.children}
        </Router>
    }
}

export default RouteGuard