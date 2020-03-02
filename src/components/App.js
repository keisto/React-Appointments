import React, { Component } from "react";
import "../assets/css/App.css";

import AddAppointments from "./AddAppointments";
import SearchAppointments from "./SearchAppointments";
import ListAppointments from "./ListAppointments";

import { findIndex, without } from "lodash";

class App extends Component {
  constructor() {
    super();
    this.state = {
      myAppointments: [],
      formDisplay: true,
      orderBy: "date",
      orderDir: "asc",
      queryText: "",
      lastIndex: 0
    };

    this.updateInfo = this.updateInfo.bind(this);
    this.searchApts = this.searchApts.bind(this);
    this.changeOrder = this.changeOrder.bind(this);
    this.addAppointment = this.addAppointment.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.deleteAppointment = this.deleteAppointment.bind(this);
  }

  searchApts(query) {
    this.setState({
      queryText: query
    });
  }

  changeOrder(order, dir) {
    this.setState({
      orderBy: order,
      orderDir: dir
    });
  }

  updateInfo(name, value, id) {
    let tempApts = this.state.myAppointments
    let aptIndex = findIndex(this.state.myAppointments, {
      aptId: id
    })

    tempApts[aptIndex][name] = value
    this.setState({
      myAppointments: tempApts
    })
  }

  addAppointment(apt) {
    let tempApts = this.state.myAppointments;
    apt.aptId = this.state.lastIndex;
    tempApts.unshift(apt);

    this.setState({
      myAppointments: tempApts,
      lastIndex: this.state.lastIndex + 1
    });
  }

  toggleForm() {
    this.setState({
      formDisplay: !this.state.formDisplay
    });
  }

  deleteAppointment(apt) {
    let tempApts = this.state.myAppointments;
    tempApts = without(tempApts, apt);

    this.setState({
      myAppointments: tempApts
    });
  }

  componentDidMount() {
    fetch("./data.json")
      .then(response => response.json())
      .then(result => {
        const apts = result.map(item => {
          item.aptId = this.state.lastIndex;
          this.setState({ lastIndex: this.state.lastIndex + 1 });
          return item;
        });

        this.setState({
          myAppointments: apts
        });
      });
  }

  render() {
    let order;
    let filteredApts = this.state.myAppointments;

    if (this.state.orderDir === "asc") {
      order = 1;
    } else {
      order = -1;
    }

    filteredApts = filteredApts
      .sort((a, b) => {
        if (
          a[this.state.orderBy].toLowerCase() <
          b[this.state.orderBy].toLowerCase()
        ) {
          return -1 * order;
        } else {
          return 1 * order;
        }
      })
      .filter(item => {
        return (
          item["first_name"]
            .toLowerCase()
            .includes(this.state.queryText.toLowerCase()) ||
          item["last_name"]
            .toLowerCase()
            .includes(this.state.queryText.toLowerCase()) ||
          item["note"]
            .toLowerCase()
            .includes(this.state.queryText.toLowerCase())
        );
      });

    return (
      <main className="page" id="petratings">
        <div className="container">
          <div className="row ">
            <div className="col-12">
              <div className="container bg-white shadow-sm rounded-lg py-3 px-0">
                <AddAppointments
                  AddAppointment={this.addAppointment}
                  formDisplay={this.state.formDisplay}
                  toggleForm={this.toggleForm}
                />
                <SearchAppointments
                  orderBy={this.state.orderBy}
                  orderDir={this.state.orderDir}
                  changeOrder={this.changeOrder}
                  searchApts={this.searchApts}
                />
                <ListAppointments
                  appointments={filteredApts}
                  deleteAppointment={this.deleteAppointment}
                  updateInfo={this.updateInfo}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default App;
