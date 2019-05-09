import React, { Component } from 'react'
import "./SignIn.css";
import firebase from "firebase";
export default class Signin extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this)
    this.state = {
      Email: "",
      pw: "",
      Form: true,
      Loader: false
    };
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });

  }
  handleLogin(e) {
    e.preventDefault()
    firebase.auth().signInWithEmailAndPassword(this.state.Email, this.state.pw).then(() => {
      this.setState({
        Loader: true
      })
      console.log("sucess")
      this.props.history.push("/Dashboard")
    }).catch(err => {
      console.log(err)

    })

  }
  render() {
    return (
      <div>


        <div className="container">
          <div className="card card-login mx-auto text-center bg-dark">
            <div className="card-header mx-auto bg-dark">
              <span>  </span><br />
              <span className="logo_title mt-5"> Login Dashboard </span>
            </div>
            <div className="card-body">
              <form action="" method="post">
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text"><i className="fas fa-user"></i></span>
                  </div>
                  <input type="text"
                    value={this.state.Email}
                    onChange={this.handleChange}
                    name="Email"

                    autoFocus="true"
                    className="form-control" placeholder="Username" />
                </div>

                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text"><i className="fas fa-key"></i></span>
                  </div>
                  <input type="password" value={this.state.pw}
                    onChange={this.handleChange}

                    autoFocus="true"
                    name="pw"
                    className="form-control" placeholder="Password" />
                </div>

                <div className="form-group">
                  <input type="submit" onClick={this.handleLogin} name="btn" value="Login" className="btn btn-outline-danger float-right login_btn" />
                </div>

              </form>
            </div>
          </div>
        </div>







      </div>
    )
  }
}
