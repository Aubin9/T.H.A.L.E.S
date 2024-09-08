import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Salut a tous Nous sommes le groupe <a href="/"><span className="purple">T.H.A.L.E.S </span></a> 
            dont le siege est a <span className="purple"> Yaounde Cameroun</span>
            <br />
            Nous vous aidons et vous preparons aux concours
            <br />
            Principalement ceux de ENSTP, et ecole ingenieurie
            <br />
            <br />
            Nous avons a cet effet des packets de formations a votre disposition
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Enseignement
            </li>
            <li className="about-activity">
              <ImPointRight /> Preparation aux concours
            </li>
            <li className="about-activity">
              <ImPointRight /> Formation personnalises
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Seul l'effort fait le fort!"{" "}
          </p>
          <footer className="blockquote-footer">T.H.A.L.E.S</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
