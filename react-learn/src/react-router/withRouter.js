import React from 'react'
import ctx from './RouterContext'

export default function withRouter(Comp) {
    function RouterWrapper(props) {
        return <ctx.Consumer>
            {value => <Comp {...value} {...props} />}
        </ctx.Consumer>
    }
    // 设置返回的组件组件在调试器中显示的名称
    RouterWrapper.displayName = `RouterWrapper(${Comp.displayName || Comp.name})`;
    return RouterWrapper;
}