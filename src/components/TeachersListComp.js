import React from 'react';
import { Table } from 'reactstrap';
import TeacherComp from './TeacherComp';

class TeachersListComp extends React.Component{
    constructor(props){
        super(props);
        this.list = props;
    }
    render(){
        return (
            <Table striped>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>Phone</th>
                        <th>Subject</th>
                        <th>Notes</th>
                    </tr>
                </thead>
                <tbody>
                    {this.list.items.map(teacher => <TeacherComp {...teacher}></TeacherComp>)}
                </tbody>
            </Table>
        );
    }
}

export default TeachersListComp;