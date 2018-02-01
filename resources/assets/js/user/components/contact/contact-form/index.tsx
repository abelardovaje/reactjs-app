import * as React from 'react';
import * as _ from 'lodash';
interface IContactFromState {
    name:string,
    email:string,
    address:string,
    age:number,
    [propName: string]: any;
}

interface IContactFromProps{
    addNewContact:any,
    updateContact:any,
    cancelEdit:any,
    syncFormData:any,
    onEdit:Boolean
}

export class ContactForm extends React.Component<IContactFromProps,IContactFromState>{
    constructor(props:any){
        super(props)
        this.state = {
            name:'',
            email:'',
            address:'',
            age:0,
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.cancelEdit = this.cancelEdit.bind(this);
       
    }

    handleChange(event:any){
        const target = event.target;
        const value = event.target.value;
        const name = target.name;
		this.setState({
			[name]:value
		});		
    }

    componentWillReceiveProps(prevProps:any, prevState:any){

       var formData = prevProps.syncFormData;
       if(!prevProps.onEdit) return;//Dont update form state

       if(!_.isEmpty(formData)){
        this.setState({
            id:formData.id,
            name:formData.name,
            email:formData.email,
            age:formData.age,
            address:formData.address
        });
       }     
       
    }
    
    handleSubmit(event:any){
        event.preventDefault();
      
        var data = {
            id:this.state.id,
            name:this.state.name,
            email:this.state.email,
            address:this.state.address,
            age:this.state.age,
        }

        if(this.props.onEdit){
             this.props.updateContact(data);
        }else{       
            this.props.addNewContact(data);
        }

        //Reset form inputs
        for(var x in this.state){
            this.setState({
                [x]:''
            })
        }
        
    }

    cancelEdit(event:any){
        event.preventDefault();
         //Reset form inputs
        this.props.cancelEdit();
        for(var x in this.state){
            this.setState({
                [x]:''
            })
        }
    }

    render(){
        return (
            <div className="contact-form">
            
                <form onSubmit={this.handleSubmit}>
                    <div>Name:
                        <input 
                        type="text" 
                        placeholder="Name" 
                        name="name" 
                        value={this.state.name} 
                        onChange={this.handleChange}/>
                    </div>
                    <div>Address:
                        <input 
                        type="text"
                        placeholder="Address"
                        name="address"
                        value={this.state.address}
                        onChange={this.handleChange}/>
                    </div>
                    <div>Email:
                        <input 
                         type="text"
                         placeholder="Email"
                         name="email"
                         value={this.state.email}
                         onChange={this.handleChange}/>                         
                    </div>
                    <div>Age:
                        <input 
                         type="text"
                         placeholder="Age"
                         name="age"
                         value={(this.state.age == 0) ? '': this.state.age}
                         onChange={this.handleChange}/>                        
                    </div>
                    
                   
                    {this.props.onEdit ? (
                        <div><button>Update</button> <button onClick={this.cancelEdit}>Cancel</button></div>
                    ):(
                        <div><button>Submit</button> </div>
                    )}
                   
                </form>

            </div>
          
        );
    }
}