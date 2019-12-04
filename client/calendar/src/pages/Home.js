import React, { Component } from 'react'
import Calendar from '../components/Calendar'
import SideBar from '../components/Sidebar'
import axios from 'axios'
import './pages.css'
import Footer from '../components/Footer'

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            username : localStorage.getItem('username'),
            password : localStorage.getItem('password'),
            courses: [],
            filterType:"All"
        };
        this.handleTypeClicked = this.handleTypeClicked.bind(this);

    }
    componentDidMount=async()=>{

    
        var courses = []
        const body = {
            username : localStorage.getItem('username'),
            password : localStorage.getItem('password')
        }
        await axios.post("/api/student/login",body,
        (       'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
      ))
          .then(res =>  res.data)
          .then(json =>{
            this.setState({
                courses:json.data.courses
            })
    
        })
           .catch(error => {  this.setState({error})} );
         }


    handleTypeClicked=(e)=>{
        this.setState({
            filterType:e
        })
        console.log(e)
    }     
    render() {
        console.log(this.props.page)
        return (
            <div class="home-page">
                <SideBar courses={this.state.courses}username={this.state.username}password={this.state.password} page={this.props.page} handleTypeClicked={this.handleTypeClicked}></SideBar>
                <Calendar courses={this.state.courses}username={this.state.username}password={this.state.password} filterType={this.state.filterType}></Calendar>
                <Footer></Footer>
            </div>
        )
    }
}
