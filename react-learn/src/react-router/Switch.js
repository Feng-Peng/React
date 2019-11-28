import React, { Component } from 'react'
import ctx from './RouterContext'
import matchPath from './pathMatch'

export default class Switch extends Component {

    /**
     * 循环children，得到第一个匹配的Route组件，否则返回null
     */
    getMatchChild = ({ location }) => {
        let reactChild = [];
        if (Array.isArray(this.props.children)) {
            reactChild = this.props.children;
        } else if (typeof (this.props.children) === 'object') {
            reactChild = [this.props.children]
        }
        for (let child of reactChild) {
            const { path = '/', exact = false, strict = false, sensitive = false } = child.props;
            const result = matchPath(path, location.pathname, { exact, strict, sensitive })
            if (result) {
                return child
            }
        }
        return null;
    }

    render() {
        return <ctx.Consumer>
            {this.getMatchChild}
        </ctx.Consumer>
    }
}
