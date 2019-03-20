import React, {Fragment} from 'react';

class TeacherComp extends React.Component{
    constructor(props){
        super(props);
        const {name, surname, phone, subject, notes} = props;
        this.state ={
            name,
            surname,
            phone,
            subject,
            notes
        }
    }
    render(){
        return(
            <Fragment>
                {/* {console.log('props',this.props)} */}
                <div>
                    <h2>{`${this.state.name} ${this.state.surname}`}</h2>
                    <p>{this.state.phone}</p>
                    <p>{this.state.subject}</p>
                    <textarea>{this.state.notes}</textarea>
                </div>
            </Fragment>
        );
    }
}
export default TeacherComp;