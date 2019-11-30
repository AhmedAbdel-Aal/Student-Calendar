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
    await axios.get("/api/deadline",
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
                <List.Item style={{overflow:"hidden"}}>
                  <List.Icon name='tasks' size='large' verticalAlign='middle' />
                  <List.Content style={{textAlign:"left"}}>
                    <List.Header as='a'>{deadlines[0].courseName} / {deadlines[0].type} / {deadlines[0].name} </List.Header>
                    <List.Description as='a'></List.Description>
                    <Feed.Event>
                    <Feed.Content>
                      <Feed.Summary>
                        <Feed.Date>deadline : {moment(deadlines[0]).format('LLLL')}</Feed.Date>
                      </Feed.Summary>
                      {
                      (deadlines[0].Description)?(
                      <Feed.Extra text>
                        {deadlines[0].Description}
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
