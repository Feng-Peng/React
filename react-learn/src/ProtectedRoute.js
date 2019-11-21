import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import loginInfo from './loginInfo'

export default function ProtectedRoute({ component: Component, children, render, ...rest }) {
    return <Route {...rest}
        // Route组件中的render函数，参数为路由信息（history、location和match）
        render={values => { // valuse是路由信息
            if (loginInfo.isLogin) {
                // 可以正常展示页面
                return <Component />
            } else {
                // return <Redirect to={{
                //     pathname: '/login',
                //     search: '?returnurl=' + values.location.pathname
                // }}/>
                return <Redirect to={{
                    pathname: '/login',
                    state: values.location.pathname
                }} />
            }
        }} />
}
