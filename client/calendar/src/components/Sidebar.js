import React, { Component } from 'react'
import './sidebar.css'
export default class Sidebar extends Component {
  constructor(props){
    super(props);
    this.state = {
        
    };
}


  render() {
    return (
      <div class="side-nav">
       
        <div class="menu-item">
          item1
        </div>

        <div class="menu-item">
          item2
        </div>

        <div class="menu-item">
          item3
        </div>
        
      </div>
    )
  }
}
