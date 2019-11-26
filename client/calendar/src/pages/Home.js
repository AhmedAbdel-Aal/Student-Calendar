import React, { Component } from 'react'
import Calendar from '../components/Calendar'
import SideBar from '../components/Sidebar'
export default class Home extends Component {
    render() {
        return (
            <div>
                <SideBar></SideBar>
                <Calendar></Calendar>
            </div>
        )
    }
}
