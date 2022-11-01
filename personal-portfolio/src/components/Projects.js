import { Col, Container, Nav, Row, Tab } from "react-bootstrap"

import studioIdentity from "../assets/img/studioIdentity.png"
import bmCards from "../assets/img/bmCards.jpg"
import posts from "../assets/img/posts.png"

import miniBlog from "../assets/img/miniBlog.png"
import casaDoEletricista from "../assets/img/casaDoEletricista.png"
import barretoMetais from "../assets/img/barretoMetais.png"
import mathPlots from "../assets/img/mathPlots.png"
import laptop from "../assets/img/laptop.webp"

import colorSharp2 from "../assets/img/color-sharp2.png"
import ProjectCard from "./ProjectCard"

const Projects = () => {
  const programmingProjects = [
    {
      title: "MiniBlog",
      description:
        "Um blog funcional, construido com ReactJS e Firebase, com cadastro e login de usuário. Permite a criação de novos posts, visíveis a qualquer visitante do blog, além de contar com um dashboard administrativo onde pode-se excluir e editar posts autorais.",
      imgUrl: miniBlog,
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
      title: "Cadastro e Consulta de Usuários com Python e SQL",
      description:
        "Um programa escrito em linguagem Python e SQL, o qual permite cadastrar e consultar usuários de uma base de dados.",
      imgUrl: laptop,
      projUrl: "https://www.youtube.com/watch?v=68_SeJlJvCk",
    },
    {
      title: "Site Casa do Eletricista",
      description:
        "Uma página institucional para uma empresa brasileira de artigos elétricos, localizada na Zona Oeste do Rio de Janeiro",
      imgUrl: casaDoEletricista,
      projUrl: "https://www.github.com/kaikbarreto/casadoeletricista",
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
      title: "Identidade Visual Studio Chaider",
      description:
        "Uma identidade visual completa, incluindo: Logotipo, padrão, paleta de cores, tipografia, cartão de visita, entre outros elementos gráficos e impressos.",
      imgUrl: studioIdentity,
      projUrl: "https://www.instagram.com/studiochaider/",
    },
    {
      title: "Cartões de visita Barreto Metais",
      description:
        "Cartão de visita com frente e verso, utilizando a paleta de cores e estilo da identidade visual da empresa.",
      imgUrl: bmCards,
      projUrl: "https://www.instagram.com/barretometais",
    },
    {
      title: "Dezenas de posts para redes sociais",
      description:
        "Uma das mais, se não a mais, eficaz forma de se posicionar no mundo digital é através das redes sociais, com vídeos e posts criativos. ",
      imgUrl: posts,
      projUrl:
        "https://www.instagram.com/stories/highlights/18233929711180864/",
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
                <span>
                  Passe o dedo/mouse por cima para ver detalhes. Clique na
                  descrição de qualquer projeto para ver o projeto na íntegra.
                </span>
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
