import * as React from 'react';
import Login from '../../login/components/login';
class Form extends React.Component<any,any> {
    constructor(props:any){
        super(props);
        this.state = {
            active:true
        }
        this.handleTab = this.handleTab.bind(this);
    }

    handleTab(tab:boolean){
       this.setState({
           active:tab
       });
    }

    render(){
        return(
            <div className="form">
                <div className="form-tabs">
                    <div className="row">
                        <div onClick={()=>this.handleTab(true)}className={`col-lg-6 ${this.state.active ? 'active' : ''}`}>LOGIN</div>
                        <div onClick={()=>this.handleTab(false)}className={`col-lg-6 ${!this.state.active ? 'active' : ''}`}>REGISTER</div>
                    </div>
                </div>
                <div className="form-body container">
                    {this.state.active ? (
                        <div className="login-form">
                            <Login/>                       
                        </div>
                    ):(
                        <div>Register</div>
                    )}              
               </div>             
            </div>         
        );
    }

}

export default Form;