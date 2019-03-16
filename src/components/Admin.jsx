import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Admin.css";

export default class AdminSignIn extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this)
    this.state = {
      admin: "",
      pw: "",
      user:"umarbaig" ,
      pswd:"umar123"
    };
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(this.state.name,this.state.pw);
  }
handleLogin(e){
  e.preventDefault()
  console.log(this.state)
  if(this.state.admin===this.state.user && this.state.pw===this.state.pswd){
    this.props.history.push("/adminPanel")
  }
  else{
    alert("error")
    this.props.history.push("/admin")
  } 
}
  render() {
    return (
      <div>
        <div id="login">
          <h3 className="text-center text-white pt-5">Admin Login</h3>
          <div className="container">
            <div
              id="login-row"
              className="row justify-content-center align-items-center"
            >
              <div id="login-column" class="col-md-6">
                <div id="login-box" class="col-md-12">
                  <form id="login-form" class="form" action="" method="post">
                    <h3 className="text-center text-info">Login</h3>
                    <div className="form-group">
                      <label for="username" class="text-info">
                        Username:
                      </label>
                      <br />
                      <input
                        type="text"
                        value={this.state.admin}
                        onChange={this.handleChange}
                        name="admin"
                      
                        autoFocus="true"
                        
                      
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <label for="password" class="text-info">
                        Password:
                      </label>
                      <br />
                      <input
                       
                        value={this.state.pw}
                        onChange={this.handleChange}
                       
                        type="password"
                        autoFocus="true"
                        name="pw"
                      
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <label for="remember-me" class="text-info">
                        <span>Remember me</span> 
                        <span>
                          <input
                            id="remember-me"
                            name="remember-me"
                            
                            type="checkbox"
                          />
                        </span>
                      </label>
                      <br />
                      <input
                        type="submit"
                        name="submit"
                        onClick={this.handleLogin} 
                        className="btn btn-info btn-md"
                        value="Login"
                      />
                    </div>
                   
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
    }}