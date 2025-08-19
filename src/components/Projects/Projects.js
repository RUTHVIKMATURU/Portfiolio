import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import blog from "../../Assets/Projects/blog.jpg";
import campus from "../../Assets/Projects/Campus.png";
import hostel from "../../Assets/Projects/Hostel.jpg";
import event from "../../Assets/Projects/event.jpg";
import movie from "../../Assets/Projects/movies.jpg";
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
              imgPath={blog}
              isBlog={false}
              title="Blog Web App"
              description="Developed a full-stack blog application using the MERN stack integrated with Firebase for authentication. Implemented secure login and signup features to ensure data privacy and user access control. Designed and built RESTful APIs to enable seamless communication between the frontend and backend, supporting CRUD operations for blog posts. The app provides an intuitive interface for creating, updating, and managing posts, ensuring a smooth user experience."
              ghLink="https://github.com/RUTHVIKMATURU/BlogApp"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={campus}
              isBlog={false}
              title="Campus Career Connect"
              description="Built a networking platform tailored for students and alumni to connect, collaborate, and share opportunities. Leveraged the MERN stack for the core application and Firebase for real-time features like chat and notifications. Implemented role-based access to differentiate between students, alumni, and administrators, ensuring secure interactions. Integrated event updates to keep users informed of campus activities, fostering professional networking and community engagement."
              ghLink="https://github.com/RUTHVIKMATURU/campus-connect"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hostel}
              isBlog={false}
              title="Hostel Management System"
              description="Designed and implemented a hostel management system using the MERN stack to streamline hostel record-keeping and fee tracking. Developed CRUD functionalities to manage student details, room allocations, and payment history efficiently. Integrated an admin dashboard for real-time monitoring and management of hostel data. The system improves administrative efficiency while ensuring data consistency and transparency."
              ghLink="https://github.com/RUTHVIKMATURU/hostel-management-system"           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={event}
              isBlog={false}
              title="Event Management System"
              description="Created an event management application with the MERN stack to simplify event scheduling, registrations, and participant tracking. Implemented role-based access control for organizers, participants, and admins to manage their respective tasks securely. Provided features for real-time event updates and easy participant management, ensuring a smooth registration process. The system enhances coordination and improves the overall event experience for users."
              ghLink="https://github.com/RUTHVIKMATURU/eventApp"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movie}
              isBlog={false}
              title="Movies DBMS"
              description="Designed and implemented a relational database system for managing a movie database using MySQL. Created optimized database schemas and relationships to handle movie details, actors, genres, and reviews efficiently. Developed and tested SQL queries for data retrieval, updates, and reporting to improve database performance. The project highlights expertise in database design, normalization, and query optimization."
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
