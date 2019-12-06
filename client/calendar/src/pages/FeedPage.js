import React, { Component } from 'react'
import axios from 'axios'
import SideBar from '../components/Sidebar'
import { Feed, Icon } from 'semantic-ui-react'
import { List } from 'semantic-ui-react'
import Loader from '../components/Loader'
import './pages.css'

var moment = require('moment');

export default class FeedPage extends Component {

  constructor(props){
    super(props);
    this.state = {
        deadlines: [ // initial event data
        ],
        loading:false,
    };
}

  componentDidMount=async()=>{

    
    var courses = []
    const body = {
        username : localStorage.getItem('username'),
        password : localStorage.getItem('password')
    }
    await axios.post("https://gucalendar.herokuapp.com/api/student/login",body,
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

    await axios.get("https://gucalendar.herokuapp.com/api/deadline",
    (       'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  ))
      .then(res =>  res.data)
      .then(json =>{
        if(json.data){
            console.log(json.data)
            let arr = []
            arr = this.state.deadlines
            json.data.map(e =>{
              const flag = courses.find(ele=>{if(ele===e.courseName){return true;}else{return false;}})
              if(flag)
                arr.push(e)

            })
            this.setState({
                deadlines : arr,
                loading : true
            })
            console.log(this.state)
       }})
       .catch(error => {  this.setState({error})} );
     }


    render() {
      const {deadlines,loading} = this.state

      if(loading){
        return (
            <div class="feedpage">
                <SideBar></SideBar>
                <div class="feed">

                <h1>Deadlines feed</h1>

                <List divided relaxed>
                <React.Fragment>
                {deadlines.map(e=>
                  <List.Item style={{overflow:"hidden",marginTop:"10px"}}>
                  <List.Icon name='tasks' size='large' verticalAlign='middle' />
                  <List.Content style={{textAlign:"left"}}>
                    <List.Header as='a'>{e.courseName} / {e.type} / {e.name} </List.Header>
                    <List.Description as='a'></List.Description>
                    <Feed.Event>
                    <Feed.Content>
                      <Feed.Summary>
                        <Feed.Date>deadline : {moment(e).format('LLLL')}</Feed.Date>
                      </Feed.Summary>
                      {
                      (e.Description)?(
                      <Feed.Extra text>
                        {e.Description}
                      </Feed.Extra>
                      )
                      :
                      (
                      <Feed.Extra text>
                        no description added
                      </Feed.Extra>
                      )
                      }
                    </Feed.Content>
                  </Feed.Event>
                  </List.Content>
                  </List.Item>

                 )}
                 </React.Fragment>
              </List>

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
