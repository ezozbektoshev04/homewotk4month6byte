import React, { Component } from "react";
import Form from "react-bootstrap/Form";
// import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import InputGroup from "react-bootstrap/InputGroup";
import Navbar from "react-bootstrap/Navbar";
import ContactBot from "../contact-bot/ContactBot";

export class Contaxt extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      firstName: "",
      lastName: "",
      phone: "",
      gender: "",
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
    localStorage.setItem("aa", JSON.stringify(this.state));
    const { show } = this.state;
    // let firstName = this.state.firstName;
    // let lastName = this.state.lastName;
    // let phone = this.state.phone;
    // let gender = this.state.gender;
    // const newUsers = {
    //   firstName,
    //   lastName,
    //   phone,
    //   gender,
    // };
    // console.log(this.state);
    return (
      <div>
        <Navbar className="bg-body-tertiary container">
          <Navbar.Brand href="#" className="w-100">
            {" "}
            <InputGroup className="mb-3 container h-25">
              <Form.Control
                type="text"
                className="w-50"
                placeholder="Search..."
                readOnly
                style={{ height: "50px" }}
              />
              <Button variant="primary" onClick={this.handleShow}>
                Add Contact
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
            </InputGroup>
          </Navbar.Brand>
        </Navbar>
        <ContactBot />
      </div>
    );
  }
}

export default Contaxt;
