import React, { Component } from "react";
import "./practitioner.css";
import firebase from "firebase";

export default class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      practitioner_email: "",
      checkout_flag: "",
      checkout_time: "",
      link_expiration: "",
      price: ""
    };
  }
  componentDidMount() {
    var d = new Date();
    var n = d.getTime();
    this.setState({
      checkout_time: n
    });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    let email = this.state.practitioner_email;
    let em = email.replace(".com", "");

    this.setState({});
    console.log(em);
    let db = firebase.database();
    db.ref("bucket")
      .child(em)
      .set({
        practitioner_email: this.state.practitioner_email,
        checkout_flag: this.state.checkout_flag,
        checkout_time: this.state.checkout_time,
        link_expiration: this.state.link_expiration,
        price: this.state.price
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
          <h1> Orders </h1>
        </div>
        <form className="prac-form">
          practitioner email
          <input
            type="email"
            value={this.state.practitioner_email}
            onChange={this.handleChange.bind(this)}
            name="practitioner_email"
            autoFocus={true}
            className="form-control"
          />
          checkout_flag:
          <input
            type="text"
            value={this.state.checkout_flag}
            onChange={this.handleChange.bind(this)}
            name="checkout_flag"
            autoFocus={true}
            className="form-control"
          />
          link_expiration:
          <input
            type="text"
            value={this.state.region}
            onChange={this.handleChange.bind(this)}
            name="link_expiration"
            autoFocus={true}
            className="form-control"
          />
          price :
          <input
            type="text"
            pattern="[0-9]*"
            value={this.state.price}
            onChange={this.handleChange.bind(this)}
            name="price"
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
