import React, { Component } from "react";

class SearchAppointments extends Component {
  render() {
    return (
      <div className="search-appointments row justify-content-center my-4 mx-1">
        <div className="col-md-12">
          <div className="input-group">
            <input
              id="SearchApts"
              type="text"
              placeholder="Search"
              className="form-control"
              aria-label="Search Appointments"
              onChange={e => this.props.searchApts(e.target.value)}
            />
            <div className="input-group-append">
              <button
                type="button"
                className="btn btn-primary dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Sort by: <span className="caret" />
              </button>

              <div className="sort-menu dropdown-menu dropdown-menu-right">
                <button
                  className={
                    "sort-by dropdown-item " +
                    (this.props.orderBy === "first_name" ? "active" : "")
                  }
                  onClick={e =>
                    this.props.changeOrder("first_name", this.props.orderDir)
                  }
                  href="#"
                >
                  First Name
                </button>
                <button
                  className={
                    "sort-by dropdown-item " +
                    (this.props.orderBy === "last_name" ? "active" : "")
                  }
                  onClick={e =>
                    this.props.changeOrder("last_name", this.props.orderDir)
                  }
                  href="#"
                >
                  Last Name
                </button>
                <button
                  className={
                    "sort-by dropdown-item " +
                    (this.props.orderBy === "date" ? "active" : "")
                  }
                  onClick={e =>
                    this.props.changeOrder("date", this.props.orderDir)
                  }
                  href="#"
                >
                  Date
                </button>
                <div role="separator" className="dropdown-divider" />
                <button
                  className={
                    "sort-by dropdown-item " +
                    (this.props.orderDir === "asc" ? "active" : "")
                  }
                  onClick={e =>
                    this.props.changeOrder(this.props.orderBy, "asc")
                  }
                  href="#"
                >
                  Asc
                </button>
                <button
                  className={
                    "sort-by dropdown-item " +
                    (this.props.orderDir === "desc" ? "active" : "")
                  }
                  onClick={e =>
                    this.props.changeOrder(this.props.orderBy, "desc")
                  }
                  href="#"
                >
                  Desc
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchAppointments;
