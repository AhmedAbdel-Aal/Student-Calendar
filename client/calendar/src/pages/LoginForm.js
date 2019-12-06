import React, { Component } from 'react'
import axios from 'axios'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import {Growl} from 'primereact/growl';
import {Redirect } from 'react-router-dom';

import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';


export default class LoginForm extends Component {
    constructor(props){
        super(props);
        this.state = {
           email:"",
           pass:"",
           courses:[],
           type:"",
           redirect:false,

        };
    }

    login=async()=>{
        console.log("logiiiiiiiiiiiin")
        console.log(this.state)
        const body = {
            username : this.state.email,
            password : this.state.pass
        }
        await axios.post("https://gucalendar.herokuapp.com/api/student/login",body,
        (       'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
      ))
          .then(res =>  res.data)
          .then(json =>{
            console.log(json)  
            if(json.err){
                this.showError()   
            }
            else{
                this.showSuccess()
                this.setState({
                    redirect:true,
                    courses: json.data.courses,
                    type: json.data.type
                })
                localStorage.setItem('username', json.data.username)
                localStorage.setItem('password', json.data.password)
                localStorage.setItem('type', json.data.type)

            }
        })
           .catch(error => {  this.setState({error})} );
    }

    handleChange = name => event => {
        this.setState({
          [name]: event.target.value,
        });
      };
  
    

    showSuccess() {
        this.growl.show({severity: 'success', summary: 'Success Message', detail: 'logged in'});
    }

    showError() {
        this.growl.show({severity: 'error', summary: 'Error Message', detail: 'Validation failed'});
    }

    render() {
        console.log(this.state)
        if(this.state.redirect){
            return(
                
                <Redirect to={{pathname:`/home-calendar`,state:{username:this.state.email,password:this.state.pass,courses:this.state.courses}}} />
            )
        }
        else{
            return (
                <div>
                <Grid textAlign='center' style={{ minHeight: '100vh',background:"white",width:"40%",float:"right" }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                <Growl ref={(el) => this.growl = el} />
                <Header as='h2' color='teal' textAlign='center'>
                    <Image src='https://pbcdn1.podbean.com/imglogo/image-logo/1002739/test01.jpg' /> Log-in to your account
                </Header>
                <Form size='large'>
                    <Segment stacked>
            
                    <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address'                 onChange={this.handleChange('email')}
                    onChange={this.handleChange('email')}
                    />
                    <Form.Input
                        fluid
                        icon='lock'
                        iconPosition='left'
                        placeholder='Password'
                        type='password'
                        onChange={this.handleChange('pass')}
                    />
            
                    <Button color='teal' fluid size='large' onClick={this.login}>
                        Login
                    </Button>
                    </Segment>
                </Form>
                </Grid.Column>
            </Grid>
                </div>
            )
        }
    }
}
