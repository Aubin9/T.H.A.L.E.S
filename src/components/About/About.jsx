import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import './about.css'

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container style={{margin: 0}}>
        <Row style={{ justifyContent: "center", margin: -40}}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
              // paddingLeft: 0,
              // paddingRight: 0,
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Salut, <strong className="purple">Nous sommes</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Nos <strong className="purple">Services </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Outils</strong> que nous utilisons
        </h1>
        <Toolstack />

      </Container>
    </Container>
  );
}

export default About;
