import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/brave_screenshot_www.blackwaveseg.com.png";
import chatify from "../../Assets/Projects/hj.png";
// import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/Screenshot from 2023-12-02 06-29-58.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Dinge Store"
              description="a cutting-edge online shopping destination that seamlessly combines the power of TypeScript, Next.js, Tailwind CSS, and Sanity to deliver an unparalleled shopping experience. Our platform is meticulously crafted to provide users with a visually stunning, highly responsive, and intuitively designed interface, ensuring a delightful journey from browsing to checkout."
              ghLink="https://github.com/omarghandour/E-Commerce.git"
              demoLink="https://ghandour.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="OG"
              description="OG is a cutting-edge social media platform
               that seamlessly blends innovation, functionality, and security, 
               powered by TypeScript, Tailwind CSS, and Appwrite. This unique 
               combination of technologies ensures a smooth, responsive, and feature-rich user experience."
              ghLink="https://github.com/omarghandour/OGsocial1.git"
              demoLink="https://og-pied.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="BlackWaves"
              description="Led development of a sleek portfolio website for Black Waves, 
              a software company delivering enterprise solutions. Directed a team to build
               a responsive MERN.js platform , showcasing their web/mobile apps.
                Prioritized UX/UI and scalable architecture,
                 aligning tech execution with business vision.

"
              ghLink="https://github.com/omarghandour/TodolistOG.git"
              demoLink="https://www.blackwaveseg.com/"
            />
          </Col>
          {/* 
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={''}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={'suicide'}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={'emotion'}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
