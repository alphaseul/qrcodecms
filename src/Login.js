import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import logo from './qrcode-logo.png';
import "./Login.css";
import { Form, Button, InputGroup, Col } from 'react-bootstrap';
import {AiOutlineMail} from 'react-icons/ai';
import {RiLockPasswordLine} from 'react-icons/ri';
import {  
    BrowserRouter as Router,
    Switch,
    useHistory,
    useLocation,
    Route,
    Redirect,
    Link,
}from 'react-router-dom';

import Client from "./pages/Client";
import Home from "./pages/Home";
import NoPath from "./404";
import Annonce from "./pages/Annonce";
import CreerCompte from './pages/CreerCompte';
import Header from "./Header";
import Entreprise from './pages/Entreprise';
import AjouterAnnonce from './pages/AjouterAnnonce';
import AjouterCategorie from './pages/AjouterCategorie';


export default function Authentication() {
    
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Login} />
                <PrivateRoute path="/home">
                    <Home/>
                </PrivateRoute>
                <PrivateRoute path="/client">
                    <Client/>
                </PrivateRoute>
                <PrivateRoute path="/annonce">
                    <Annonce/>
                </PrivateRoute>
                <PrivateRoute path="/entreprise">
                    <Entreprise/>
                </PrivateRoute>
                <PrivateRoute path="/ajouterannonce">
                    <AjouterAnnonce/>
                </PrivateRoute>
                <PrivateRoute path="/ajoutercategorie">
                    <AjouterCategorie/>
                </PrivateRoute>
                <Route path="/creercompte">
                    <CreerCompte/>
                </Route>
                <Route path="*">
                    <NoPath/>
                </Route>
            </Switch>
      </Router>
    );
}

const Auth = {
    isAuthenticated: false,
    authenticate(cb) {
      Auth.isAuthenticated = true;
      setTimeout(cb, 100); // fake async
    },
    signout(cb) {
      Auth.isAuthenticated = false;
      setTimeout(cb, 100);
    }
};
 
function PrivateRoute({ children, ...rest }) {
    let history = useHistory();
    return (
       <div>
           <Header func={() => {
                Auth.signout(() => history.push("/"));
            }}/>
           <Route
            {...rest}
            render={({ location }) =>
            Auth.isAuthenticated ? (
                children
            ) : (
                <Redirect
                to={{
                    pathname: "/",
                    state: { from: location }
                }}
                />
            )
            }
            />
       </div> 
      
    );
}

function Login(){
    let history = useHistory();
    let location = useLocation();
  
    let { from } = location.state || { from: { pathname: "/home" } };

    let isLogin = () => {
      Auth.authenticate(() => {
        history.replace(from);
    });
};

    return(
        <div className="container">
            <div>
            <img
                src={logo}
                width="500"
                height="132"
                className="d-inline-block align-top"
                alt="qrcode logo"
            />
            </div>
            <div className="login-container">
                <Form >
                    <Form.Group as={Col}>
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text>
                                    <AiOutlineMail/>
                                </InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control size="lg" type="email" placeholder="Email"/>
                        </InputGroup>
                    </Form.Group>
                    <br />
                    <Form.Group as={Col}>
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text>
                                    <RiLockPasswordLine/>
                                </InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control size="lg" type="password" placeholder="Password"/>
                        </InputGroup>
                    </Form.Group>
                    <br />
                </Form>
                <div className="d-flex justify-content-center ">
                    <Button  onClick={isLogin} variant="connexion" type="submit" className="btn-connetion" size="lg">
                        Connexion
                    </Button>
                </div>
                <div className="d-flex justify-content-center">
                    <Link>Mot de passe oublié ?</Link>
                </div>
                <hr/>
                <div className="d-flex justify-content-center ">
                    <Button href="/creercompte" variant="creer" type="submit" className="btn-create" size=" ">
                        Créer un compte
                    </Button>
                </div>
            </div>
        </div>   
    )
}

