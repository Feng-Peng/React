const appkey = "demo13_1545210570249";

/**
 * 获取所有学生
 */
export async function getAllStudents() {
    return await fetch("/api/student/findAll?appkey=" + appkey)
        .then(resp => resp.json()).then(resp => resp.data);
}

export async function getStudents(page = 1, limit = 10) {
    return await fetch(`/api/student/findByPage?appkey=${appkey}&page=${page}&size=${limit}`)
        .then(resp => resp.json()).then(resp => resp.data);
}

/**
 * 当传递了key关键字时通过关键字查找，没有传递key关键字时通过分页查找
 * @param {*} param0 
 */
export async function searchStudents({ page = 1, limit = 10, key = '', sex = -1 } = {}) {
    if (key) {
        const resp = await fetch(`/api/student/searchStudent?appkey=${appkey}&page=${page}&size=${limit}&search=${key}&sex=${sex}`)
            .then(resp => resp.json()).then(resp => resp.data);
        resp.datas = resp.searchList;
        delete resp.searchList;
        return resp;
    } else {
        const resp = await getStudents(page.limit);
        resp.datas = resp.findByPage;
        delete resp.findByPage;
        return resp;
    }
}