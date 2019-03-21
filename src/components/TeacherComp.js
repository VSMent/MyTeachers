import React /*, {Fragment}*/ from 'react';

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
            // <Fragment>
               // {/* {console.log('props',this.props)} */}
                // <div>
                <tr>
                    <td><p>{this.state.name}</p></td>
                    <td><p>{this.state.surname}</p></td>
                    <td><p>{this.state.phone}</p></td>
                    <td><p>{this.state.subject}</p></td>
                    <td><textarea className="tNotes" defaultValue={this.state.notes}></textarea></td>
                    </tr>
                    // </div>
            // </Fragment>
        );
    }
}
export default TeacherComp;