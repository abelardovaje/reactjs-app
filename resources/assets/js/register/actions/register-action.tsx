import {REGISTER} from './type-action';
import axios from 'axios';
export function register(data:any){
    console.log(data);

    return (dispatch:any)=>{
        axios.post('register',data).then(function(res){
            dispatch({
                type:REGISTER,
                payload:res.data
            });
        });
    }
}