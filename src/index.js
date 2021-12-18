import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter, Route, Router} from "react-router-dom";
import UsersPage from "./routes/users";
import ProfilesPage from "./routes/profiles";


const rootElement = document.getElementById('root')

ReactDOM.render(
    <App/>
    // <BrowserRouter>
    //     <Router>
    //         <Route path="/"  component={<App/>}/>
    //         <Route path="users" component={<UsersPage/>}/>
    //         <Route path="profiles" component={<ProfilesPage/>}/>
    //     </Router>
    // </BrowserRouter>
    , rootElement
);
