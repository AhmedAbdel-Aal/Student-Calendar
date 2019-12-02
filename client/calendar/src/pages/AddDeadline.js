import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'
import {Calendar} from 'primereact/calendar';
import {Messages} from 'primereact/messages';
import SideBar from '../components/Sidebar'
import axios from 'axios'
import './pages.css'
const options = [
    { key: '1', text: 'Quiz', value: 'Quiz' },
    { key: '2', text: 'Milestone', value: 'Milestone' },
    { key: '3', text: 'Task', value: 'Task' },
    { key: '4', text: 'Assignment', value: 'Assignment' },
    { key: '5', text: 'Project', value: 'Project' },
    { key: '6', text: 'Mini-Project', value: 'Mini-Project' },
    { key: '7', text: 'Midterm', value: 'Midterm' },
    { key: '8', text: 'Final', value: 'Final' },

  ]
  
export default class AddDeadline extends Component {
    constructor(props){
        super(props);
        this.showSuccess = this.showSuccess.bind(this);
        this.showError = this.showError.bind(this);

        this.state = {
            courseCode:"",
            name:"",
            type:"",
            date:"",
            description:"",
            loading:false,
        };
    }

    showSuccess() {
        this.messages.show({severity: 'success', summary: 'Success Message', detail: 'Deadline is added'});
    }
    showError(msg) {
        this.messages.show({severity: 'error', summary: 'Error Message', detail: msg});
    }

    submit= async()=>{
        console.log(this.state)
        const body ={
            name : this.state.name,
            type : this.state.type,
            courseName : this.state.courseCode,
            deadline : this.state.date,
            professorName : "temp name",
            description: (this.state.description.length) > 0 ? this.state.description : "None"
        }
        await axios.post("/api/deadline",body,
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

            }
        })
           .catch(error => {  
            this.showError(error.response.data.error)    
            this.setState({error})
        } );
    }

    handleChange = (e, { value }) => this.setState({ value })

    render() {
        const { value } = this.state
        
        return (
            <div class="addDeadline"> 

            <SideBar></SideBar>
            <div class="add-form">
            <Messages ref={(el) => this.messages = el} />
            <h1>Add Deadline</h1>

            <Form>
            <Form.Group widths='equal'>
              <Form.Input required fluid label='Course Code' placeholder='ex: CSEN701' onChange={(e,{value}) => this.setState({courseCode:value})}/>
              <Form.Input required fluid label='Task name' placeholder='ex: milestone 2' onChange={(e,{value}) => this.setState({name:value})}/>
              <Form.Select
                fluid
                label='Task type'
                options={options}
                placeholder='Quiz'
                required
                onChange={(e,{value}) => this.setState({type:value})}
              />
            </Form.Group >
            <Form.Group required inline >
              <label>Deadline</label>
              <Calendar value={this.state.date} onChange={(e) => this.setState({date: e.value})} showTime={true} showSeconds={true} />
            </Form.Group>
            <Form.TextArea  label='description' placeholder='add task description, resources, links ...(optional)' onChange={(e,{value}) => this.setState({description:value})}/>
            <Form.Button onClick={this.submit}>Submit</Form.Button>
          </Form>
          </div>      
            </div>
        )
    }
}
