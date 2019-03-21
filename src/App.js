import React, { Component } from 'react';
import './App.css';
import { Container } from 'reactstrap';
import NewTeacherFormComp from './components/NewTeacherFormComp';
import TeachersListComp from './components/TeachersListComp';
import TeachersList from './collections/TeachersList';

class App extends Component {
  render() {
    return (
      <Container>
        <NewTeacherFormComp></NewTeacherFormComp>
        <TeachersListComp {...TeachersList}></TeachersListComp>
      </Container>
    );
  }
}

export default App;
