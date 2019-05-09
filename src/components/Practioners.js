import React, { Component } from "react";
import firebase from "firebase";
import "./Pract.css";

import Modal from "react-responsive-modal";

export default class Practioners extends Component {

  constructor(props) {
    super(props);
    this.state = {
      Pract: [],
      currentPage: 1,
      ItemPerPage: 1,
      Bucket: [],
      Orders: [],
      searchVal: "",
      modelData: "",
      modal: false,
      isNotSerching: true,
      filtertd: []
    };
    this.toggle = this.toggle.bind(this)
    this.handleClick = this.handleClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this)
    this.fetchData = this.fetchData.bind(this)
    this.handleModel = this.handleModel.bind(this)
    this.messageIdGenerator = this.messageIdGenerator.bind(this)

  }
  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }
  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  handleSearch(e) {
    this.setState({ searchVal: e.target.value })
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
      Pract: [],
      currentPage: 1,
      ItemPerPage: 5,
      Bucket: [],
      Orders: [],
      searchVal: "",
      RenderItems: [],
      isSerching: true
    })
    let arr = [];
    let firebaseRef = firebase.database().ref("practitioner");
    firebaseRef.once("value", snap => {
      snap.forEach(Key => {
        let dataRef = firebaseRef.child(Key.ref.key).key;

        let data = snap.child(dataRef).val();

        data.firebasekEY = dataRef
        data.id = this.messageIdGenerator()

        arr.push(data)
        this.setState({
          Pract: arr
        });
      
      });
    });

  }
  handleDelete(key) {
    let firebaseRef = firebase.database().ref("practitioner").child(key)
    firebaseRef.remove().then(() => {
      this.fetchData()
    })

  }
  onOpenModal = (key) => {

    this.handleModel(key)
  };
  handleModel(key) {
    let result = this.state.Pract.filter(obj => {
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


  render() {
    const { open } = this.state
    let filteredOrders = this.state.Pract.filter(order => {
      return (
        order.first_name.indexOf(this.state.searchVal) !==
        -1
      );
    }, 
    )
  

    return (
      <div className="col-sm-10">
        <div className="aside">
          <center>
            <h3 style={{ "color": "black" }}>Practioners</h3>
          </center>
          {/* electronic functionality*/}
          <div className="d-flex align-items-start E-fucn-con">
            <div className="p-2 E-fucn-con1">
              <span className="e-func-inherit"></span>
              <span className="e-func-inherit"></span>
              <span className="e-func-inherit"></span>
            </div>
            {/*drop down */}
           
            {/*dropdown end */}
          </div>

          {/*search bar */}

          <form>
            <div className="col-auto">
             
            </div>
            {/*end of col */}
           
              <div className="col">
              <input onChange={this.handleSearch.bind(this)}
                value={this.state.searchVal}
                name="searchVal"
                className="form-control form-control-lg form-control-borderless"
                type="search"
                placeholder="Search by name"
              />
            </div>
            {/*end of col */}

            {/*end of col */}
          </form>
      <div></div>
          {/*end of col */}

          {/*search bar */}
          {/*table start */}
          <div className="col-s-12">
            <div   className="table-responsive">
              <table  style={{ "color": "black", "textAlign": "center", "backgroundColor": "white", "border": "1", "overflow": 'scroll',}} className="w3-table">
              <thead>
              <tr >
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Contact</th>
                  <th>Actions</th>
                </tr>
                </thead> 
                <tbody>
                {filteredOrders.map((item, index) => {
                  return (
                    <tr key={item.firebaseRef}>
                      <td>{item.first_name}</td>
                      <td>{item.last_name}</td>
                      <td>{item.contact_number}</td>
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

            <div style={{ "padding": "20" }} className="Model">
              {this.state.modelData &&
                <div>
                  <h2>Name : {this.state.modelData[0].first_name}</h2>
                  <h2> Post Code # 2 : {this.state.modelData[0].post_code_2}</h2>
                  <h2> Post Code # 3 : {this.state.modelData[0].post_code_3}</h2>
                  <h2> DBS expiry Date : {this.state.modelData[0].DBS_expiry_date}</h2>
                  <h2> DBS Issue Date : {this.state.modelData[0].DBS_issue_date}</h2>
                </div>
              }


            </div>




          </Modal>
        </div>
      </div>
    );
  }
}
