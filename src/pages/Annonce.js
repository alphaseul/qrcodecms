import React, {useState} from 'react';
import {Card, Modal, Button, ListGroup, Form, FormControl, InputGroup, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import image from '../image.png'
import {AiOutlineSearch} from 'react-icons/ai';



function Annonce(){

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <div>
            <div >
                <div className="mt-2 d-flex float-right">
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
                <div className="container d-flex align-items-start">
                    <div className="row ml-5">
                    
                        <div className="mr-3 mb-2"> 
                            <Card style={{ width: '13rem'}}>
                            <Card.Img variant="top" src={image}/>
                            <Card.Body>
                                <div className="d-flex row justify-content-between">
                                    <Card.Title>Annonce</Card.Title>
                                    <div>
                                        <p>Catégorie</p>
                                    </div> 
                                </div>
                                <Card.Text style={{overflow:'hidden', height:'70px'}}>
                                    <Link style={{textDecoration:'none', color:'black'}} onClick={handleShow}>
                                    Quisque velit nisi, pretium ut lacinia in, elementum
                                    id enim. Donec rutrum congue leo eget malesuada. Cras 
                                    Quisque velit nisi, pretium ut lacinia in, elementum
                                    id enim. Donec rutrum congue leo eget malesuada. Cras 
                                    Quisque velit nisi, pretium ut lacinia in, elementum
                                    id enim. Donec rutrum congue leo eget malesuada. Cras 
                                    Quisque velit nisi, pretium ut lacinia in, elementum
                                    id enim. Donec rutrum congue leo eget malesuada. Cras
                                    Quisque velit nisi, pretium ut lacinia in, elementum
                                    id enim. Donec rutrum congue leo eget malesuada. Cras 
                                    Quisque velit nisi, pretium ut lacinia in, elementum
                                    id enim. Donec rutrum congue leo eget malesuada. Cras 
                                    Quisque velit nisi, pretium ut lacinia in, elementum
                                    id enim. Donec rutrum congue leo eget malesuada. Cras 
                                    Quisque velit nisi, pretium ut lacinia in, elementum
                                    id enim. Donec rutrum congue leo eget malesuada. Cras 
                                    </Link>
                                    <Modal show={show} onHide={handleClose}>
                                        <Modal.Header closeButton>
                                        <Modal.Title>Description</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                        Quisque velit nisi, pretium ut lacinia in, elementum
                                        id enim. Donec rutrum congue leo eget malesuada. Cras 
                                        Quisque velit nisi, pretium ut lacinia in, elementum
                                        id enim. Donec rutrum congue leo eget malesuada. Cras 
                                        Quisque velit nisi, pretium ut lacinia in, elementum
                                        id enim. Donec rutrum congue leo eget malesuada. Cras 
                                        Quisque velit nisi, pretium ut lacinia in, elementum
                                        id enim. Donec rutrum congue leo eget malesuada. Cras
                                        Quisque velit nisi, pretium ut lacinia in, elementum
                                        id enim. Donec rutrum congue leo eget malesuada. Cras 
                                        Quisque velit nisi, pretium ut lacinia in, elementum
                                        id enim. Donec rutrum congue leo eget malesuada. Cras 
                                        Quisque velit nisi, pretium ut lacinia in, elementum
                                        id enim. Donec rutrum congue leo eget malesuada. Cras 
                                        Quisque velit nisi, pretium ut lacinia in, elementum
                                        id enim. Donec rutrum congue leo eget malesuada. Cras 
                                        Quisque velit nisi, pretium ut lacinia in, elementum
                                        id enim. Donec rutrum congue leo eget malesuada. Cras 
                                        Quisque velit nisi, pretium ut lacinia in, elementum
                                        id enim. Donec rutrum congue leo eget malesuada. Cras 
                                        Quisque velit nisi, pretium ut lacinia in, elementum
                                        id enim. Donec rutrum congue leo eget malesuada. Cras 
                                        Quisque velit nisi, pretium ut lacinia in, elementum
                                        id enim. Donec rutrum congue leo eget malesuada. Cras
                                        Quisque velit nisi, pretium ut lacinia in, elementum
                                        id enim. Donec rutrum congue leo eget malesuada. Cras 
                                        Quisque velit nisi, pretium ut lacinia in, elementum
                                        id enim. Donec rutrum congue leo eget malesuada. Cras 
                                        Quisque velit nisi, pretium ut lacinia in, elementum
                                        id enim. Donec rutrum congue leo eget malesuada. Cras 
                                        Quisque velit nisi, pretium ut lacinia in, elementum
                                        id enim. Donec rutrum congue leo eget malesuada. Cras 
                                        </Modal.Body>
                                    </Modal>
                                </Card.Text>
                                <div className="d-flex row justify-content-between">
                                    <Button className=" " variant="primary">Modifier</Button>
                                    <div className="mt-3">
                                        <b>prix</b>
                                    </div> 
                                </div>
                            </Card.Body>
                            </Card>
                        </div>
                       

                    </div>
                    <aside className="ml-5 mt-5d fixed" style={{marginTop:'5%'}}>
                        <div>
                            <Card style={{ width: '18rem' }}>
                            <Card.Header className="bg-dark text-white">Catégorie</Card.Header>
                            <ListGroup variant="flush">
                                <ListGroup.Item>
                                    <Link style={{textDecoration:'none', color:'black'}}>
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

export default Annonce;