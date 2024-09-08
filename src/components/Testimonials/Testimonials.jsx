import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import TestimonialsCards from "./TestimonialsCards";
import Particle from "../Particle";
import IMG from "../../assets/Testimonials/avatar.svg";
import './testimonials.css'

function Testimonials() {
  return (
    <Container fluid className="testimonial-section">
      <Particle /> 
      <Container>
        <h1 className="testimonial-heading">
          Quelques <strong className="purple">Temoignages </strong>
        </h1>
        <p style={{ color: "white" }}>
          Voici quelques temoignages que nous avons recus de nos apprenants.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="testimonial-card">
            <TestimonialsCards
              imgPath={IMG}
              isBlog={false}
              title="John Doe"
              description="Merci a vous et a toute votre equipe pour le soutient, le dynamisme, et aussi la force que vous nous avez donner. Grace a vous, J'ai eu mon concours."
             />
          </Col>

          <Col md={4} className="testimonial-card">
            <TestimonialsCards
              imgPath={IMG}
              isBlog={false}
              title="John Doe"
              description="Merci a vous et a toute votre equipe pour le soutient, le dynamisme, et aussi la force que vous nous avez donner. Grace a vous, J'ai eu mon concours."
             />
          </Col>

          <Col md={4} className="testimonial-card">
            <TestimonialsCards
              imgPath={IMG}
              isBlog={false}
              title="John Doe"
              description="Merci a vous et a toute votre equipe pour le soutient, le dynamisme, et aussi la force que vous nous avez donner. Grace a vous, J'ai eu mon concours."
             />
          </Col>

          <Col md={4} className="testimonial-card">
            <TestimonialsCards
              imgPath={IMG}
              isBlog={false}
              title="John Doe"
              description="Merci a vous et a toute votre equipe pour le soutient, le dynamisme, et aussi la force que vous nous avez donner. Grace a vous, J'ai eu mon concours."
             />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Testimonials;
