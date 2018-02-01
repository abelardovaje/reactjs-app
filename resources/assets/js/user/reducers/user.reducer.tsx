import * as _ from 'lodash';
export default function(state:any=[],action:any = {}){

    switch(action.type){
        case 'FETCH_USERS':
        
           return action.payload;

        case 'ADD_USER':
            console.log('add user',state);
            return [
                ...state,action.payload
            ]
        
        case 'DELETE_USER':
            console.log('Delete user');
            let newState = _.assign({},state);
            
            newState = _.filter(newState,function(o:any){
                return o.id != action.payload.id;
            });

            console.log(newState);
            return newState;
        default:  
            return state;

    }

   
}