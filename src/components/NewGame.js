import React from 'react';
import { createHashHistory } from "history";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";


export default function NewGame() {
    console.log('new game has begun')
    //new game, ask for name, choose difficulty
    //set new params for global vars according to difficulty
    // route to the about
    let gameStats = sessionStorage.getItem('gameStats');
    console.log(gameStats);

    // const history = createHashHistory();

    // history.go("/about");
}