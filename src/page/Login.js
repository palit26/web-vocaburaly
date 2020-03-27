import React,{Component} from 'react'
import {connect} from 'react-redux'
import LoginForm from '../Form/LoginForm'
import {login} from '../action'
let Token = localStorage.getItem('token')
class Login extends Component{
    componentDidMount(){
        
        if (Token) {
            this.props.history.push('/listword')
        }
    }
    render(){
        const {formValue,login} = this.props
        console.log(formValue);
        
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                                
                    </div>
                    <div className="col border border-secondary">
                                 <h1>
                                    Login Page
                                </h1>
                                <LoginForm  onSubmitLogin={()=>login(formValue)} />
                    </div>
                    <div className="col">
                                 
                    </div>
                </div>
                
            </div>
        )
    }
}
function mapStateToProps({form,users}){
    return {formValue:form.LoginForm?form.LoginForm.values:null,users:users}
}
export default connect(mapStateToProps,{login})(Login)