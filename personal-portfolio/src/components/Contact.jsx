import { useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import contactImg from "../assets/img/contact-img.svg"

const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  }

  const [formDetails, setFormDetails] = useState(formInitialDetails)
  const [buttonText, setButtonText] = useState("Enviar")
  const [status, setStatus] = useState({})

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    })
  }

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contactImg} alt="Contate-me" />
          </Col>
          <Col md={6}>
            <h2>Entre em contato</h2>
            <form onSubmit={(e) => e.preventDefault()}>
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.firstName}
                    placeholder="Seu nome"
                    onChange={e => onFormUpdate("firstName", e.target.value)}
                  />
                </Col>
                <Col>
                  <textarea
                    row="6"
                    value={formDetails.message}
                    placeholder="Sua mensagem"
                    onChange={e => onFormUpdate("message", e.target.value)}
                  />
                  <a
                    href={`https://api.whatsapp.com/send?phone=+5521970117921&text=Olá, meu nome é ${formDetails.firstName} e vim através do seu portfólio. Minha mensagem é: "${formDetails.message}"`}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <div id="contactButton">
                      <span>Enviar mensagem</span>
                    </div>
                  </a>
                </Col>
                {status.message && (
                  <Col>
                    <p
                      className={status.sucess === false ? "danger" : "success"}
                    >
                      {status.message}
                    </p>
                  </Col>
                )}
              </Row>
              <input
                type="hidden"
                name="_next"
                value="http://localhost:3000/thanks.html"
              ></input>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
export default Contact
