import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import {
  SiTailwindcss,
  SiJavascript,
  SiFirebase,
  SiNextdotjs,
  SiJquery,
  SiPostgresql,
  SiExpress,
  SiBootstrap,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
      <SiJavascript />
      <h6>ES6</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiNextdotjs />
      <h6>Next.js</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <h6>React</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <h6>Node.js</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiExpress />
      <h6>Express Js</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiJquery />
      <h6>Jquery</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <h6>MongoDB</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
        <h6>PostgreSQL</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <h6>Git</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
        <h6>Firebase</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiTailwindcss />
      <h6>Tailwind CSS</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiBootstrap />
      <h6>Bootstrap</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <h6>Python</h6>
      </Col>
    
      
    </Row>
  );
}

export default Techstack;
