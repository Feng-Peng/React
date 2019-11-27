import React, { Component } from 'react'
import ctx from './RouterContext'
import matchPath from './pathMatch'

export default class Route extends Component {

    /*
    path：路径规则，可以是字符串，可以是字符串数组
    children：无论是否匹配，都应该渲染的子元素
    render：匹配成功后，渲染函数
    component：匹配成功后，渲染的组件

    以下是调用matchPath方法时的配置
    exact
    strict
    sensitive
    */

    // 提供上下文提供者内部渲染的内容
    renderChildren(ctx) {
        if (this.props.children !== undefined && this.props.children !== null) {
            // 如果传入了children并且是一个函数就返回函数的执行结果，否则就直接返回children
            if (typeof this.props.children === 'function') {
                return this.props.children(ctx)
            } else {
                return this.props.children
            }
        }
        // children没有值
        if (!ctx.match) {
            return null
        }
        if (typeof this.props.render === 'function') {
            return this.props.render(ctx)
        }
        if (this.props.component) {
            const Component = this.props.component;
            return <Component {...ctx} />
        }
        return null;
    }

    // 根据指定的location对象返回match对象
    matchRoute(location) {
        const {exact = false, strict = false, sensitive = false} = this.props
        return matchPath(this.props.path || '/', location.pathname, {
            exact,
            strict,
            sensitive
        })
    }

    /**
     * 上下文中的消费者对象
     */
    consumerFunc = (value) => {
        const ctxValue = {
            history: value.history,
            location: value.location,
            match: this.matchRoute(value.location)
        }
        return <ctx.Provider value={ctxValue}>
            {this.renderChildren(ctxValue)}
        </ctx.Provider>
    }

    render() {
        return <ctx.Consumer>
            {this.consumerFunc}
        </ctx.Consumer>
    }
}