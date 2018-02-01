//action creators
import axios from 'axios';
export function fetchUserFromApi(){
    return (dispatch:any) => {
        axios.get('https://randomuser.me/api/').then(function(res){
           dispatch({
            type:'FETCH_USERS',
            payload:res.data.results
           });
        });
    }
}

export function addUser(){
    
    return {
        type:'ADD_USER',
        payload:{
            name:{
                first:'abel'
            },
            id:2
        }
    }

}

export function deleteUser(id:number){
    return {
        type:'DELETE_USER',
        payload:id
    }
}
