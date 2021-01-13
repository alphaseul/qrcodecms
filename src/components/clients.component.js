import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Table,
  Button,
  InputGroup,
  Form,
  Col,
  FormControl,
  Container,
} from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import UserService from "../services/user.service";

export default class Clients extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: [],
    };
  }

  componentDidMount() {
    UserService.getClients().then(
      (response) => {
        this.setState({
          content: response.data,
        });
      },
      (error) => {
        this.setState({
          content:
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString(),
        });
      }
    );
  }

  render() {
    const clients = this.state.content;
    const listClient = clients.map((objectMAp, index) => (
      <tr key={objectMAp.id}>
        <td>{objectMAp.id}</td>
        <td>{objectMAp.prenom}</td>
        <td>{objectMAp.nom}</td>
        <td>{objectMAp.email}</td>
      </tr>
    ));
    return (
      <div>
        <div className="d-flex float-right">
          <Form.Group as={Col}>
            <InputGroup>
              <FormControl
                placeholder="Recherche"
                aria-describedby="basic-addon2"
              />
              <InputGroup.Append>
                <Button variant="outline-secondary">
                  <AiOutlineSearch />
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </Form.Group>
        </div>
        <div className="d-flex">
          <Container>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Prénom</th>
                  <th>Nom</th>
                  <th>Email</th>
                  <th>Active</th>
                </tr>
              </thead>
              <tbody>{listClient}</tbody>
            </Table>
          </Container>
        </div>
        <div style={{ float: "right" }}>
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className="page-item">
                <Link className="page-link" to="/#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                  <span className="sr-only">Previous</span>
                </Link>
              </li>
              <li className="page-item">
                <Link to="/#" className="page-link">
                  1
                </Link>
              </li>
              <li className="page-item">
                <Link to="/#" className="page-link">
                  2
                </Link>
              </li>
              <li className="page-item">
                <Link to="/#" className="page-link">
                  3
                </Link>
              </li>
              <li className="page-item">
                <Link to="/#" className="page-link" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                  <span className="sr-only">Next</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}
