import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, InputGroup, Col, Image } from 'react-bootstrap';
import {AiOutlineMail} from 'react-icons/ai';
import {RiLockPasswordLine} from 'react-icons/ri';
import {BsBuilding} from 'react-icons/bs';
import "./Entreprise.css"
import logo from '../image.png';

function Entreprise(){
    return(
        <div className="px-md-5">
            <Form >
                <Form.Group as={Col}>
                    <div class="mb-4 mt-2">
                        <h2><b>Identité</b></h2>
                    </div>
                    <div className="d-flex justify-content-end">
                        <Col xs={6} md={4}>
                            <Image src={logo} rounded alt="Logo" />
                        </Col>
                    </div>
                </Form.Group>
                <Form.Group as={Col}>
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text>
                                <BsBuilding/>
                            </InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control size="lg" type="text" placeholder="Nom"/>
                    </InputGroup>
                </Form.Group>
                <Form.Group as={Col}>
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text>
                                <RiLockPasswordLine/>
                            </InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control size="lg" type="text" placeholder="Slogan"/>
                    </InputGroup>
                </Form.Group>
                <br />
                <Form.Group as={Col}>
                    <div class="mb-4">
                        <h2><b>Adresse</b></h2>
                    </div>
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text>
                                <AiOutlineMail/>
                            </InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control size="lg" type="text" placeholder="Rue"/>
                    </InputGroup>
                </Form.Group>
                <Form.Group as={Col}>
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text>
                                <RiLockPasswordLine/>
                            </InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control size="lg" type="text" placeholder="Ville"/>
                    </InputGroup>
                </Form.Group>
                <Form.Group as={Col}>
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text>
                                <RiLockPasswordLine/>
                            </InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control size="lg" type="text" placeholder="Code Postal"/>
                    </InputGroup>
                </Form.Group>
                <br />
                <Form.Group as={Col}>
                    <div class="mb-4">
                        <h2><b>Coordonnées</b></h2>
                    </div>
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text>
                                <RiLockPasswordLine/>
                            </InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control size="lg" type="email" placeholder="Email"/>
                    </InputGroup>
                </Form.Group>
                <Form.Group as={Col}>
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text>
                                <RiLockPasswordLine/>
                            </InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control size="lg" type="number" placeholder="Numero"/>
                    </InputGroup>
                </Form.Group>
            </Form>
            <div className="d-flex justify-content-end mb-5">
                <Button variant="creer" type="submit" className="btn-create" size=" ">
                    Enregistrer
                </Button>
            </div>
        </div>
    )
}

export default Entreprise;