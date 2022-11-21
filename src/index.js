import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { App } from './app';
import Header from "./components/topbar";


ReactDOM.render( < Header / > , document.getElementById('header'));
ReactDOM.render( < App / > , document.getElementById('container'));