import React from 'react'
import { withRouter } from 'react-router-dom'

function Link(props) {
    return <a
        href={props.to}
        onClick={e => {
            e.preventDefault(); // 阻止a标签刷新页面的默认事件
            props.history.push(props.to)
        }}
    >{props.children}</a>
}

// 通过高阶组件withRouter为导出的a标签添加路由属性
export default withRouter(Link)