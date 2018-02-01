import * as React from 'react';
import { ChatSidePanel } from './chat-side-panel';
import { ChatPanel } from './chat-panel';
export class Chat extends React.Component<any,any>{
    constructor(props:any){
        super(props);
    }

    render(){
        return(
            <div className="chat">
                               
                <ChatSidePanel/>
                <ChatPanel/>

            </div>
        )
    }
}