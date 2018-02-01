import * as React from 'react';
import * as _ from 'lodash';
export class ContactTable extends React.Component<any,any>{
    constructor(props:any){
        super(props)
        this.loadContacts = this.loadContacts.bind(this);     
    }

    loadContacts(){
        let list = this.props.contacts.map((contact:any,index:number) =>
            <tr key={index}>
                <td>{contact.id}</td>
                <td>{contact.name}</td>
                <td>{contact.address}</td>
                <td>{contact.email}</td>
                <td>{contact.age}</td>
                <td>
                    <button onClick={this.props.editContact.bind(this,contact)}>Edit</button>
                    <button onClick={this.props.deleteContact.bind(this,index)}>Delete</button>
                </td>
            </tr>
        );
            
        return list;
    }

    render(){
        return (
            <div className="contact-table">
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                       {this.loadContacts()}
                    </tbody>
                </table>           
            </div>
        );
    }
}