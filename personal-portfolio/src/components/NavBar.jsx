import { useState, useEffect } from "react"
import { Navbar, Nav, Container } from "react-bootstrap"
import logo from "../assets/img/logo.svg"
import navIcon1 from "../assets/img/nav-icon1.svg"
import navIconGithub from "../assets/img/nav-iconGitHub.svg"
import navIcon3 from "../assets/img/nav-icon3.svg"




export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home")
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {

    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", onScroll)

    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const onUpdateActiveLink = value => {
    setActiveLink(value)
  }

  return (
    <Navbar bg="light" expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <span className="text-uppercase text-bold text-gradient2">
            Parallax
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Início
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Habilidades
            </Nav.Link>

            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              Projetos
            </Nav.Link>
            <Nav.Link
              href="#services"
              className={
                activeLink === "services" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("services")}
            >
              Serviços
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a
                href="https://www.instagram.com/barreto.kaik/"
                rel="noreferrer"
                target="_blank"
              >
                <img src={navIcon3} alt="navicon3" />
              </a>
              <a
                href="https://www.linkedin.com/in/kaikbarreto"
                rel="noreferrer"
                target="_blank"
              >
                <img src={navIcon1} alt="navicon1" />
              </a>
              <a
                href="https://www.github.com/kaikbarreto"
                rel="noreferrer"
                target="_blank"
              >
                <img src={navIconGithub} alt="navicon2" />
              </a>
            </div>
            <a href="#connect">
              <button className="vvd">
                <span>Vamos conversar!</span>
              </button>
            </a>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
