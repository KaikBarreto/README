import { Col, Container, Nav, Row, Tab } from "react-bootstrap"
import projImg1 from "../assets/img/project-img1.png"
import projImg2 from "../assets/img/project-img2.png"
import projImg3 from "../assets/img/project-img3.png"

import barretoMetais from "../assets/img/barretoMetais.png"
import mathPlots from "../assets/img/mathPlots.png"

import colorSharp2 from "../assets/img/color-sharp2.png"
import ProjectCard from "./ProjectCard"

const Projects = () => {
  const programmingProjects = [
    {
      title: "MiniBlog",
      description:
        "Um blog funcional, construido com ReactJS e Firebase, com cadastro e login de usuário. Permite a criação de novos posts, visíveis a qualquer visitante do blog, além de contar com um dashboard administrativo onde pode-se excluir e editar posts autorais.",
      imgUrl: projImg1,
      projUrl: "https://github.com/kaikbarreto/parallaxminiblog",
    },
    {
      title: "Parallax Math Plots",
      description:
        "Uma aplicação que combina lógica de programação com álgebra. Trata-se de um programa que recebe como entrada uma expressão matemática (uma função do segundo grau) e retorna um gráfico relativo à função algébrica.",
      imgUrl: mathPlots,
      projUrl: "https://github.com/kaikbarreto/parallaxmathplots",
    },
    {
      title: "Site Institucional Barreto Metais",
      description:
        "Uma página profissional, concisa e sofisticada para uma empresa brasileira de reciclagem, situada na Zona Oeste do Rio de Janeiro",
      imgUrl: barretoMetais,
      projUrl: "https://www.barretometais.com",
    },
  ]

  const designProjects = [
    {
      title: "Projeto de Design",
      description: "Design & Development",
      imgUrl: projImg3,
      projUrl: "#",
    },
    {
      title: "Projeto de Design",
      description: "Design & Development",
      imgUrl: projImg1,
      projUrl: "#",
    },
    {
      title: "Projeto de Design",
      description: "Design & Development",
      imgUrl: projImg2,
      projUrl: "#",
    },
  ]

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projetos</h2>
            <p className="text-gradient">
              Aqui você pode ver <strong>um pouco do meu trabalho</strong>,
              tanto como programador quanto como designer gráfico.
            </p>
            <Tab.Container id="projets-tabs" defaultActiveKey="programming">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="programming" className="categoria">
                    Programação / Sites
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="design" className="categoria">
                    Design Gráfico <br />
                    (digitais e impressos)
                  </Nav.Link>
                </Nav.Item>
              </Nav>
                <p className="clique">
                  Clique na descrição de qualquer projeto para ver o projeto na íntegra. Passe o dedo/mouse por cima para ver detalhes
                </p>
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
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="color sharp"
      />
    </section>
  )
}
export default Projects