import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { Contact } from "./Contact";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Payroll",
      description: "Payroll application",
      imgUrl: projImg1,
    },
    {
      title: "Mpesa",
      description: "Mpesa Integration",
      imgUrl: projImg2,
    },
    {
      title: "Python",
      description: "Django Projects",
      imgUrl: projImg3,
    },
    {
      title: "Quotations",
      description: "Quotations Generator",
      imgUrl: projImg1,
    },
    {
      title: "QR Code",
      description: "QR Code Generator",
      imgUrl: projImg2,
    },
    {
      title: "Web Dev",
      description: "Website Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__bounce" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    I am still working to learn more languages, so I can't do
                    that just yet. Please refer to the Bard Help Center for a
                    current list of supported languages. Is there anything else
                    you'd like my help with?
                  </p>
                </div>
              )}
            </TrackVisibility>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first"> Projects</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second"> Contact</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab 3</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>

                <Tab.Pane eventKey="second">
                  <Contact />
                </Tab.Pane>
                <Tab.Pane eventKey="third">Ancent React Project</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
