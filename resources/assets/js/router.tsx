import * as React from 'react';
import { Provider } from 'react-redux';
import {
    BrowserRouter ,
    Route,
    Switch
} from 'react-router-dom';

import Home from './home/components/home';
import Header from './layout/header';
interface IRouter{
    store:any
}

const Root: React.SFC<any> = (props) => {
    return (
        <div>
          <Home/>
        </div>
    )
}

const Router: React.SFC<IRouter> = (props) =>{
   return (
        <Provider store = {props.store}>

            <BrowserRouter>
                <div>
                    <Header/>
                    <Switch>                      
                        <Route path='/' exact component={Root}></Route>
                        <Route path='/about' exact render={()=><div>about</div>}></Route>
                    </Switch>                                 
                </div>
            </BrowserRouter>

        </Provider>
    )
}

export default Router;
