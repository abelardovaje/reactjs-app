import {REGISTER} from '../actions/type-action';
export default (state:any = [],action:any) =>{
    switch(action.type){
        case REGISTER:
        console.log('Register',action.payload);
        return state;

        default : return state;
    }
} 