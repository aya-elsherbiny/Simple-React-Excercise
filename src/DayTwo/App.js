import { Component } from 'react';
import Register from './register';
import Students from './students';
import StudentDetils from './students.json'
class App extends Component {
  constructor(){
    super();
    this.state = {
      studentsList:StudentDetils
    }
  }
  add = (Name,Age)=>{
    const student ={
      "id":(this.state.studentsList[this.state.studentsList.length-1].id+1),
      "Name":Name,
      "Age":Age
  }
    this.state.studentsList.push(student)
    this.setState({studentsList: this.state.studentsList})
    console.log(this.state.studentsList)
  }
  render=()=>{
    return (
    
      <div className="App">
        <Register addStudent={this.add}/>
        <Students list={this.state.studentsList}/>
      </div>
    );
  }
}
  

export default App;
