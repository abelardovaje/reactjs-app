import * as React from 'react';
import { ContactForm } from './contact-form';
import { ContactTable } from './contact-table';

interface IContactState{
    contacts:Array<any>,
    formData:any,
    onEdit:Boolean
}

export class Contact extends React.Component<any,IContactState>{
    public username:string = '';
    constructor(props:any){
        super(props);
        this.state = {
            contacts:[],
            formData:{},
            onEdit:false   
        }
        
        this.loadContacts = this.loadContacts.bind(this);
        this.addNewContact = this.addNewContact.bind(this);
        this.deleteContact = this.deleteContact.bind(this);
        this.editContact = this.editContact.bind(this);
        this.updateContact = this.updateContact.bind(this);
        this.cancelEdit = this.cancelEdit.bind(this);
    }

    componentDidMount(){
        //Load all contacts
        this.loadContacts();
    }

    loadContacts(){
        var data:any[]  = [];
        for(var x = 0;x<10;x++){
             data.push({
                 id:x,
                 name:'user'+x,
                 address:'address'+x,
                 email:'user'+x+'@gmail.com',
                 age:'user'+x+'20'    
             });
        }

        this.setState({
            contacts:data
        });
    }

    addNewContact(payload:any){
        let contacts = this.state.contacts;
        contacts.push(payload);
        this.setState({
           contacts:contacts
        });
    }

    deleteContact(index:number){
        let contacts = this.state.contacts;
        contacts.splice(index,1);
        this.setState({
            contacts:contacts
        });
    }

    editContact(payload:any){     
        this.setState({
            formData:payload,
            onEdit:true
        });
    }

    updateContact(payload:any){
       
        let data:Array<any> = [];
        data = this.state.contacts.filter(function(o){
            return o.id != payload.id;
        });
        data.push(payload);
        this.setState({
            contacts:data,
            onEdit:false
        });
        
    }

    cancelEdit(){
        this.setState({
            onEdit:false
        });
    }

    render(){
        return(
            <div className="contact">

                <ContactForm 
                    addNewContact = {this.addNewContact}
                    updateContact = {this.updateContact}
                    syncFormData={this.state.formData}
                    onEdit={this.state.onEdit}
                    cancelEdit = {this.cancelEdit}
                    
                />
                <ContactTable 
                    contacts = {this.state.contacts} 
                    deleteContact={this.deleteContact}
                    editContact = {this.editContact}
                />             
                {this.state.formData.name} 
               <button onClick={this.editContact}>test</button>                
            </div>
        );
    }
}