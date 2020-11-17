import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import UserService from "../services/user.service";
import { Redirect } from "react-router-dom";

export default class AddAnnonce extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      price: 0,
      categorie: "",
      redirection: false,
    };

    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeDescription = this.handleChangeDescription.bind(this);
    this.handleChangePrice = this.handleChangePrice.bind(this);
    this.handleChangeCategorie = this.handleChangeCategorie.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeCategorie(event) {
    this.setState({ categorie: event.target.value });
  }
  handleChangePrice(event) {
    this.setState({ price: event.target.value });
  }
  handleChangeDescription(event) {
    this.setState({ description: event.target.value });
  }
  handleChangeTitle(event) {
    this.setState({ title: event.target.value });
  }

  handleSubmit(event) {
    UserService.postAnnonce(
      this.state.title,
      this.state.description,
      this.state.price
    ).then(() => this.setState({ redirection: true }));

    event.preventDefault();
  }

  render() {
    const { redirection } = this.state;
    if (redirection) {
      return <Redirect to="/annonces" />;
    }
    return (
      <div>
        <h1>Ajouter une Annonce</h1>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.File id="exampleFormControlFile1" label="Image" />
          </Form.Group>
          <Form.Group controlId="formBasicTitle">
            <Form.Control
              type="text"
              placeholder="Title"
              value={this.state.title}
              onChange={this.handleChangeTitle}
            />
          </Form.Group>

          <Form.Group controlId="formBasicDescription">
            <Form.Control
              as="textarea"
              value={this.state.description}
              onChange={this.handleChangeDescription}
              rows={3}
              placeholder="Description"
            />
          </Form.Group>

          <Form.Group controlId="formBasicPrice">
            <Form.Control
              type="number"
              placeholder="Prix"
              value={this.state.price}
              onChange={this.handleChangePrice}
            />
          </Form.Group>

          <Form.Group controlId="formBasicCategorie">
            <Form.Control
              type="text"
              placeholder="Categorie"
              value={this.state.categorie}
              onChange={this.handleChangeCategorie}
            />
          </Form.Group>

          <Button variant="primary" type="submit" value="Submit">
            Ajouter
          </Button>
        </Form>
      </div>
    );
  }
}
