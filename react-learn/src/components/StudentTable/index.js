import React from 'react'
import './index.css'

export default function StudentTable(props) {
    const strs = props.stus.map(it => <tr key={it.id}>
        <td>{it.name}</td>
        <td>{it.sNo}</td>
        <td>{it.sex === 1 ? '女' : '男'}</td>
        <td>{it.birth}</td>
        <td>{it.email}</td>
        <td><a href={`/students/${it.sNo}`}>详情</a></td>
    </tr>)
    return (
        <div>
            <table className="tab">
                <thead>
                    <tr>
                        <th>姓名</th>
                        <th>学号</th>
                        <th>性别</th>
                        <th>出生年份</th>
                        <th>邮箱</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    {strs}
                </tbody>
            </table>
        </div>
    )
}