import React, { Component } from "react";
import { FaRegCalendarCheck } from "react-icons/fa";
import { FaRegCalendarTimes } from "react-icons/fa";
import Moment from "react-moment";

class ListAppointments extends Component {
  render() {
    return (
      <div>
        {this.props.appointments.map(item => (
          <div className="list-item" key={item.aptId}>
            <img
              src={"https://i.pravatar.cc/64?u=" + item.email}
              alt={item.first_name + " " + item.last_name + " Avatar"}
              loading="lazy"
              className="rounded-25 align-self-center"
              id="avatar"
            />
            <div className="d-flex flex-grow-1 justify-content-between ml-3">
              <div>
                <h2 className="appointment-name mb-0">
                  {item.first_name + " " + item.last_name}
                </h2>
                <p
                  className="mb-0"
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={e =>
                    this.props.updateInfo(
                      "note",
                      e.target.innerText,
                      item.aptId
                    )
                  }
                >
                  {item.note}
                </p>
                <a href={"mailto:" + item.email} className="text-green">
                  {item.email}
                </a>
              </div>
              <div className="d-flex flex-column justify-content-around ml-3">
                <div className="date">
                  <p className="ml-2 mb-0 font-smaller text-nowrap">
                    <Moment date={item.date} format="MMM-D @ h A" />
                  </p>
                  <FaRegCalendarCheck size="24" color="#525f7f35" />
                </div>
                <button
                  className="btn btn-link btn-sm text-danger delete"
                  onClick={() => this.props.deleteAppointment(item)}
                >
                  <FaRegCalendarTimes size="24" color="#e25a50" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default ListAppointments;
