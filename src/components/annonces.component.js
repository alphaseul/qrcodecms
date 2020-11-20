import React, { Component } from "react";
import {
  Card,
  Button,
  ListGroup,
  Form,
  FormControl,
  InputGroup,
  Col,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import image from "../image.png";
import { AiOutlineSearch } from "react-icons/ai";
import UserService from "../services/user.service";

class Annonce extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: [],
    };
  }

  componentDidMount() {
    UserService.getAnnonce().then(
      (response) => {
        this.setState({
          content: response.data,
        });
      },
      (response) => {
        console.log(response.data);
        this.setState({
          content: response.data,
        });
      }
    );
  }

  render() {
    const annonces = this.state.content;
    const listItems = annonces.map((objectMAp, index) => (
      <div key={objectMAp.id} className="mr-3 mb-2">
        <Card style={{ width: "13rem" }}>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <div className="d-flex row justify-content-between">
              <Card.Title>{objectMAp.nom}</Card.Title>
            </div>
            <Card.Text>{objectMAp.description}</Card.Text>
            <div className="d-flex row justify-content-between">
              <Button className=" " variant="primary">
                Modifier
              </Button>
              <div className="mt-3">
                <b>
                  <b>€</b>
                  {objectMAp.prix}
                </b>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    ));
    return (
      <div>
        <div>
          <div className="mt-2 d-flex float-right">
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
          <div className="container d-flex align-items-start">
            <div className="row ml-5">{listItems} </div> {/* list of items  */}
            <aside className="ml-5 mt-5d fixed" style={{ marginTop: "5%" }}>
              <div>
                <Card style={{ width: "18rem" }}>
                  <Card.Header className="bg-dark text-white">
                    Catégorie
                  </Card.Header>
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      <Link style={{ textDecoration: "none", color: "black" }}>
                        Catégorie
                        <img
                          src={image}
                          width="20px"
                          height="20px"
                          className="d-inline-block align-top ml-3"
                          alt="qrcode logo"
                        />
                        <span class="ml-5 badge badge-light">4</span>
                      </Link>
                    </ListGroup.Item>
                  </ListGroup>
                </Card>
              </div>
            </aside>
          </div>
        </div>

        <div style={{ float: "right" }}>
          <nav aria-label="Page navigation example">
            <ul class="pagination">
              <li class="page-item">
                <Link class="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                  <span class="sr-only">Previous</span>
                </Link>
              </li>
              <li class="page-item">
                <Link class="page-link">1</Link>
              </li>
              <li class="page-item">
                <Link class="page-link">2</Link>
              </li>
              <li class="page-item">
                <Link class="page-link">3</Link>
              </li>
              <li class="page-item">
                <Link class="page-link" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                  <span class="sr-only">Next</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default Annonce;
