import React, {Fragment} from 'react';
import TeacherComp from './TeacherComp';

class TeachersListComp extends React.Component{
    constructor(props){
        super(props);
        this.list = props;
    }
    render(){
        return (
            <Fragment>
                {/* {console.log(this.list.items.map((el)=>el.name))} */}
                {this.list.items.map(teacher => <TeacherComp {...teacher}></TeacherComp>)}
            </Fragment>
        );
    }
}

export default TeachersListComp;