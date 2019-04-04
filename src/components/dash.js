import React, { Component } from "react";
import "./dashboard.css";
import firebase from "firebase";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class Dash extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.toggletwo = this.toggletwo.bind(this);
    this.state = {
      collapse: false,
      practOpen: true,
      currntPage: "Practitioner",
      Practitioner: [],
      SearchVal: "",
      dropdownOpen: false
    };
  }

// var FilteredList = React.createClass({
//   filterList: function(event){
//     var updatedList = this.state.initialItems;
//     updatedList = updatedList.filter(function(item){
//       return item.toLowerCase().search(
//         event.target.value.toLowerCase()) !== -1;
//     });
//     this.setState({items: updatedList});
//   },
//   getInitialState: function(){
//      return {
//        initialItems: [
//          "Apples",
//          "Broccoli",
//          "Chicken",
//          "Duck",
//          "Eggs",
//          "Fish",
//          "Granola",
//          "Hash Browns"
//        ],
//        items: []
//      }
//   },
//   componentWillMount: function(){
//     this.setState({items: this.state.initialItems})
//   },
//   render: function(){
//     return (
//       <div className="filter-list">
//         <form>
//         <fieldset className="form-group">
//         <input type="text" className="form-control form-control-lg" placeholder="Search" onChange={this.filterList}/>
//         </fieldset>
//         </form>
//       <List items={this.state.items}/>
//       </div>
//     );
//   }
// });

// var List = React.createClass({
//   render: function(){
//     return (
//       <ul className="list-group">
//       {
//         this.props.items.map(function(item) {
//           return <li className="list-group-item" data-category={item} key={item}>{item}</li>
//         })
//        }
//       </ul>
//     )  
//   }
// });

// React.render(<FilteredList/>, document.getElementById('app'));





// ********************************************************************


  componentDidMount() {
    let arr = [];
    let firebaseRef = firebase.database().ref("Practitioners");
    firebaseRef.on("value", snap => {
      snap.forEach(Key => {
        let dataRef = firebaseRef.child(Key.ref.key).key;
        let data = snap.child(dataRef).val();
        console.log(data);
        arr.push(data);
        console.log(arr);
        this.setState({
          Practitioner: arr
        });
      });
    });
  }

  handleSearchVal(e) {
    this.setState({
      SearchVal: e.target.value
    });
  }
  handlePract() {
    this.setState({
      currntPage: "Practitioner"
    });
  }
  handleParents() {
    this.setState({
      currntPage: "Parents"
    });
  }
  handleOrders() {
    this.setState({
      currntPage: "Orders"
    });
  }
  handleSearch(e) {
    e.preventDefault();
    let SearchState = this.state.Practitioner;
    let tobeSearched = this.state.SearchVal;
    let newSearchState = SearchState.filter(item => {
      return item.fname === tobeSearched;
    });
    console.log(newSearchState);
    this.setState({
      Practitioner: newSearchState,
    })
  
  }
  toggle() {
    this.setState(state => ({ collapse: !state.collapse }));
  }
  toggletwo() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
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
        <form className="form-inline mr-auto">
          <input
            className="form-control mr-sm-12"
            value={this.state.SearchVal}
            onChange={this.handleSearchVal.bind(this)}
            type="text"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            onClick={this.handleSearch.bind(this)}
            className="btn btn-outline-success"
            type="submit"
          >
            Search By Name
          </button>
        </form>
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggletwo}>
        <DropdownToggle caret>
          Dropdown
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem>Some Action</DropdownItem>
          <DropdownItem disabled>Action (disabled)</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Foo Action</DropdownItem>
          <DropdownItem>Bar Action</DropdownItem>
          <DropdownItem>Quo Action</DropdownItem>
        </DropdownMenu>
      </Dropdown>
        {/* Pract div */}
        <h1 className="h1"> {this.state.currntPage} </h1>
        {this.state.Practitioner.map((item, index) => {
          return (
            <div
              style={{ backgroundColor: "#7FDBFF" }}
              id="row"
              className="row"
            >
              <div className="col-md-4">
                <img
                  style={{ width: 100, height: 100 }}
                  className="img-thumbnail"
                  src={item.downloadURL}
                  alt="Thumbnail image"
                />
              </div>
              <div className="col-md-4"> Name : {item.fname}</div>
              <div className="col-md-4"> buttons</div>
            </div>
          );
        })}
      </div>
    );
  }
}
