import React from 'react'
import {connect} from 'react-redux'
import Header from '../component/Header'

class ListAnswer extends React.Component{
    renderTable =(answers)=>{
        return Array.isArray(answers) && answers.map((answer,i)=>{
            return(
                <tr key={i+1}>
                <th scope="row">{i+1}</th>
                <td>{answer.question}</td>
                <td>{answer.choice}</td>
                <td>{answer.choiceCorrect}</td>
                
                <td>
                    <button className="btn btn-danger" >Delete</button>
                    <button className="btn btn-warning" >Edit</button>
                </td>
                </tr>
            )
        })
    }
    render(){
        const {answers} = this.props
        return(
            <div>
                <Header />
                <button className="btn-success" onClick={()=>this.props.history.push('/answer/add')}>Create Answer</button>
                <table className="table">
                        <thead>
                            <tr>
                            <th scope="col">ลำดับ</th>
                            <th scope="col">คำถาม</th>
                            <th scope="col">ตัวเลือก</th>
                            <th scope="col">เฉลย</th>
                            <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                           {this.renderTable(answers)}
                        </tbody>
                </table>
            </div>
        )
    }
}
function mapStateToProps({answers}){
    return {answers:answers}
}
export default connect(mapStateToProps)(ListAnswer)