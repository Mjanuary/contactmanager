import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";

import "./Contact.css";
import { Consumer } from "../../context";
// import { valueToNode } from "@babel/types";

class Contact extends Component {
  state = {
    showContactInfo: false
  };

  onShowClick = () => {
    this.setState({ showContactInfo: !this.state.showContactInfo });
  };

  // delete function
  onDeleteClick = async (id, dispatch) => {
    // delete request
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      dispatch({
        type: "DELETE_CONTACT",
        payload: id
      });
    } catch (e) {
      dispatch({
        type: "DELETE_CONTACT",
        payload: id
      });
    }
  };

  render() {
    const { id, name, email, phone } = this.props.contact; // distructuring
    let contactInformation = "";

    if (this.state.showContactInfo) {
      contactInformation = (
        <ul className="list-group">
          <li className="list-group-item">Email: {email}</li>
          <li className="list-group-item">Phone: {phone}</li>
        </ul>
      );
    } else {
      contactInformation = "";
    }

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                <b onClick={this.onShowClick}>
                  {name}
                  <i className="fa fa-sort-down"></i>
                </b>

                <button
                  style={{ float: "right" }}
                  className="btn btn-danger btn-sm"
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                >
                  <i className="fa fa-times"></i>
                </button>
                <Link to={`contact/edit/${id}`}>
                  <i
                    className="fa fa-pencil"
                    style={{
                      cursor: "pointer",
                      float: "right",
                      color: "black",
                      marginRight: "1rem"
                    }}
                  ></i>
                </Link>
              </h4>

              {contactInformation}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;
