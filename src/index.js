import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter, Route, Router, Switch} from "react-router-dom";
import UsersPage from "./routes/users";
import ProfilesPage from "./routes/profiles";


const rootElement = document.getElementById('root')

ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
    , rootElement
);
