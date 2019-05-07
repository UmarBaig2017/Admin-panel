import React, { Component } from "react";
import Practioners from "./Practioners";
import Parents from "./Parents";
import Orders from "./Orders";
import firebase from "firebase";
import Modal from "react-responsive-modal";
import "./SignIn.css";
export default class MainComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Practioners: true,
      Parents: false,
      Orders: false,
      modal: false,
      SubEmail: "",
      subPasswrd: "",
      success:false
    };
  }

  handleParents() {
    this.setState({
      Practioners: false,
      Parents: true,
      Orders: false
    });
  }
  handlePract() {
    this.setState({
      Practioners: true,
      Parents: false,
      Orders: false
    });
  }

  handleOrders() {
    this.setState({
      Practioners: false,
      Parents: false,
      Orders: true
    });
  }
  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };
  // Model functionality

  handleChnage(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleAdminSubmit(e) {
    e.preventDefault()
    console.log(this.state.SubEmail , this.state.subPasswrd)
    const auth = firebase.auth();
    let promise = auth.createUserWithEmailAndPassword(this.state.SubEmail, this.state.subPasswrd);
    promise.then(()=> {
      this.setState({
        open: false
      })
       
    })
    promise.catch(e => {
        let err = e.message;
        alert("admin not created , Try again")
    })
  }

  // model fun
  render() {
    const { open } = this.state;
    return (
      <div>
     { this.state.success && <div class="alert alert-secondary" role="alert">
  This is a secondary alert—check it out!
</div>}
        <div className="container-fluid">
          <div className="col-sm-6">
            <i className="fas fa-users-cog fa-4x" />
            Admin Panel
          </div>
          <div className="col-sm-3" />
          <div className="col-sm-2">
            <button
              className="btn btn-success"
              data-toggle="modal"
              data-target="#popUpWindow"
              type="submit"
              onClick={this.onOpenModal}
            >
              Registered Sub Admin
            </button>
            <div className="clear" />
          </div>
        </div>
        <div>
          <div className="clear" />
        </div>
        <div className="row">
          <div className="col-sm-2 menu ">
            <h4>DASHBOARD</h4>
            <ul className="list-group">
              <li
                style={{ cursor: "pointer" }}
                onClick={this.handlePract.bind(this)}
                className="list-group-item dashboard"
              >
                Practioners
              </li>
              <li
                style={{ cursor: "pointer" }}
                onClick={this.handleParents.bind(this)}
                className="list-group-item dashboard"
              >
                Parents
              </li>
              <li
                style={{ cursor: "pointer" }}
                onClick={this.handleOrders.bind(this)}
                className="list-group-item dashboard"
              >
                Orders
              </li>
            </ul>
          </div>
          {/* Components start */}
          {this.state.Practioners && <Practioners />}
          {this.state.Parents && <Parents />}
          {this.state.Orders && <Orders />}
          {/* Components end */}
        </div>
        <div>
          <Modal open={open} onClose={this.onCloseModal} center>
            <div className="Model">
              <h1>Add Sub Admin</h1>
              <form>
                <label>Email</label>
                <input
                 
                  type="email"
                  name="SubEmail"

                  value={this.state.SubEmail}
                  className="form-control"
                  onChange={this.handleChnage.bind(this)}
                />
                <label>Password</label>
                <input
                  type="password"
                  onChange={this.handleChnage.bind(this)}
                  name="subPasswrd"
                  value={this.state.subPasswrd}
                  className="form-control"
                />
                <button
                  style={{ margin: "10", color: "white" }}
                  onClick={this.handleAdminSubmit.bind(this)}
                  className="btn btn-default"
                >
                  {" "}
                  Add Admin
                </button>
              </form>
            </div>
          </Modal>
        </div>
      </div>
    );
  }
}
