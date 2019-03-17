import React, { Component } from "react";
import "./dashboard.css";
import firebase from "firebase";
import { Collapse, Button, CardBody, Card } from "reactstrap";
export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState(state => ({ collapse: !state.collapse }));
  }
  render() {
    return (
      <div>
        <div style={{ backgroundColor: "white" }} className="row">
          <div class="col-md-4">
            <button
              type="button"
              className="btn btn-outline-success btn-lg btn-block"
            >
              Practitioners
            </button>
          </div>
          <div className="col-md-4">
            <button
              type="button"
              className="btn btn-outline-success btn-lg btn-block"
            >
              Parents
            </button>
          </div>
          <div className="col-md-4">
            <button
              type="button"
              className="btn btn-outline-success btn-lg btn-block"
            >
              Orders
            </button>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div class="col-md-4">
              <img
                style={{ width: 100, height: 100, borderRadius: 30 }}
                class="img-thumbnail"
                src="https://firebasestorage.googleapis.com/v0/b/admin-panel-debec.appspot.com/o/images?alt=media&token=68df0a95-722b-40c1-97eb-6c90858fd551"
                alt="Thumbnail image"
              />
            </div>
            <div className="col-md-4">
              <div>
                Name : Umar <br />
                Contact: 91081717710
              </div>
            </div>
            <div className="col-md-4">
              <div>
                <button className="btn btn-danger">
                  <i
                    style={{ fontSize: 30 }}
                    className="fa fa-trash"
                    aria-hidden="true"
                  />
                </button>
                <button className="btn btn-primery" onClick={this.toggle}>
                  <i
                    style={{ fontSize: 30 }}
                    className="fa fa-eye"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </div>
          </div>
          <Collapse isOpen={this.state.collapse}>
            <Card>
              <CardBody>
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. Nihil anim keffiyeh
                helvetica, craft beer labore wes anderson cred nesciunt sapiente
                ea proident.
              </CardBody>
            </Card>
          </Collapse>
        </div>
      </div>
    );
  }
}
