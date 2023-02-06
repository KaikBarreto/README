import { Col, Container, Row } from "react-bootstrap"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import meter2 from "../assets/img/meter2.svg"
import meter3 from "../assets/img/meter3.svg"
import colorSharp from "../assets/img/color-sharp.png"

import logo from "../assets/img/logoPNG.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx wow zoomIn">
              <h2>Habilidades</h2>
              <p>
                O nosso mundo muda a todo instante e, por conta disso,
                <br /> é vital que se dominem as tecnologias mais eficientes do
                mercado, além de estar apto nas línguas mais faladas no planeta.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={meter3} alt="Maestry meter" />
                  <h5>Desenvolvimento Front-end (web)</h5>
                </div>

                <div className="item">
                  <img src={meter2} alt="Maestry meter" />
                  <h5>Design Gráfico</h5>
                </div>

                <div className="item">
                  <img src={meter3} alt="Maestry meter" />
                  <h5>Inglês Fluente</h5>
                </div>

                <div className="item">
                  <img src={meter2} alt="Maestry meter" />
                  <h5>Identidade Visual</h5>
                </div>

                <div className="item">
                  <img src={meter2} alt="Maestry meter" />
                  <h5>Espanhol Intermediário</h5>
                </div>
              </Carousel>
            </div>
            <div className="technologies">
              <h4 className="text-gradient2">Tecnologias mais utilizadas:</h4>
              <marquee>
                <img
                  align="center"
                  alt="Kaik-HTML"
                  height="30"
                  width="40"
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"
                />
                <img
                  align="center"
                  alt="Kaik-CSS"
                  height="30"
                  width="40"
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"
                />
                <img
                  align="center"
                  alt="Kaik-JS"
                  height="30"
                  width="40"
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"
                />
                <img
                  align="center"
                  alt="Kaik-TS"
                  height="30"
                  width="40"
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg"
                />
                <img
                  align="center"
                  alt="Kaik-PYTHON"
                  height="30"
                  width="40"
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
                />
                <img
                  align="center"
                  alt="Kaik-PHOTOSHOP"
                  height="30"
                  width="40"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg"
                />
                <img
                  align="center"
                  alt="Kaik-Illustrator"
                  height="30"
                  width="40"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg"
                />
                <img
                  align="center"
                  alt="Kaik-AfterEffects"
                  height="30"
                  width="40"
                  style={{ background: "#fff" }}
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-plain.svg"
                />
                <img
                  align="center"
                  alt="Kaik-Premiere"
                  height="30"
                  width="40"
                  style={{ background: "#fff" }}
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-plain.svg"
                />
              </marquee>
            </div>
          </Col>
        </Row>
      </Container>

      <img
        className="background-image-left"
        src={colorSharp}
        alt="color sharp"
      />
    </section>
  )
}
