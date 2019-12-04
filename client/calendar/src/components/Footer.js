import React, { Component } from 'react'
import './footer.css'

export default class Footer extends Component {
    render() {
        return (
        <div class="footer">
           
           <div class="section1">
             <div class="logo">
                <a class="navbar-brand" href="/home">
                <img src={"https://pbcdn1.podbean.com/imglogo/image-logo/1002739/test01.jpg"} alt="Logo" height={100} width={110}  />
                </a>
             </div>
            <p class="f-title">Kiwi-School</p>
            <p class="f-slogan">Keep it simple as possible</p>
           </div>


           <div class="section2">

             <div class="f-feed">
               <p class="f-feed-header">Feedback</p>
               <p class="f-feed-exp">Please give us a feedback by giving us your opinion or if you encoutred any problem
               through report problem card in your profile</p>
             </div>

             <div class="f-cp">
              <p>© Copyright 2019- Kiwi-School- All Rights Reserved</p>
             </div>
           </div>


        </div>
        )
    }
}