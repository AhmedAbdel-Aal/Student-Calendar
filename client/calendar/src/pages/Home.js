import React, { Component } from 'react'
import Calendar from '../components/Calendar'
import SideBar from '../components/Sidebar'
import './pages.css'
import Footer from '../components/Footer'

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: this.props.location.state.username,
            password: this.props.location.state.password,
            courses: this.props.location.state.courses,
        };
    }

    render() {
        console.log(this.state)
        return (
            <div class="home-page">
                <SideBar courses={this.state.courses}username={this.state.username}password={this.state.password}></SideBar>
                <Calendar courses={this.state.courses}username={this.state.username}password={this.state.password}></Calendar>
                <Footer></Footer>
            </div>
        )
    }
}
