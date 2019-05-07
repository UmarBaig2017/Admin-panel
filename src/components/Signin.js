import React, { Component } from 'react'
import "./SignIn.css";
import Loader from 'react-loader-spinner'
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
      handleLogin(e){
        e.preventDefault()
        firebase.auth().signInWithEmailAndPassword(this.state.Email,this.state.pw).then(()=>{
          this.setState({
            Loader: true
          })
          console.log("sucess")
          this.props.history.push("/Dashboard")
        }).catch(err=>{
            console.log(err)
       
        })

      }
  render() {
    return (
      <div>


      <div class="container">
  <div class="card card-login mx-auto text-center bg-dark">
      <div class="card-header mx-auto bg-dark">
          <span>  </span><br/>
                      <span class="logo_title mt-5"> Login Dashboard </span>
    

      </div>
      <div class="card-body">
          <form action="" method="post">
              <div class="input-group form-group">
                  <div class="input-group-prepend">
                      <span class="input-group-text"><i class="fas fa-user"></i></span>
                  </div>
                  <input type="text" 
                  value={this.state.Email}
                  onChange={this.handleChange}
                  name="Email"
                
                  autoFocus="true"
                   class="form-control" placeholder="Username"/>
              </div>

              <div class="input-group form-group">
                  <div class="input-group-prepend">
                      <span class="input-group-text"><i class="fas fa-key"></i></span>
                  </div>
                  <input type="password"  value={this.state.pw}
                  onChange={this.handleChange}
                 
                  type="password"
                  autoFocus="true"
                  name="pw"
                 class="form-control" placeholder="Password"/>
              </div>

              <div class="form-group">
                  <input type="submit"  onClick={this.handleLogin}  name="btn" value="Login" class="btn btn-outline-danger float-right login_btn"/>
              </div>

          </form>
      </div>
  </div>
</div>







    </div> 
    )
  }
}
