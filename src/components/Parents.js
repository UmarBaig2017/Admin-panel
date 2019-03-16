import React, { Component } from "react";
import "./practitioner.css";
import firebase from "firebase";
import uuid from "uuid";

export default class Parents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      email: "",

      postCode: "",
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

    let db = firebase.database();
    db.ref("Parents")
      .push(this.state)
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
          Post code :
          <input
            type="text"
            pattern="[0-9]*"
            value={this.state.postCode}
            onChange={this.handleChange.bind(this)}
            name="postCode"
            autoFocus={true}
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
