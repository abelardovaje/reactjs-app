import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login } from '../actions/login-action';

interface ILoginFormState{
    username:string,
    password:string
}

interface ILoginProps{
    login:void
}

class LoginForm extends React.Component<any,ILoginFormState>{
    constructor(props:any){
        super(props);
        this.state = {
            username:'',
            password:''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event:any){
        const target = event.target;
        this.setState({
            [target.name]:target.value
        });   
    }

    handleSubmit(event:any){
        event.preventDefault();
        this.props.login(this.state);
    }

    render(){
        return (        
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                <label>Username</label>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">
                            <i className="fa fa-user"></i>
                            </span>
                        </div>
                        <input 
                            type="text" 
                            className="form-control"
                            name="username"
                            value={this.state.username}
                            onChange={this.handleChange}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label >Password</label>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">
                                <i className="fa fa-lock"></i>
                            </span>
                        </div>
                        <input 
                            type="password"
                            className="form-control"
                            name="password"
                            value = {this.state.password} 
                            onChange={this.handleChange}
                        />
                    </div>
                </div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label">Remember me</label>
                </div>
                <br/>
                <button type="submit" className="btn btn-primary btn-block">Submit</button>
            </form>    
            
        )
    }
}

function matchStateToProps(state:any){
    return {
        login:state.Login
    }
}

function  matchDispatchToProps(dispatch:any){
    return bindActionCreators({
        login:login
    },dispatch);
}

export default connect(matchStateToProps,matchDispatchToProps)(LoginForm);