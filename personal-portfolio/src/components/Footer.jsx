import { Container, Row, Col } from "react-bootstrap"
import logo from "../assets/img/logo.svg"
import navIcon1 from "../assets/img/nav-icon1.svg"
import navIconGithub from "../assets/img/nav-iconGitHub.svg"
import navIcon3 from "../assets/img/nav-icon3.svg"

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center p-5 pb-0">
          <Col sm={6}>
          <span className="text-uppercase text-bold text-gradient2" id="logoFooter">
            Parallax
          </span>
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="" target="_blank" rel="noreferrer">
                <img src={navIcon1} />
              </a>
              <a
                href="https://www.github.com/kaikbarreto"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIconGithub} />
              </a>
              <a
                href="https://www.instagram.com/barreto.kaik/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon3} />
              </a>
            </div>
            <p>Kaik Barreto &copy; 2022. Todos Os Direitos Reservados</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
