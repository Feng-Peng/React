import React from 'react'
import StudentSearchBar from '../../components/StudentSearchBar'
import StudentTable from '../../components/StudentTable'
import { searchStudents } from '../../services/student'
import { useState, useEffect } from 'react'
import qs from 'query-string'
import Pager from '../../components/common/Pager'

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

// 获取服务器的响应结果
function useResp(query) {
    const [resp, setResp] = useState({
        cont: 0,
        datas: []
    });
    useEffect(() => {
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

function changeLocation(newQuery, history) {
    const query = qs.stringify(newQuery);
    history.push('?' + query)
}

export default function Student(props) {
    const query = getQuery(props.location.search)
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