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
      todosPerPage: 5,
      Bucket: [],
      Orders: [],
      searchVal: "",
      modelData: ""


    };
    this.handleClick = this.handleClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this)
    this.fetchData = this.fetchData.bind(this)
    this.handleModel = this.handleModel.bind(this)
    this.messageIdGenerator = this.messageIdGenerator.bind(this)
    this.handlefilter = this.handlefilter.bind(this)
  }
  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }
  handleSearch(e) {
    this.setState({ searchVal: e.target.value }, function () {
      this.handlefilter()
    })
  }
  handlefilter() {
    let filteredOrders = this.state.Pract.filter(order => {
      return (
        order.first_name.toLowerCase().indexOf(this.state.searchVal) !==
        -1
      );
    } ,function(){
      this.setState({
        Pract : filteredOrders
      })
     console.log(this.state.Pract)
    })
  }
  messageIdGenerator() {
    // generates uuid.
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, c => {
      let r = (Math.random() * 16) | 0,
        v = c == "x" ? r : (r & 0x3) | 0x8;
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
      todosPerPage: 5,
      Bucket: [],
      Orders: [],
      searchVal: ""
    })
    let arr = [];
    let firebaseRef = firebase.database().ref("Practitioners");
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
        console.log(this.state.Pract)
      });
    });

  }
  handleDelete(key) {
    let firebaseRef = firebase.database().ref("Practitioners").child(key)
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
    console.log(result)
    this.setState({
      modelData: result,
      open: true
    })

  }
  onCloseModal = () => {
    this.setState({ open: false });

  };

  render() {
    const { open, Pract, currentPage, todosPerPage } = this.state;
    // Logic for displaying current todos
    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentTodos = Pract.slice(indexOfFirstTodo, indexOfLastTodo);


    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(Pract.length / todosPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <button className="buttonS"
          key={number}
          id={number}
          onClick={this.handleClick}
        >
          {number}
        </button>
      );
    });
 
    return (
      <div className="col-sm-10">
        <div className="aside">
          <center>
            <h3>Practioners</h3>{" "}
          </center>
          {/* electronic functionality*/}
          <div className="d-flex align-items-start E-fucn-con">
            <div className="p-2 E-fucn-con1">
              <span className="e-func-inherit" style={{ "color": "black" }} ><h2>  Practitioners {this.state.Pract.length}</h2> </span>
            </div>
            {/*drop down */}
            <div className="p-2 drop">
              <div className="btn-group" class="drop-btn">
                <button type="button" class="btn btn-danger">
                  Action
                </button>
                <button
                  type="button"
                  class="btn btn-danger dropdown-toggle dropdown-toggle-split"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false">
                  <span className="sr-only">Toggle Dropdown</span>
                </button>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="#">
                    Separated link
                  </a>
                </div>
              </div>
            </div>
            {/*dropdown end */}
          </div>

          {/*search bar */}

          <form>
            <div class="col-auto">
              <i class="fas fa-search h4 text-body" />
            </div>
            {/*end of col */}
            <div class="col">
              <input onChange={this.handleSearch.bind(this)}
                value={this.state.searchVal}
                name="searchVal"
                class="form-control form-control-lg form-control-borderless"
                type="search"
                placeholder="Search topics or keywords"
              />
            </div>
            {/*end of col */}

            {/*end of col */}
          </form>

          {/*end of col */}

          {/*search bar */}
          {/*table start */}
          <div class="col-s-12">
            <div class="table-responsive">
              <table style={{ "color": "black", "textAlign": "center", "backgroundColor": "white", "border": "1" }} class="w3-table">
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Contact</th>
                  <th>Actions</th>
                </tr>
                {currentTodos.map((item, index) => {
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
                <ul id="page-numbers">
                  {renderPageNumbers}
                </ul>
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
