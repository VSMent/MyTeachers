import React, { Component } from 'react';
import './App.css';
import TeachersListComp from './components/TeachersListComp';
import TeachersList from './collections/TeachersList';

class App extends Component {
  render() {
    return (
      <div>
        <TeachersListComp {...TeachersList}></TeachersListComp>
      </div>
    );
  }
}

export default App;
