import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              PERMETEZ! <span className="purple"> INTRODUISONS </span> NOUS
            </h1>
            <div className="home-about-body">
              Nous partageons notre passion a vous encadrer, afin de reussir a vos concours… 🤷‍♂️
              <br />
              <br />Nous sommes specialiser en ce qui concerne
              <i>
                <b className="purple"> Les cours et la resolution des exercices reccurents sur les epreuves de concours </b>
              </i>
              <br />
              <br />
              Nous sommes interesser a construire une grande communautee de soutient &nbsp;
              <i>
                <b className="purple">L'enseignement et la formation </b> mais aussi la preparation aux concours tels que {" "}
                <b className="purple">
                  L'ENSTP, ingenieurie, polytechniques, medecine, et bien d'autre !
                </b>
              </i>
              <br />
              <br />
              Quand il est possible, nous nous axons aussi beaucoup plus sur {" "}
               <b className="purple">L'orientation</b> et {" "}
              <i>
                <b className="purple">
                  des conseils de soutient
                </b>
              </i>
              &nbsp; telles que
              <i>
                <b className="purple"> coaching, mentoring</b>
              </i>
            </div>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>SUIVEZ NOUS SUR</h1>
            <div>
              Sentez-vous libre de vous <span className="purple">connecter </span>a nous
            </div>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaFacebook />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
