import React from 'react'
import Header from '../component/Header'
import {connect} from 'react-redux'
import {list_wotd,delete_word} from '../action'
class ListWord extends React.Component{
    createWord =()=>{
        this.props.history.push('/word/add')
    }
    componentDidMount(){
        this.props.list_wotd()
    }
    renderTable =(words)=>{
        return Array.isArray(words)&& words.map((word,i)=>
             (
                 
                <tr key={i+1}>
                <th scope="row">{i+1}</th>
                <td>{word.word}</td>
                <td>{word.mean}</td>
                <td>{word.category}</td>
                <td>{word.wordTosame}</td>
                <td>{word.class}</td>
                <td>
                    <button className="btn btn-danger" onClick={()=>this.props.delete_word(word._id)}>Delete</button>
                    <button className="btn btn-warning" onClick={()=>this.props.history.push('/word/edit/'+word._id)}>Edit</button>
                </td>
                </tr>
                
            
            )
        
        )
    }
    render(){
        const {words} = this.props
        console.log(words);
        
        return(
            <div>
                <Header />
                <button className="btn-success" onClick={()=>this.createWord()}>create Word</button>
                <table className="table">
                        <thead>
                            <tr>
                            <th scope="col">ลำดับ</th>
                            <th scope="col">คำศัพท์</th>
                            <th scope="col">คำแปล</th>
                            <th scope="col">ประเภทคำ</th>
                            <th scope="col">คำเหมือน</th>
                            <th scope="col">หมวด</th>
                            <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderTable(words)}
                            
                        </tbody>
                </table>
            </div>
        )
    }
}
function mapStateToprop ({words}){
    return {words:words}
}
export default connect(mapStateToprop,{list_wotd,delete_word})(ListWord)