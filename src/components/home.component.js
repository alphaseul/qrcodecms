import React, { Component } from "react";
import "../components/style/home.css";
import {
  MdNavigateNext,
  MdNotificationsActive,
  MdCreditCard,
} from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import testione from "./style/image/testimonials-1.png";
import testitwo from "./style/image/testimonials-2.png";
import testitree from "./style/image/testimonials-3.png";
import {
  BsBoxArrowInRight,
  BsPhone,
  BsBoxArrowUp,
  BsChatDots,
  BsLaptop,
  BsTablet,
} from "react-icons/bs";
import { FaReact, FaBootstrap, FaWordpressSimple, FaAws } from "react-icons/fa";
import { SiJavascript, SiFlutter } from "react-icons/si";

export default class Home extends Component {
  render() {
    return (
      <body>
        <header className="masthead text-white text-center">
          <div className="overlay"></div>
          <div className="container">
            <div className="row">
              <div className="col-xl-9 mx-auto">
                <h1 className="mb-5">
                  QR Code Protect - La référence Numerique #1 Dans la création
                  D'application Mobile Et Site Web
                </h1>
              </div>
              <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
                <div>
                  <button
                    className="btn btn-lg"
                    style={{
                      borderRadius: "20px",
                      backgroundColor: "#85139e",
                      color: "white",
                    }}
                  >
                    Obtenir un devis maintenant{" "}
                    <MdNavigateNext style={{ color: "white" }} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </header>
        <section className=" jumbotron features-icons bg-light text-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                  <div className="features-icons-icon d-flex">
                    <i className="icon-screen-desktop m-auto text-primary">
                      <BsLaptop style={{ color: "#85139e" }} />
                    </i>
                  </div>
                  <h3>Web</h3>
                  <p className="lead mb-0">
                    This theme will look great on any device, no matter the
                    size!
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                  <div className="features-icons-icon d-flex">
                    <i className="icon-layers m-auto text-primary">
                      <BsTablet style={{ color: "#85139e" }} />
                    </i>
                  </div>
                  <h3>Tablette</h3>
                  <p className="lead mb-0">
                    Featuring the latest build of the new Bootstrap 4 framework!
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                  <div className="features-icons-icon d-flex">
                    <i className="icon-check m-auto text-primary">
                      <BsPhone style={{ color: "#85139e" }} />
                    </i>
                  </div>
                  <h3>Mobile</h3>
                  <p className="lead mb-0">
                    Ready to use with your own content, or customize the source
                    files!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="features-icons text-center">
          <h1 style={{ marginBottom: "10%" }}>Fonctionnalités</h1>
          <div style={{ marginLeft: "10%", marginRight: "10%" }}>
            <div className="row">
              <div className="col-lg-6 d-flex">
                <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3 ">
                  <div className="features-icons-icon d-flex">
                    <i className="icon-check mr-4 text-primary">
                      <BsBoxArrowInRight style={{ color: "#85139e" }} />
                    </i>
                  </div>
                </div>
                <div>
                  <p className="text-justify">
                    <h2>Connexion automatique</h2>
                    Praesent sapien massa, convallis a pellentesque nec, egestas
                    non nisi. Vestibulum ante ipsum primis in faucibus orci
                    luctus et ultrices posuere cubilia Curae; Donec velit neque,
                    auctor sit amet aliquam vel, ullamcorper sit amet ligula.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 d-flex">
                <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3 ">
                  <div className="features-icons-icon d-flex">
                    <i className="icon-check mr-4 text-primary">
                      <FiShoppingCart style={{ color: "#85139e" }} />
                    </i>
                  </div>
                </div>
                <div>
                  <p className="text-justify">
                    <h2> Panier persistant en illimité</h2>
                    Praesent sapien massa, convallis a pellentesque nec, egestas
                    non nisi. Vestibulum ante ipsum primis in faucibus orci
                    luctus et ultrices posuere cubilia Curae; Donec velit neque,
                    auctor sit amet aliquam vel, ullamcorper sit amet ligula.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div style={{ marginLeft: "10%", marginRight: "10%" }}>
            <div className="row">
              <div className="col-lg-6 d-flex">
                <div className="features-icons-item mb-5 mb-lg-0 mb-lg-3 ">
                  <div className="features-icons-icon d-flex">
                    <i className="icon-check mr-4 text-primary">
                      <BsBoxArrowUp style={{ color: "#85139e" }} />
                    </i>
                  </div>
                </div>
                <div>
                  <p className="text-justify">
                    <h2>Lien universels</h2>
                    Praesent sapien massa, convallis a pellentesque nec, egestas
                    non nisi. Vestibulum ante ipsum primis in faucibus orci
                    luctus et ultrices posuere cubilia Curae; Donec velit neque,
                    auctor sit amet aliquam vel, ullamcorper sit amet ligula.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 d-flex">
                <div className="features-icons-item mb-5 mb-lg-0 mb-lg-3 ">
                  <div className="features-icons-icon d-flex">
                    <i className="icon-check mr-4 text-primary">
                      <BsChatDots style={{ color: "#85139e" }} />
                    </i>
                  </div>
                </div>
                <div>
                  <p className="text-justify">
                    <h2>Chat en ligne</h2>
                    Praesent sapien massa, convallis a pellentesque nec, egestas
                    non nisi. Vestibulum ante ipsum primis in faucibus orci
                    luctus et ultrices posuere cubilia Curae; Donec velit neque,
                    auctor sit amet aliquam vel, ullamcorper sit amet ligula.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div style={{ marginLeft: "10%", marginRight: "10%" }}>
            <div className="row">
              <div className="col-lg-6 d-flex">
                <div className="features-icons-item mb-5 mb-lg-0 mb-lg-3 ">
                  <div className="features-icons-icon d-flex">
                    <i className="icon-check mr-4 text-primary">
                      <MdCreditCard style={{ color: "#85139e" }} />
                    </i>
                  </div>
                </div>
                <div>
                  <p className="text-justify">
                    <h2>Paiement en un clic</h2>
                    Praesent sapien massa, convallis a pellentesque nec, egestas
                    non nisi. Vestibulum ante ipsum primis in faucibus orci
                    luctus et ultrices posuere cubilia Curae; Donec velit neque,
                    auctor sit amet aliquam vel, ullamcorper sit amet ligula.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 d-flex">
                <div className="features-icons-item mb-5 mb-lg-0 mb-lg-3 ">
                  <div className="features-icons-icon d-flex">
                    <i className="icon-check mr-4 text-primary">
                      <MdNotificationsActive style={{ color: "#85139e" }} />
                    </i>
                  </div>
                </div>
                <div>
                  <p className="text-justify">
                    <h2>Push notifications</h2>
                    Praesent sapien massa, convallis a pellentesque nec, egestas
                    non nisi. Vestibulum ante ipsum primis in faucibus orci
                    luctus et ultrices posuere cubilia Curae; Donec velit neque,
                    auctor sit amet aliquam vel, ullamcorper sit amet ligula.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="jumbotron">
            <h1>Nous utilisons</h1>
            <div className="d-flex justify-content-around">
              <div>
                <FaReact
                  style={{ width: "100%", height: "100%", color: "#85139e" }}
                />
                <p>
                  <b>REACT</b>
                </p>
              </div>
              <div>
                <FaBootstrap
                  style={{ width: "100%", height: "100%", color: "#85139e" }}
                />
                <p>
                  <b>BOOTSTRAP</b>
                </p>
              </div>
              <div>
                <FaAws
                  style={{ width: "100%", height: "100%", color: "#85139e" }}
                />
                <p>
                  <b>AWS</b>
                </p>
              </div>
              <div>
                <SiFlutter
                  style={{ width: "100%", height: "100%", color: "#85139e" }}
                />
                <p>
                  <b>Flutter</b>
                </p>
              </div>
              <div>
                <FaWordpressSimple
                  style={{ width: "100%", height: "100%", color: "#85139e" }}
                />
                <p>
                  <b>Wordpress</b>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          className="testimonials text-center bg-dark"
          style={{ color: "white" }}
        >
          <div className="container">
            <h2 className="mb-5">Notre équipe</h2>
            <div className="row">
              <div className="col-lg-4">
                <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                  <img
                    className="img-fluid rounded-circle mb-3"
                    src={testione}
                    alt=""
                  />
                  <h5>Margaret E.</h5>
                  <p className="font-weight-light mb-0">
                    "This is fantastic! Thanks so much guys!"
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div class="testimonial-item mx-auto mb-5 mb-lg-0">
                  <img
                    class="img-fluid rounded-circle mb-3"
                    src={testitwo}
                    alt=""
                  />
                  <h5>Fred S.</h5>
                  <p class="font-weight-light mb-0">
                    "Bootstrap is amazing. I've been using it to create lots of
                    super nice landing pages."
                  </p>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="testimonial-item mx-auto mb-5 mb-lg-0">
                  <img
                    class="img-fluid rounded-circle mb-3"
                    src={testitree}
                    alt=""
                  />
                  <h5>Sarah W.</h5>
                  <p class="font-weight-light mb-0">
                    "Thanks so much for making these free resources available to
                    us!"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </body>
    );
  }
}
