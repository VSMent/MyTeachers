import React from 'react';
import { Button, Form, Label, Input, FormGroup, Col } from 'reactstrap';
import TeacherList from '../collections/TeachersList';

class NewTeacherFormComp extends React.Component{
    // constructor(props){
    //     super(props);
    // }
    onSubmit = e =>{
        e.preventDefault();
        const form = e.currentTarget;
        TeacherList.addItem({
            'name':form.tName.value,
            'surname':form.tSurname.value,
            'phone':form.tPhone.value,
            'subject':form.tSubject.value,
            'notes':form.tNotes.value
        });
    }
    render(){
        return(
            <Form onSubmit={this.onSubmit}><br/>
            <FormGroup row>
                <Label for="tName" sm={2}>Name*</Label>
                <Col sm={4}>
                    <Input 
                        type="text" 
                        name="tName" 
                        id="tName" 
                        placeholder="Teacher's name here.."
                        required 
                        value="a"
                    />
                </Col>
                <Label for="tSurname" sm={2}>Surname*</Label>
                <Col sm={4}>
                    <Input 
                        type="text" 
                        name="tSurname" 
                        id="tSurname" 
                        placeholder="Teacher's surname here.."
                        required
                        value="a"
                    />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="tSubject" sm={2}>Subject*</Label>
                <Col sm={4}>
                    <Input 
                        type="text" 
                        name="tSubject" 
                        id="tSubject" 
                        placeholder="Teacher's subject here.."
                        required
                        value="a"
                    />
                </Col>
                <Label for="tPhone" sm={2}>Phone</Label>
                <Col sm={4}>
                    <Input 
                        type="tel" 
                        name="tPhone" 
                        id="tPhone" 
                        placeholder="+380XXXXXXXXX"
                        pattern="^\+380[0-9]{9}$"
                    />
                </Col>
                <br/><br/>
                <Label for="tNotes" sm={2}>Notes</Label>
                <Col sm={8}>
                <textarea 
                    placeholder="Teacher's notes here.." 
                    className="newTNotes" 
                    id="tNotes"
                ></textarea>
                </Col>
                <Col sm={2}>
                    <Button className="submitBtn">Add Teacher</Button>
                </Col>
                </FormGroup>
            </Form>
        );
    }
}

export default NewTeacherFormComp;