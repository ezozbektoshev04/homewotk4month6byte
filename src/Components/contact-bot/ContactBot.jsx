import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
// import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export class ContactBot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }
  handleChange = (e) => {
    this.setState({
      show: false,
      ...this.state,
      [e.target.name]: e.target.value,
    });
  };
  handleSave = (e) => {
    this.setState({ show: false });
    e.preventDefault();
  };
  handleShow = () => {
    this.setState({ show: true });
  };
  handleClose = () => {
    this.setState({ show: false });
  };
  render() {
    const { show } = this.state;
    let arr = [this.props.children];
    // let newArr = [];
    return (
      <div>
        <Table striped bordered hover className="container mt-3">
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Phone Number</th>
              <th>Gender</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {arr.map((item, index) => (
              <tr key={index}>
                <td>{arr.length}</td>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.phone}</td>
                <td>{item.gender}</td>
                <td>
                  <button type="button" className="btn btn-primary">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default ContactBot;
