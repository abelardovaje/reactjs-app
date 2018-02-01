
import * as React from 'react';
import * as ReactDOM from "react-dom";
import '../sass/app.scss';
import App  from "./user/components/App";
import store from './store';
import Router from './router';

ReactDOM.render(
    <Router store={store}/>,
    document.getElementById("app")
);