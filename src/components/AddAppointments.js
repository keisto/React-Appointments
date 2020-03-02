import React, { Component } from "react";
import { FaPlus } from "react-icons/fa";

class AddAppointments extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      note: "",
      aptDate: "",
      aptTime: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleAdd(e) {
    e.preventDefault();
    let tempApt = {
      first_name: this.state.firstName,
      last_name: this.state.lastName,
      email: this.state.email,
      note: this.state.note,
      date: this.state.aptDate + " " + this.state.aptTime
    };

    this.props.AddAppointment(tempApt);

    // Clear Form
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      note: "",
      aptDate: "",
      aptTime: ""
    });

    // Hide Form
    this.props.toggleForm();
  }

  render() {
    return (
      <div
        className={
          "card textcenter mx-3 " +
          (this.props.formDisplay ? "" : "add-appointment")
        }
      >
        <div
          className="apt-addheading card-header"
          onClick={this.props.toggleForm}
        >
          <FaPlus />
          <span className="ml-3">Add Appointment</span>
        </div>

        <div className="card-body">
          <form id="aptForm" noValidate onSubmit={this.handleAdd}>
            <div className="form-group form-row">
              <label
                className="col-md-2 col-form-label text-md-right"
                htmlFor="firstName"
                readOnly
              >
                First Name
              </label>
              <div className="col-md-4">
                <input
                  type="text"
                  className="form-control"
                  name="firstName"
                  id="firstName"
                  placeholder="First Name"
                  value={this.state.firstName}
                  onChange={this.handleChange}
                />
              </div>

              <label
                className="col-md-2 col-form-label text-md-right"
                htmlFor="lastName"
              >
                Last Name
              </label>
              <div className="col-md-4">
                <input
                  type="text"
                  className="form-control"
                  name="lastName"
                  id="lastName"
                  placeholder="Last Name"
                  value={this.state.lastName}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="form-group form-row">
              <label
                className="col-md-2 col-form-label text-md-right"
                htmlFor="email"
              >
                Email
              </label>
              <div className="col-md-10">
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="form-group form-row">
              <label
                className="col-md-2 col-form-label text-md-right"
                htmlFor="aptDate"
              >
                Date
              </label>
              <div className="col-md-4">
                <input
                  type="date"
                  className="form-control"
                  name="aptDate"
                  id="aptDate"
                  value={this.state.aptDate}
                  onChange={this.handleChange}
                />
              </div>
              <label
                className="col-md-2 col-form-label text-md-right"
                htmlFor="aptTime"
              >
                Time
              </label>
              <div className="col-md-4">
                <input
                  type="time"
                  className="form-control"
                  name="aptTime"
                  id="aptTime"
                  value={this.state.aptTime}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="form-group form-row">
              <label className="col-md-2 text-md-right" htmlFor="note">
                Notes
              </label>
              <div className="col-md-10">
                <textarea
                  className="form-control"
                  rows="4"
                  cols="50"
                  name="note"
                  id="note"
                  placeholder="Appointment Notes"
                  value={this.state.note}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="form-group form-row mb-0">
              <div className="offset-md-2 col-md-10">
                <button
                  type="submit"
                  className="btn btn-primary d-block ml-auto"
                >
                  Add Appointment
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AddAppointments;
