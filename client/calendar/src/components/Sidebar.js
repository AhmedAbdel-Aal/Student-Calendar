import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import './sidebar.css'


export default class Sidebar extends Component {
  constructor(props){
    super(props);
    this.state = {
      activeItem1: 'home',
      activeItem2: 'home',
      view1:true,
      view2:true,

    };
}

handleItemClick1 = (e, { name }) => this.setState({ activeItem1: name })
handleItemClick2 = (e, { name }) => this.setState({ activeItem2: name })
view1 =()=>{this.setState({view1 : !this.state.view1})}
view2 =()=>{this.setState({view2 : !this.state.view2})}
SignOut =()=>{
  
}

  render() {
    const {activeItem1,activeItem2} = this.state;
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
            onClick={this.handleItemClick1}
            style={{width:"100%",fontSize:"17px"}}
          />
          <Menu.Item
            name='Feed View'
            active={activeItem1 === 'Feed View'}
            onClick={this.handleItemClick1}
            style={{width:"100%",fontSize:"17px"}}
          />
        </Menu.Menu>
        }
    </Menu.Item>


    <Menu.Item  style={{width:"100%"}} >

    <Menu.Item  onClick={this.view2}>
    <Menu.Header style={{width:"100%",fontSize:"24px",fontWeight:"200"}}>Deadline type</Menu.Header>
    </Menu.Item>

    {this.state.view2 &&
     <Menu.Menu>
        <Menu.Item
         name='All'
         active={activeItem2 === 'All'}
         onClick={this.handleItemClick2}
         style={{width:"100%",fontSize:"17px"}}
        />
       <Menu.Item
         name='Task'
         active={activeItem2 === 'Task'}
         onClick={this.handleItemClick2}
         style={{width:"100%",fontSize:"17px"}}
       />
       <Menu.Item
         name='Assignment'
         active={activeItem2 === 'Assignment'}
         onClick={this.handleItemClick2}
         style={{width:"100%",fontSize:"17px"}}
       />
       <Menu.Item
         name='Mini-Project'
         active={activeItem2 === 'Mini-Project'}
         onClick={this.handleItemClick2}
         style={{width:"100%",fontSize:"17px"}}
       />
       <Menu.Item
         name='Project'
         active={activeItem2 === 'Project'}
         onClick={this.handleItemClick2}
         style={{width:"100%",fontSize:"17px"}}
       />
       <Menu.Item
         name='Milestone'
         active={activeItem2 === 'Milestone'}
         onClick={this.handleItemClick2}
         style={{width:"100%",fontSize:"17px"}}
       />
       <Menu.Item
         name='Quiz'
         active={activeItem2 === 'Quiz'}
         onClick={this.handleItemClick2}
         style={{width:"100%",fontSize:"17px"}}
       />
       <Menu.Item
         name='Midterm'
         active={activeItem2 === 'Midterm'}
         onClick={this.handleItemClick2}
         style={{width:"100%",fontSize:"17px"}}
       />
       <Menu.Item
         name='Final'
         active={activeItem2 === 'Final'}
         onClick={this.handleItemClick2}
         style={{width:"100%",fontSize:"17px"}}
       />
     </Menu.Menu>
    }
 </Menu.Item>

    <Menu.Item  onClick={this.SignOut}>
    <Menu.Header style={{width:"100%",fontSize:"24px",fontWeight:"200"}}>Sign out</Menu.Header>
    </Menu.Item>
    </Menu>
        
      </div>
    )
  }
}
