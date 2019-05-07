import React, { Component } from "react";
import "./App.css";
import MainComponent from "./components/MainComponent"
import firebase from "firebase";
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStroopwafel } from "@fortawesome/free-solid-svg-icons";
import SignIn from "./components/Signin"
// Initialize Firebase
let config = {
  apiKey: "AIzaSyCnj6nYUvn9KcY1E1ixsuxbsYd9EhOxAs8",
  authDomain: "admin-panel-debec.firebaseapp.com",
  databaseURL: "https://admin-panel-debec.firebaseio.com",
  projectId: "admin-panel-debec",
  storageBucket: "admin-panel-debec.appspot.com",
  messagingSenderId: "986913561934"
};
firebase.initializeApp(config);
class App extends Component {
  constructor(props){
    super(props)
   
  }
  componentDidMount(){
   
  }
 
  render() {
    return (
      // navebar
      <Router>
      <Route path="/" exact component={SignIn} />
      <Route path="/Dashboard" component={MainComponent} />
    
      </Router>
    );
  }
}

export default App;
