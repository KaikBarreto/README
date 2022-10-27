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
          <img src={logo} alt="Logo" />
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
              href="#services"
              className={
                activeLink === "services" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("services")}
            >
              Serviços
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
              <a href="https://www.github.com/kaikbarreto" rel="noreferrer" target="_blank">
                <img src={navIconGithub} alt="navicon2" />
              </a>
            </div>
            <a
              href="https://api.whatsapp.com/send?phone=+5521970117921&text=Olá,%20Kaik!%20Vim%20pelo%20seu%20portfólio!"
              rel="noreferrer"
              target="_blank"
            >
              <button className="vvd" onClick={() => console.log("connect")}>
                <span>Vamos conversar!</span>
              </button>
            </a>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
