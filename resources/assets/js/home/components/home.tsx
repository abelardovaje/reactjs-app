import * as React from 'react';
import Form from './form';
import App from '../../user/components/App';
const Home: React.SFC = (props) =>{
    return (
        <div id="home">
            <div id="main-slide">
      
                <div className="container ">
                    <Form/>                              
                </div>  
                              
            </div>   

            <App compiler=''/>  
        </div>
    )
}

export default Home;