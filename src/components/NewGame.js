import React from 'react';
import { createHashHistory } from "history";
import {  BrowserRouter as Router,  Switch,  Route, Redirect} from "react-router-dom";


export default function NewGame() {
    //new game, ask for name, choose difficulty
    //set new params for global vars according to difficulty
    // route to the about
console.log('here we go again')
    const history = createHashHistory();

    history.go("/about");
}