import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import {Redirect } from 'react-router-dom';
import './sidebar.css'


export default class Sidebar extends Component {
  constructor(props){
    super(props);
    this.state = {
      activeItem1: this.props.page==="home",
      activeItem2: this.props.page=="feed",
      redirect1: false,
      redirect2: false,
      log:false,
      add:false,
      view1:true,
      view2:true,

    };

}

componentDidMount=()=>{
  if(this.props.page==="home"){
     this.setState({
       activeItem1:"Calendar View",
     })
    }
     else{
      this.setState({
        activeItem1:"Feed View",
      })
     }
  
}

handleItemClickHome = (e, { name }) =>{ 
  if(this.state.activeItem1 === "Feed View")
  this.setState({ activeItem1: name , redirect1:true })
  }

handleItemClickFeed = (e, { name }) =>{
  if(this.state.activeItem1==="Calendar View")
   this.setState({ activeItem1: name , redirect2:true })
}

handleItemClick2 = (e, { name }) =>{ 
  this.props.handleTypeClicked(name)
  this.setState({ activeItem2: name })}
view1 =()=>{this.setState({view1 : !this.state.view1})}
view2 =()=>{this.setState({view2 : !this.state.view2})}
SignOut =()=>{localStorage.clear();this.setState({log:true})}
add =()=>{this.setState({add:true})}

  render() {
    console.log(this.state)
    const {activeItem1,activeItem2,redirect1,redirect2,log,add} = this.state;
    if(redirect1){
      return(
        <Redirect to={{pathname:`/home-calendar`,state:{username:this.props.username,password:this.props.password,courses:this.props.courses}}} />
        )
    }
    if(redirect2){
      return(
        <Redirect to={{pathname:`/home-feed`,state:{username:this.props.username,password:this.props.password,courses:this.props.courses}}} />
        )
    }
    if(log){
      return(
        <Redirect to={{pathname:`/`}}/>
      )
    }if(add){
      return(
        <Redirect to={{pathname:`/add-deadline`}}/>
      )
    }
    return (
      <div class="side-nav">
       
      <Menu inverted vertical style={{width:"100%",margin:"1px"}}>

      <Menu.Item  style={{width:"100%"}} >

      <Menu.Item    onClick={this.view1}> 
        <Menu.Header style={{width:"100%",fontSize:"24px",fontWeight:"500"}} >Deadline view</Menu.Header>
      </Menu.Item>  
        {this.state.view1 &&
        <Menu.Menu >
          <Menu.Item
            name='Calendar View'
            active={activeItem1 === 'Calendar View'}
            onClick={this.handleItemClickHome}
            style={{width:"100%",fontSize:"17px"}}
          />
          <Menu.Item
            name='Feed View'
            active={activeItem1 === 'Feed View'}
            onClick={this.handleItemClickFeed}
            style={{width:"100%",fontSize:"17px"}}
          />
        </Menu.Menu>
        }
    </Menu.Item>


    

 {(localStorage.getItem('type')==="instructor")&&
 <Menu.Item  onClick={this.add}>
 <Menu.Header style={{width:"100%",fontSize:"24px",fontWeight:"200"}}>Add Deadline</Menu.Header>
 </Menu.Item>
  }

    <Menu.Item  onClick={this.SignOut}>
    <Menu.Header style={{width:"100%",fontSize:"24px",fontWeight:"200"}}>Sign out</Menu.Header>
    </Menu.Item>
    </Menu>
        
      </div>
    )
  }
}
