import * as React from "react";
import { Chat } from './chat';
import { Contact } from './contact';
import UserList from '../containers/user.list';
import UserDetails from '../containers/user.details';
// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' types.
interface Istate {
    name:String
}

interface IProps {
    compiler:String
}

export default class App extends React.Component<IProps,Istate>{
   
    constructor(props:any){
        super(props);		      
    }
    
    render() {
        return(
          <div className="">  
            <UserList/>
            <UserDetails/>        
          </div>  
        );
    }
}