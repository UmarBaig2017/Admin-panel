import React, { Component } from "react";
import "./App.css";
import MainComponent from "./components/MainComponent"
import firebase from "firebase";
import { BrowserRouter as Router, Route } from "react-router-dom"

import SignIn from "./components/Signin"
// Initialize Firebase
let config = {
  apiKey: "AIzaSyBCptsMZftMbTiFjEF5qDFEgcEeSFUzaBQ",
    authDomain: "chidlcareapp.firebaseapp.com",
    databaseURL: "https://chidlcareapp.firebaseio.com",
    projectId: "chidlcareapp",
    storageBucket: "chidlcareapp.appspot.com",
    messagingSenderId: "998871249996",
    appId: "1:998871249996:web:9fb45eda2d0b20db"
};
firebase.initializeApp(config);
class App extends Component {
  componentDidMount(){
   
  }
 
  render() {
    return (
      // navebar
      <Router>
      <Route exact path="/" component={SignIn} />
      <Route path="/Dashboard" component={MainComponent} />
    
      </Router>
    );
  }
}

export default App;
