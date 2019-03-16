import React, { Component } from "react";
import "./practitioner.css";
import firebase from "firebase"
import uuid from "uuid";
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
export default class Practitioner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
      fname: "",
      lname: "",
      email: "",
      password: "",
      postCode: "",
      region:"",
      contactNum: "",
      DBScheck:"",
      DBS: "",
      DBSnum:"",
      DBSdate:"",
      Qualification:"",
      level:"",
      degree:"",
    Gender:"",
    Age:"",
    Care:"",
      info:"",
    };
  }
 
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
    
  }
  handleSubmit(e){
    e.preventDefault()
   
    let db =firebase.database()
    db.ref("Practitioners").push(this.state).then((e)=>{
     console.log("submit")
       
    })


    console.log(this.state)
  }
  render() {
    return (
      
      <div>
      <div><h1>Practitioner</h1></div>
        <form className="prac-form">
          First Name:
          <input
            type="text"
            value={this.state.fname}
            onChange={this.handleChange.bind(this)}
            name="fname"
            autoFocus={true}
            className="form-control"
          />
          Second Name:
          <input
            type="text"
            value={this.state.lname}
            onChange={this.handleChange.bind(this)}
            name="lname"
            autoFocus={true}
            className="form-control"
          />
          Email
          <input
            type="email"
            name="email"
            autoFocus={true}
            onChange={this.handleChange.bind(this)}
            value={this.state.email}
            className="form-control"
            required="required"
          />
          password:
          <input
          type="password"
          value={this.state.password}
          onChange={this.handleChange.bind(this)}
          name="password"
          autoFocus={true}
          className="form-control"
        />
          Region:
          <input
          type="text"
          value={this.state.region}
          onChange={this.handleChange.bind(this)}
          name="region"
          autoFocus={true}
          className="form-control"
        />
          contact:
          <input
          type="text"
          value={this.state.contactNum}
          onChange={this.handleChange.bind(this)}
          name="contactNum"
          autoFocus={true}
          className="form-control"
        />
          Post code :
          <input
          type="text" pattern="[0-9]*"
          value={this.state.postCode}
          onChange={this.handleChange.bind(this)}
          name="postCode"
          autoFocus={true}
          className="form-control"
        />
          Do you have valid DBS :
          <input
          type="text"
          value={this.state.DBScheck}
          onChange={this.handleChange.bind(this)}
          name="DBScheck"
          className="form-control"
        />
          DBS number :
          <input
          type="text"
          value={this.state.DBSnum}
          onChange={this.handleChange.bind(this)}
          name="DBSnum"
          className="form-control"
        />
          DBS Expriry data :
          <input
          type="date"
          value={this.state.DBSdate}
          onChange={this.handleChange.bind(this)}
          name="DBSdate"
          className="form-control"
        />
          Qualification :
          <input
          type="text"
          value={this.state.Qualification}
          onChange={this.handleChange.bind(this)}
          name="Qualification"
          className="form-control"
        />
          Level :
          <input
          type="text"
          value={this.state.level}
          onChange={this.handleChange.bind(this)}
          name="level"
          className="form-control"
        />
          Degree :
          <input
          type="text"
          value={this.state.degree}
          onChange={this.handleChange.bind(this)}
          name="degree"
          className="form-control"
        />
          Gender :
          <input
          type="text"
          value={this.state.Gender}
          onChange={this.handleChange.bind(this)}
          name="Gender"
          className="form-control"
        />
          Age of child you can care :
          <input
          type="text"
          value={this.state.Care}
          onChange={this.handleChange.bind(this)}
          name="Care"
          className="form-control"
        />
          Information :
          <input
          type="text"
          value={this.state.info}
          onChange={this.handleChange.bind(this)}
          name="info"
          className="form-control"
        />
       <button onClick={this.handleSubmit.bind(this)} className="btn-btn-warning"> Submit
       </button>
        </form>

      </div>
    );
  }
}
