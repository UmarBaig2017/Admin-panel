import React, { Component } from "react";
import firebase from "firebase";
import "./dashboard.css";
export default class Orders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      searchVal: ""
    };
  }
  componentDidMount() {
    let arr = [];
    let firebaseRef = firebase.database().ref("bucket");
    firebaseRef.on("value", snap => {
      snap.forEach(Key => {
        let dataRef = firebaseRef.child(Key.ref.key).key;
        let data = snap.child(dataRef).val();
        console.log(data);
        arr.push(data);
        this.setState({
          orders: arr
        });
      });
    });
  }
  handleSearch(e) {
    this.setState({
      searchVal: e.target.value
    });
  }
  render() {
    let filteredOrders = this.state.orders.filter(order => {
      return order.practitioner_email.toLowerCase().indexOf(this.state.searchVal) !== -1;
    });
    return (
      <div>
        <form>
          <input
            type="text"
            placeholder="type name to search"
            onChange={this.handleSearch.bind(this)}
            value={this.state.searchVal}
            name="searchVal"
          />
        </form>

        {filteredOrders.map((order, i) => {
          return (
            <div key={i}>
              <h3>********</h3>
              <h3> practitioner Email : {order.practitioner_email}</h3>
              <h3> checkout flag : {order.checkout_flag}</h3>
              <h3> checkout time : {order.checkout_time}</h3>
              <h3> link_expiration : {order.link_expiration}</h3>
              <h3>Price : {order.price}</h3>
            </div>
          );
        })}
      </div>
    );
  }
}
