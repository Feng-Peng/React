import React from 'react'
import StudentSearchBar from '../../components/StudentSearchBar'
import StudentTable from '../../components/StudentTable'
import { searchStudents } from '../../services/student'
import { useState, useEffect } from 'react'
import qs from 'query-string'
import Pager from '../../components/common/Pager'

/**
 * 该函数用于获取地址栏参数中提供的查询条件，返回一个对象
 * 如果某些条件在地址中缺失，该函数会使用默认值defaultQuery
 */
function getQuery(search) {
    const defaultQuery = {
        page: 1,
        limit: 10,
        key: '',
        sex: -1
    }
    let query = qs.parse(search)
    query = Object.assign({}, defaultQuery, query);
    query.page = +query.page;
    query.limit = +query.limit;
    query.sex = +query.sex;
    return query;
}

// 该函数是一个自定义的Hook，用于获取服务器的响应结果
function useResp(query) {
    const [resp, setResp] = useState({
        cont: 0,
        datas: []
    });
    useEffect(() => {
        // 通过searchStudents函数获取数据，传递到resp中
        searchStudents({
            page: query.page,
            limit: query.limit,
            key: query.key,
            sex: query.sex
        }).then(data => {
            setResp(data)
        })
    }, [query.key, query.sex, query.page, query.limit])
    return resp
}

// 改变地址栏中的地址，用于获取新的数据，渲染新的页面
function changeLocation(newQuery, history) {
    const query = qs.stringify(newQuery); // 将对象的形式转换为字符串的形式
    history.push('?' + query)
}

export default function Student(props) {
    const query = getQuery(props.location.search) // query是一个由page、limit、key和sex构成的对象
    const resp = useResp(query)
    return (
        <>
            <StudentSearchBar defaultValue={{
                key: '',
                sex: -1
            }}
                onSearch={data => {
                    const newQuery = {
                        ...query,
                        key: data.key,
                        sex: data.sex,
                        page: 1
                    }
                    changeLocation(newQuery, props.history)
                }}
            />
            {/* resp.datas是一个数组 */}
            <StudentTable stus={resp.datas} />
            <Pager
                current={query.page}
                total={resp.cont}
                limit={query.limit}
                panelNumber={5}
                onPageChange={newPage => {
                    const newQuery = {
                        ...query,
                        page: newPage
                    }
                    changeLocation(newQuery, props.history)
                }}
            ></Pager>
        </>
    )
}