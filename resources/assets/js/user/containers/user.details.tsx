import * as React from 'react';
import { connect } from 'react-redux';

class UserDetails extends React.Component<any,{}>{
    constructor(props:any){
        super(props);
    }
    render(){
        if(!this.props.user){
            return (<h3>Select user..</h3>)
        }
        return(
            <div>
                <h2>User details</h2>
                <ul>
                    <li>Name:{this.props.user.name}</li>
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state:any){
    return{
        user:state.User
    }
}


export default connect(mapStateToProps)(UserDetails);