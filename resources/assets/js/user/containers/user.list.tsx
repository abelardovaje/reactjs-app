import  * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {fetchUserFromApi, addUser, deleteUser} from '../actions/user';

class UserList extends React.Component<any,{}>{
    constructor(props:any){
        super(props);
        this.createUserList = this.createUserList.bind(this);
    }

    createUserList(){
        let list = this.props.users.map((user:any,index:number)=>
            <li 
                onClick={()=>this.props.deleteUser(user)}
                key={index}>
                {user.name.first}
            </li>
        );

        return list;
    }
    
    componentDidMount(){
        this.props.fetchUser();
    }
    
    render(){
        return(
           <div>

               <h2>Users list</h2>
               <ul>{ this.createUserList() }</ul>
               <button onClick={()=>this.props.addUser()}>Add user</button>
           </div>
        );
    }
}

function mapStateToProps(state:any){
    return {
        users:state.Users
    }
}

function matchDispatchToProps(dispatch:any){
    return bindActionCreators({
        fetchUser:fetchUserFromApi,
        addUser:addUser,
        deleteUser:deleteUser
    },dispatch);
}

export default connect(mapStateToProps,matchDispatchToProps)(UserList);