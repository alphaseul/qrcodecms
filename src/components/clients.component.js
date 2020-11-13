import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Button, InputGroup, Form, Col, FormControl, Container } from 'react-bootstrap';
import {AiOutlineSearch} from 'react-icons/ai';
import { Link } from 'react-router-dom';




function Client(){
    return(
            <div>
                <div className="d-flex float-right">
                    <Form.Group as={Col}>
                        <InputGroup>
                        <FormControl
                            placeholder="Recherche"
                            aria-describedby="basic-addon2"
                            />
                            <InputGroup.Append>
                                <Button variant="outline-secondary"><AiOutlineSearch/></Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </Form.Group>
                </div>
                <div style={{marginTop:''}}>
                    <Container style={{marginTop: '5%'}}>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                <th>#</th>
                                <th>Prénom</th>
                                <th>Nom</th>
                                <th>Nom d'Utilisateur</th>
                                <th>Active</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>1</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                </tr>
                                <tr>
                                <td>2</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                </tr>
                                <tr>
                                <td>3</td>
                                <td colSpan="2">Larry the Bird</td>
                                <td>@twitter</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Container>
                </div>
                <div style={{float: 'right'}}>
                    <nav aria-label="Page navigation example">
                        <ul class="pagination">
                            <li class="page-item">
                            <Link class="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                                <span class="sr-only">Previous</span>
                            </Link>
                            </li>
                            <li class="page-item"><Link class="page-link">1</Link></li>
                            <li class="page-item"><Link class="page-link">2</Link></li>
                            <li class="page-item"><Link class="page-link">3</Link></li>
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
    )
}

export default Client;