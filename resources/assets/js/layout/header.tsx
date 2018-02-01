import * as React from 'react';
import {Link,NavLink } from 'react-router-dom';
class Header extends React.Component<any,any>{
    constructor(props:any){
        super(props);
        this.state = {
            active:false
        }
    }

    componentDidMount(){
       
    }

    setActive(){
        console.log(this.context);
    }
    render(){
        return (
            <div>
               <header>
                    <div className="top-bar">
                        <div className="container">
                        <div className="row">
                            <div className="col-md-7">
                           
                            <ul className="contact-details">
                                <li><a href="#"><i className="fa fa-map-marker"></i> Welcome Guest, Login</a>                                   
                                </li>
                                <li><a href="#"><i className="fa fa-envelope-o"></i> email@gmail.com</a>
                                </li>
                                <li><a href="#"><i className="fa fa-phone"></i> +639 15 237 8787</a>
                                </li>
                            </ul>
                           
                            </div>
                           
                            <div className="col-md-5">
                         
                            <ul className="social-list">
                                <li>
                                <a className="facebook itl-tooltip" data-placement="bottom" title="Facebook" href="#">
                                    <i className="fa fa-facebook"></i>
                                </a>
                                </li>
                                <li>
                                <a className="twitter itl-tooltip" data-placement="bottom" title="Twitter" href="#">
                                    <i className="fa fa-twitter"></i>
                                </a>
                                </li>
                                <li>
                                <a className="instgram itl-tooltip" data-placement="bottom" title="Instagram" href="#">
                                    <i className="fa fa-instagram"></i>
                                </a>
                                </li>
                            </ul>
                           
                            </div>
                           
                        </div>
                       
                        </div>
                      
                    </div>
                    <div className="container">                          
                        <nav className="navbar navbar-expand-lg navbar-light bg-white">                  
                            <a className="navbar-brand" href="#">
                                LOGO 
                            </a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav">
                                    <li className="nav-item">                                       
                                        <NavLink exact className="nav-link" to='/' >Home</NavLink >
                                    </li>
                                    <li className="nav-item">                              
                                        <NavLink exact className="nav-link" to='/about' >About</NavLink >
                                    </li>                                  
                                </ul>                      
                            </div>
                        </nav>
                    </div>
               </header>
            </div>
        );
    }
}

export default Header;