import React, { Component } from "react";
import firebase from "firebase";
import "./Pract.css";
import Modal from "react-responsive-modal";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
export default class Orders extends Component {

  constructor(props) {
    super(props);
    this.state = {
      Orders: [],
      currentPage: 1,
      todosPerPage: 5,
      Bucket: [],
    
      searchVal: "",
      modelData: ""


    };
    this.handleClick = this.handleClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this)
    this.fetchData = this.fetchData.bind(this)
    this.handleModel = this.handleModel.bind(this)
    this.messageIdGenerator = this.messageIdGenerator.bind(this)
    this.toggle = this.toggle.bind(this)

  }
  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }
  handleSearch(e) {
    this.setState({ searchVal: e.target.value })
  }
  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  messageIdGenerator() {
    // generates uuid.
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, c => {
      let r = (Math.random() * 16) | 0,
        v = c === "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }
  componentDidMount() {
    this.fetchData()
  }
  fetchData() {
    this.setState({
      Orders: [],
      currentPage: 1,
      todosPerPage: 5,
      Bucket: [],
      searchVal: ""
    })
    let arr = [];
    let firebaseRef = firebase.database().ref("bucket");
    firebaseRef.once("value", snap => {
      snap.forEach(Key => {
        let dataRef = firebaseRef.child(Key.ref.key).key;

        let data = snap.child(dataRef).val();

        data.firebasekEY = dataRef
        data.id = this.messageIdGenerator()
        arr.push(data)
        this.setState({
          Orders: arr
        });
      
      });
    });

  }
  handleDelete(key) {
    let firebaseRef = firebase.database().ref("bucket").child(key)
    firebaseRef.remove().then(() => {
      this.fetchData()
    })

  }
  onOpenModal = (key) => {

    this.handleModel(key)
  };
  handleModel(key) {
    let result = this.state.Orders.filter(obj => {
      return (
        obj.id === key
      )
    })
 
    this.setState({
      modelData: result,
      open: true
    })

  }
  onCloseModal = () => {
    this.setState({ open: false });

  };
  handleAssending() {
    let list = this.state.Orders;
    let newlist = list.sort((a, b) => b.price - a.price);
    this.setState({
      Orders: newlist
    });
  }
  handleDeceding() {
    let list = this.state.Orders;
    let newlist = list.sort((a, b) => a.price - b.price);
    this.setState({
      Orders: newlist
    });
  }


  render() {
    const { open } = this.state;

    let filteredOrders = this.state.Orders.filter(order => {
      return (
        order.practitioneremail.indexOf(this.state.searchVal) !==
        -1
      );
    },
    )

    return (
      <div className="col-sm-10">
        <div className="aside">
          <center>
            <h3 style={{ "color": "black", }}> Orders </h3>{" "}
          </center>
          {/* electronic functionality*/}
          <div className="d-flex align-items-start E-fucn-con">
            <div className="p-2 E-fucn-con1">
              <span className="e-func-inherit"></span>
              <span className="e-func-inherit"></span>
              <span className="e-func-inherit"></span>
            </div>
            {/*drop down */}
            <div className="p-2 drop">
                <div  className="drop-btn">
                  <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    <DropdownToggle caret>Filerts</DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem onClick={this.handleAssending.bind(this)}>by heighest Price to heighest</DropdownItem>
                      <DropdownItem onClick={this.handleDeceding.bind(this)}>By lowest price to heighest</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>

                </div>

              
            </div>
            {/*dropdown end */}
          </div>

          {/*search bar */}

          <form>
            <div className="col-auto">
              <i className="fas fa-search h4 text-body" />
            </div>
            {/*end of col */}
            <div className="col">
              <input onChange={this.handleSearch.bind(this)}
                value={this.state.searchVal}
                name="searchVal"
                className="form-control form-control-lg form-control-borderless"
                type="search"
                placeholder="Search by Email of the Practioner"
              />
            </div>
            {/*end of col */}

            {/*end of col */}
          </form>

          {/*end of col */}

          {/*search bar */}
          {/*table start */}
          <div className="col-s-12">
            <div className="table-responsive">
              <table style={{ "color": "black", "textAlign": "center", "backgroundColor": "white", "border": "1" }} className="w3-table">
              <thead>  
              <tr>
                  <th>Checkout flag</th>
                  <th>Checkout time</th>
                  <th>Price  </th>
                  <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {filteredOrders.map((item, index) => {
                  return (
                    <tr key={item.firebaseRef}>
                      <td>{item.checkout}</td>
                      <td>{item.checkout_time}</td>
                      <td>{item.price}</td>
                      <td>
                        <button onClick={() => this.handleDelete(item.firebasekEY)} className="btn btn-primery"> Delete </button>
                        <button onClick={() => this.onOpenModal(item.id)} className="btn btn-primery"> View </button>
                      </td>
                    </tr>
                  )
                })}
                </tbody>
              </table>
            </div>
          </div>
          {/*main table end */}
        </div>
        <div>
          <Modal open={open} onClose={this.onCloseModal} center>

            <div className="Model">
              {this.state.modelData &&
                <div>
                  <h2 style={{ "fontFamily": "Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>Email : {this.state.modelData[0].buyer}</h2>
                  <h2 style={{ "fontFamily": "Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}> Price : {this.state.modelData[0].price}</h2>


                </div>
              }


            </div>




          </Modal>
        </div>
      </div>
    );
  }
}
