import React from 'react';
import { Table } from 'reactstrap';
import TeacherComp from './TeacherComp';
// import TeachersList from '../collections/TeachersList';

class TeachersListComp extends React.Component{
    // constructor(props){
    //     super(props);
    //     this.state = TeachersList;
    // }
    render(){
        return (
            <Table striped>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>Subject</th>
                        <th>Phone</th>
                        <th className="tNotes">Notes</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.teachers.map(teacher => <TeacherComp deleteTeacher={this.props.deleteTeacher} {...teacher}></TeacherComp>)}
                </tbody>
            </Table>
        );
    }
}

export default TeachersListComp;