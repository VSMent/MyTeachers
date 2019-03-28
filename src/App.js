import React, { Component } from 'react';
import './App.css';
import { Container } from 'reactstrap';
import NewTeacherFormComp from './components/NewTeacherFormComp';
import TeachersListComp from './components/TeachersListComp';
import TeachersList from './collections/TeachersList';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {'teachers':TeachersList.items};
  }
  updateData = () =>{
    this.setState({'teachers':TeachersList.items});
  }
  deleteTeacher = (id) =>{
    TeachersList.deleteItem(id);
    this.updateData();
  }
  render() {
    return (
      <Container>
        <NewTeacherFormComp updateData={this.updateData}></NewTeacherFormComp>
        <TeachersListComp deleteTeacher={this.deleteTeacher} {...this.state}></TeachersListComp>
      </Container>
    );
  }
}

export default App;
