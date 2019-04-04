import React, { Component } from "react";
import "./practitioner.css";
import firebase from "firebase";

export default class Parents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      email: "",
      postCode1: "",
      postCode2: "",
      postCode3: "",
      region: "",
      info: ""
    };
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    let email= this.state.email
    let em = email.replace('.com','')

    console.log(em)
    let db = firebase.database();
    db.ref("parents").child(em)
      .set(
        {
          first_name: this.state.fname,
          last_name: this.state.lname,
          region: this.state.region,
          post_code_1: this.state.postCode1,
          post_code_2: this.state.postCode2,
          post_code_3: this.state.postCode3
      })
      .then(e => {
        console.log("submit");
      });

    console.log(this.state);
  }
  render() {
    return (
      <div>
        <div>
          {" "}
          <h1> Parents </h1>
        </div>
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
          Region:
          <input
            type="text"
            value={this.state.region}
            onChange={this.handleChange.bind(this)}
            name="region"
            autoFocus={true}
            className="form-control"
          />
          Post code1 :
          <input
            type="text"
            pattern="[0-9]*"
            value={this.state.postCode1}
            onChange={this.handleChange.bind(this)}
            name="postCode1"
       
            className="form-control"
          />
          Post code2 :
          <input
            type="text"
            pattern="[0-9]*"
            value={this.state.postCode2}
            onChange={this.handleChange.bind(this)}
            name="postCode2"
       
            className="form-control"
          />
          Post code3 :
          <input
            type="text"
            pattern="[0-9]*"
            value={this.state.postCode3}
            onChange={this.handleChange.bind(this)}
            name="postCode3"
            
            className="form-control"
          />
          Information:
          <input
            type="text"
            value={this.state.info}
            onChange={this.handleChange.bind(this)}
            name="info"
            className="form-control"
          />
          <button
            onClick={this.handleSubmit.bind(this)}
            className="btn-btn-warning"
          >
            {" "}
            Submit
          </button>
        </form>
      </div>
    );
  }
}
