import React from 'react'
import axios from 'axios'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction' // needed for dayClick
import Loader from './Loader'
import './calendar.scss'

var moment = require('moment');

export default class Calendar extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            calendarWeekends: true,
            calendarEvents: [ // initial event data
               
            ],
            loading:false,
            courses:[],
            
        };
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
            console.log(json.data.courses)  
            courses = json.data.courses
            console.log(courses)

        })
           .catch(error => {  this.setState({error})} );

        await axios.get("/api/deadline",
        (       'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
      ))
          .then(res =>  res.data)
          .then(json =>{
            if(json.data){
                console.log(json.data)
                console.log(courses)
                let arr = []
                arr = this.state.calendarEvents
                json.data.map(e =>{
                    const flag = courses.find(ele=>{if(ele===e.courseName){return true;}else{return false;}})
                    if(flag)
                     arr.push({title:e.name,start:moment(e.deadline).format().substr(0, 10)})
                })
                this.setState({
                    calendarEvents : arr,
                    loading : true
                })
           }})
           .catch(error => {  this.setState({error})} );
    }

  calendarComponentRef = React.createRef()
 
  render() {
    console.log(this.state.calendarEvents)  
    console.log(this.state.error)
    if(this.state.loading){
        return (
        <div className='demo-app'>
            <div className='demo-app-calendar'>
            <FullCalendar
                defaultView="dayGridMonth"
                header={{
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
                }}
                plugins={[ dayGridPlugin, timeGridPlugin, interactionPlugin ]}
                events={ this.state.calendarEvents }
                dateClick={ this.handleDateClick }
                />
            </div>
        </div>
        )
    }
    else{
        return(
            <Loader></Loader>
        )
    }
  }





}