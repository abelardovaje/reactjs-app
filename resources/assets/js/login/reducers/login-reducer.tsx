import { LOGIN } from '../actions/types-action';
export default function login(state:any = [],action:any = {}){

    switch(action.type){
        case LOGIN:
        console.log('login reducer:',action.payload);
        return state;

        default: return state;
    }
}