import React from 'react'

export default function StudentDetail(props) {
    console.log(props.match)
    return (
        <div>
            <h1>学生详情页</h1>
            <h2>学号：{props.match.params.info}</h2>
        </div>
    )
}
