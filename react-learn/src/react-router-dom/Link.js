import React from 'react'
import ctx from '../react-router/RouterContext'
import { parsePath } from "history"

export default function Link(props) {
    const { to, ...rest } = props;
    return <ctx.Consumer>
        {value => {
            let log;
            if (typeof props.to === 'object') {
                log = props.to;
            } else {
                log = parsePath(props.to);
            }
            const href = value.history.createHref(log);
            return <a {...rest} href={href} onClick={e => {
                e.preventDefault(); // 阻止默认行为
                value.history.push(href); // 跳转页面
            }}
            >{props.children}</a>
        }}
    </ctx.Consumer>
}
