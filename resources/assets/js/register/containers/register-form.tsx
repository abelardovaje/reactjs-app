import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {register} from '../actions/register-action';

interface IRegisterFormState{
    value:string,
    name:string,
    email:string,
    password:string
}

interface IRegister{
    (data:any):void
}

interface IRegisterFormProps{
    register:IRegister
}


class RegisterForm extends React.Component<IRegisterFormProps,IRegisterFormState>{
    constructor(props:any){
        super(props);
        this.state = {
            value:'Male',
            name:'',
            email:'',
            password:''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e:any){
        e.preventDefault();
        this.props.register(this.state);
    }

    handleSelectChange(event:any){
        this.setState({
            value:event.target.value
        });
    }

    handleChange(event:any){
        const target = event.target;
        this.setState({
            [target.name]:target.value
        });
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text" 
                        value={this.state.name} 
                        name="name"
                        onChange={this.handleChange}
                        placeholder="Name"/><br/>
                    <input 
                        type="text" 
                        value={this.state.email}
                        name="email"
                        onChange={this.handleChange}
                        placeholder="Email"/><br/> 
                    <input 
                        type="password" 
                        value={this.state.password} 
                        name="password"
                        onChange={this.handleChange}
                        placeholder="Password"/><br/>
                    <select value = {this.state.value}onChange={this.handleSelectChange}>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select><br/><br/>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

function matchStateToProps(state:any){
    return {
        register:state.Register
    }
}

function matchDispatchToProps(dispatch:any){
    return bindActionCreators({
        register:register
    },dispatch);
}

export default connect(matchStateToProps,matchDispatchToProps)(RegisterForm);