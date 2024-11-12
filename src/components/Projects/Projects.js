import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import telebot from "../../Assets/Projects/Telebot.png";
import hack from "../../Assets/Projects/Hack.png";
import gym from "../../Assets/Projects/gym.png";
import dashboard from "../../Assets/Projects/dashboard.png";
import details from "../../Assets/Projects/Projects.json";

function Projects() {

  const images = {
    "telebot": telebot,
    "gym": gym, 
    "dashboard": dashboard,
    "project": "",
    "marketplace": hack
  }
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent <strong className="purple">Works </strong>
        </h1>
        <Row style={{ justifyContent: "", paddingBottom: "10px" }}>
        {details.map ((project) => {
            return (
                <Col md={4} className="project-card">
                  <ProjectCard
                    key={project.id}
                    // imgPath={chatify}
                    // isBlog={false}
                    title={project.title}
                    description={project.description}
                    ghLink={project.ghLink}
                    demoLink={project.demoLink ? project.demoLink : null}
                    imgPath={images[project.image]}
                  />
                </Col>
            );
        })}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
