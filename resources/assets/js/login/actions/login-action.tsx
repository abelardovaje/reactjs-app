import { LOGIN } from './types-action';
import axios from 'axios';
export function login(data:any){
    console.log('LOGIN:',data);
    return (dispatch:any)=>{
        axios.post('login').then(function(res){
            dispatch({
                type:LOGIN,
                payload:res.data
            });
        });
    }
}