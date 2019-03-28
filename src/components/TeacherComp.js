import React /*, {Fragment}*/ from 'react';
import { Button } from 'reactstrap';

class TeacherComp extends React.Component{
    constructor(props){
        super(props);
        const {name, surname, phone, subject, notes, id} = props;
        this.state ={
            name,
            surname,
            phone,
            subject,
            notes,
            id
        }
    }
    render(){
        return(
            <tr>
                <td><p>{this.state.name}</p></td>
                <td><p>{this.state.surname}</p></td>
                <td><p>{this.state.subject}</p></td>
                <td><p>{this.state.phone}</p></td>
                <td>
                    <textarea className="tNotes" readOnly defaultValue={this.state.notes}></textarea>
                    <Button onClick={()=>{this.props.deleteTeacher(this.state.id)}} close />
                </td>
            </tr>
        );
    }
}
export default TeacherComp;