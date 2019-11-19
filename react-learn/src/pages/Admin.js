import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Menu from '../components/Menu'
import Student from '../pages/student/Student'
import AddStudent from '../pages/student/AddStudent'
import Course from '../pages/course/Course'
import AddCourse from '../pages/course/AddCourse'
import Welcome from './Welcome'

export default function Admin() {
    return (
        <Layout
            header={<Header />}
            aside={<Menu />}
        >
            <Router>
                <Route path="/" exact component={Welcome}></Route>
                <Route path="/students" exact component={Student}></Route>
                <Route path="/students/add" exact component={AddStudent}></Route>
                <Route path="/courses" exact component={Course}></Route>
                <Route path="/courses/add" exact component={AddCourse}></Route>
            </Router>
        </Layout>
    )
}
