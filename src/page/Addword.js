import React,{Component} from 'react'
import Header from '../component/Header'
import VocabForm from '../Form/VocabForm'
import {connect} from 'react-redux'
import {create_word,word_fetch} from '../action'
class Addword extends Component{
    componentDidMount(){
        if (this.props.match.params.id) {
            this.props.word_fetch(this.props.match.params.id)
        }
    }
    render(){
        const {formValue,create_word,match} = this.props
        console.log(formValue);
        
        return(
            <div className="container-fluid">
                <Header />
                <br />
                {match.path.indexOf('add')>0 &&
                
                <div className="row">
                    
                        <div className="col">
                                    
                        </div>
                        <div className="col border border-secondary">
                                    
                                    <h1>
                                        Add Word
                                    </h1>
                                    <VocabForm onSubmitWord = {()=>create_word(formValue)}/>
                        </div>
                        <div className="col">
                                    
                        </div>
                    
                    
                </div>
                }
                {match.path.indexOf('edit')>0 &&
                <div className="row">
                <div className="col">
                            
                </div>
                <div className="col border border-secondary">
                            
                            <h1>
                                edit Word
                            </h1>
                            <VocabForm onSubmitWord = {()=>create_word(formValue)}/>
                </div>
                <div className="col">
                            
                </div>
            
            
        </div>
                }
            </div>
        )
    }
}
function mapStateToProps({form}){
    return {formValue : form.VocabForm?form.VocabForm.values:null}
}
export default connect(mapStateToProps,{create_word,word_fetch})(Addword)