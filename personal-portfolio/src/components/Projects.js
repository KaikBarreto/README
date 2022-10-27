import { Col, Container, Nav, Row, Tab } from "react-bootstrap"
import projImg1 from "../assets/img/project-img1.png"
import projImg2 from "../assets/img/project-img2.png"
import projImg3 from "../assets/img/project-img3.png"
import colorSharp2 from "../assets/img/color-sharp2.png"
import ProjectCard from "./ProjectCard"

const Projects = () => {
  const programmingProjects = [
    {
      title: "Projeto de programação",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Projeto de programação",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Projeto de programação",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ]

  const designProjects = [
    {
      title: "Projeto de Design",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Projeto de Design",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Projeto de Design",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ]

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projetos</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestias, eos. Corporis saepe obcaecati.
            </p>
            <Tab.Container id="projets-tabs" defaultActiveKey="programming">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="programming" className="categoria">Programação</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="design" className="categoria">Design</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="programming">
                  <Row>
                    {programmingProjects.map((project, index) => (
                      <ProjectCard key={index} {...project} />
                    ))}
                  </Row>
                </Tab.Pane>

                <Tab.Pane eventKey="design">
                  <Row>
                    {designProjects.map((project, index) => (
                      <ProjectCard key={index} {...project} />
                    ))}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} />
    </section>
  )
}
export default Projects
