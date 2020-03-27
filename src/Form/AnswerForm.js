import React ,{Component} from 'react'
import {reduxForm,Field,FieldArray} from 'redux-form'
import {connect} from 'react-redux'
import VocabFormfield from '../Form/validForm/VocabFormfield'
class AnswerForm extends Component {
    renderChoice=({fields})=>(
        <ul>
            <button type="button" onClick={() => fields.push({})}className="btn  btn-info" >Add Choic</button>
            {fields.map((choice,i)=>(
                <div key={i+1}>
                    <h4>Choice #{i+1}</h4>
                    <button
                        type="button"
                        title="Remove Member"
                        onClick={() => fields.remove(i)} className="btn  btn-danger float-right">x</button>
                    <div>
                    <Field
                        // label ={`ตัวเลือก${i+1}`}
                        type="text"
                        name={`choice${i+1}`}
                        component={VocabFormfield}
                        />
                    </div>

                </div>
            ))}

        </ul>
    )
    render(){
        const {handleSubmit,onSubmitAdd} = this.props
        return(
            <div>
                <form onSubmit={handleSubmit(onSubmitAdd)}>
                <Field
                label ="คำถาม"
                type="text"
                name="question"
                component={VocabFormfield}
                />
                <FieldArray name="choice" component={this.renderChoice}/>

                <Field
                label ="เฉลย"
                type="text"
                name="choiceCorrect"
                component={VocabFormfield}
                />
                <button className="btn btn-primary btn-block" >create</button> 

                </form>
            </div>
        )
    }
}
AnswerForm = reduxForm({form:'AnswerForm'})(AnswerForm)
export default AnswerForm