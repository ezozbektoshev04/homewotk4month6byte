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
    localStorage.setItem("contact", JSON.stringify(this.state));
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
    let arr = [JSON.parse(localStorage.getItem("contact"))];
    return (
      <div>
        <Table striped bordered hover className="container mt-3">
          <thead>
            <tr>
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
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.phone}</td>
                <td>{item.gender}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => this.props.deleteContact(item)}
                  >
                    Delete
                  </button>
                  <Button
                    variant="primary"
                    onClick={this.handleShow}
                    className="ms-3"
                  >
                    Edit
                  </Button>

                  <Modal show={show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>Adding Contact</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Form>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label>First Name</Form.Label>
                          <Form.Control
                            type="text"
                            name="firstName"
                            //   id="firstName"
                            value={this.firstName}
                            onChange={this.handleChange}
                          />
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label>Last Name</Form.Label>
                          <Form.Control
                            type="text"
                            name="lastName"
                            //   id="lastName"
                            value={this.lastName}
                            onChange={this.handleChange}
                          />
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label>Phone Number</Form.Label>
                          <Form.Control
                            type="tel"
                            name="phone"
                            value={this.phone}
                            onChange={this.handleChange}
                          />
                        </Form.Group>
                        <Form.Select
                          aria-label="Default select example"
                          // value={this.gender}
                          name="gender"
                          onChange={this.handleChange}
                        >
                          <option>Select Gender</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                        </Form.Select>
                      </Form>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={this.handleClose}>
                        Close
                      </Button>
                      <Button
                        variant="primary"
                        type="submit"
                        onClick={this.handleSave}
                      >
                        Save
                      </Button>
                    </Modal.Footer>
                  </Modal>
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
