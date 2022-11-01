import { Col, Container, Row } from "react-bootstrap"
import colorSharp2 from "../assets/img/color-sharp2.png"
import colorSharp from "../assets/img/color-sharp.png"

const Services = () => {
  return (
    <section className="services">
      <Container>
        <Row>
          <Col>
            <h2>Serviços / Especialidades</h2>
            <p className="serviceParagraph">Posicionar-se no mundo digital já deixou de ser opcional há tempos. Uma boa imagem vende: seja você, seu produto ou sua marca.</p>
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
