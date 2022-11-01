import { Col, Container, Row } from "react-bootstrap"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

import caneta from "../assets/img/caneta.png"
import website from "../assets/img/website.png"
import redesSociais from "../assets/img/redesSociais.png"
import card from "../assets/img/card.png"

import colorSharp2 from "../assets/img/color-sharp2.png"
import colorSharp from "../assets/img/color-sharp.png"

const Services = () => {
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
    <section className="services" id="services">
      <Container>
        <Row>
          <Col>
            <h2>Especialidades</h2>
            <p className="serviceParagraph">
              Posicionar-se no mundo digital já deixou de ser opcional há
              tempos. Uma boa imagem vende: seja você, seu produto ou sua marca.
            </p>
            <div className="skill-bx2">
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={caneta} alt="Pen Tool" />
                  <h5>
                    Criação de <br />
                    Identidade Visual
                  </h5>
                </div>

                <div className="item">
                  <img src={website} alt="website icon" />
                  <h5>Desenvolvimento de Sites</h5>
                </div>

                <div className="item">
                  <img src={card} alt="cartão de visita" />
                  <h5>
                    Design de Impressos <br />
                    (cartões, banners etc.)
                  </h5>
                </div>

                <div className="item">
                  <img
                    src={redesSociais}
                    alt="social media"
                    style={{ scale: "0.8" }}
                  />
                  <h5>
                    Social Media <br />
                    (redes sociais)
                  </h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="color sharp"
      />
      <img
        className="background-image-left"
        src={colorSharp}
        alt="color sharp"
      />
    </section>
  )
}
export default Services
