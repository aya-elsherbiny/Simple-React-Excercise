import { Component } from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
export default class Register extends Component{
    constructor(){
        super()
        this.state = {
            Name: '',
            Age: ''
        }
    }
    add=()=>{
        
        if(this.state.Name != '' && this.state.Age!=''){
            this.props.addStudent(this.state.Name, this.state.Age)
            this.setState({ Name: '', Age: ''})
        }
    }

render() {
    return (
        <div>
            <br></br>
            <Form>
                <FormGroup row>
                    <Label for="exampleName" sm={{size:2,offset:2}}>Name</Label>
                    <Col sm={7}>
                    <Input type="text" name="name" value={this.state.Name} id="exampleName" placeholder="student's name" 
                        onChange={(e)=>{
                            this.setState({Name:e.target.value})
                        }}
                    /></Col>
                </FormGroup>
                
            <FormGroup row>
                 <Label for="exampleAge" sm={{size:2,offset:2}}>Age</Label>
                 <Col sm={7}>
                 <Input type="text" name="age" value={this.state.Age} id="exampleAge" placeholder="student's age"
                 onChange={(e)=>{
                    this.setState({Age:e.target.value})
                }}
                 /></Col>
            </FormGroup>
           
            </Form>
            <Col sm={{ size: 3, offset: 7 }}>
                <Button color="success" onClick={this.add}>Add</Button>
            </Col>
            <hr></hr>
        </div>
    )
}
}