import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="red">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Machine Learning Wine Quality Testing"
              description="A machine learning project predicting wine quality using regression techniques, analyzing chemical features (pH, acidity, alcohol, etc.) to model continuous quality scores for evaluation."
              ghLink="https://github.com/SharveshRam23/Machine-Learning-Wine-Quality-Testing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Personality Classification"
              description="Great idea 🚀 A machine learning project to classify personality types based on user input and behavior can be a powerful mix of psychology and data science."
              ghLink="https://github.com/SharveshRam23/Machine-Learning-Personality-Classification"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Loan Approval Prediction"
              description="A machine learning project that predicts loan approval using various features such as credit score, income, and loan amount. The model analyzes historical loan data to provide insights into approval likelihood."
              ghLink="https://github.com/SharveshRam23/Loan-Approval-Prediction"             
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
