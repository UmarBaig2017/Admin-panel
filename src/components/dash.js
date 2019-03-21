import React, { Component } from "react";
import "./dashboard.css";
import firebase from "firebase";
import { Collapse, Button, CardBody, Card } from "reactstrap";
import Practitioner from "./PRACTITIONER";
export default class Dash extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      collapse: false,
      practOpen: true,
      currntPage: "Practitioner"
    };
  }


  componentDidMount(){
        let arr=[]
    let firebaseRef = firebase.database().ref('Practitioners')
    firebaseRef.on('value',snap=>{
    snap.forEach((Key)=>{
      let dataRef = firebaseRef.child(Key.ref.key).key
      let data = snap.child(dataRef).val()
      console.log(data)
     
      
    })
  })

    
  }
  handlePract(){
   this.setState({
    currntPage: "Practitioner"
   })
  }
  handleParents(){
   this.setState({
    currntPage: "Parents"
   })
  }
  handleOrders(){
   this.setState({
    currntPage: "Orders"
   })
  }

  
  toggle() {
    this.setState(state => ({ collapse: !state.collapse }));
  }
  render() {
    return (
      <div>
        {/*    header */}
        <div style={{ backgroundColor: "white" }} className="row">
          <div class="col-md-4">
            <button
              type="button"
              className="btn btn-outline-success btn-lg btn-block"
              onClick={this.handlePract.bind(this)}
            >
              Practitioners
            </button>
          </div>
          <div className="col-md-4">
            <button
              type="button"
              className="btn btn-outline-success btn-lg btn-block"
              onClick={this.handleParents.bind(this)}
            >
              Parents
            </button>
          </div>
          <div className="col-md-4">
            <button
              type="button"
              className="btn btn-outline-success btn-lg btn-block"
              onClick={this.handleOrders.bind(this)}
            >
              Orders
            </button>
          </div>
        </div>
        {/* Pract div */}
       <h1 className="h1">   {this.state.currntPage} </h1>
        {this.state.practOpen && (
         <div style={{backgroundColor:"red"}}  id="row" className="row">
         <div className="col-md-4">
         <img
         style={{ width: 100, height: 100}}
         className="img-thumbnail"
         src="https://firebasestorage.googleapis.com/v0/b/admin-panel-debec.appspot.com/o/images?alt=media&token=68df0a95-722b-40c1-97eb-6c90858fd551"
         alt="Thumbnail image"
       />
         </div>
         <div className="col-md-4">Dtails
         </div>
         <div className="col-md-4"> buttons
         </div>
        
         </div>
        )}
        {this.state.practOpen && (
         <div id="row" className="row">
         <div className="col-6 col-md-4">
           Image
         </div>
         <div className="col-6 col-md-4">Dtails
         </div>
         <div className="col-6 col-md-4"> buttons
         </div>
        
         </div>
        )}
        {this.state.practOpen && (
         <div id="row" className="row">
         <div className="col-md-4">
           Image
         </div>
         <div className="col-md-4">Dtails
         </div>
         <div className="col-md-4"> buttons
         </div>
        
         </div>
        )}
      </div>
    );
  }
}
