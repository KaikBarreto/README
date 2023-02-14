import { useState, useEffect } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import Caneta from "../assets/img/penIcon.png"

import headerImg from "../assets/img/header-img.svg"
import fotoKaik from "../assets/img/fotoKaik.jpg"

import "animate.css"
import TrackVisibility from "react-on-screen"

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const toRotate = ["Desenvolvedor da Web", "Designer Gráfico"]
  const [text, setText] = useState("D")
  const [delta, setDelta] = useState(300 - Math.random() * 100)
  const period = 2000

  useEffect(() => {
    let ticker = setInterval(() => {
      tick()
    }, delta)

    return () => {
      clearInterval(ticker)
    }
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length
    let fullText = toRotate[i]
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1)

    setText(updatedText)

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2)
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true)
      setDelta(period)
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false)
      setLoopNum(loopNum + 1)
      setDelta(500)
    }
  }

  return (
    <section className="banner" id="home">
      {/* caneta início */}
      <img id="caneta" src={Caneta} alt="ícone azul claro de caneta do photoshop" />
      {/* caneta fim */}
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animated__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">
                    Seja bem-vindo ao meu Portfólio
                  </span>

                  <h1>
                    {`Olá, me chamo Kaik`}
                    <br />
                    {`e sou um `}
                    <br />
                    <span className="wrap text-gradient">{text}</span>
                  </h1>
                  <p>
                    Sou um <strong>jovem</strong> brasileiro, nascido no{" "}
                    <strong>Rio de Janeiro - RJ</strong> e{" "}
                    <strong>apaixonado</strong> por tecnologia e inovação. Desde
                    sempre me aventurei em jornadas de aprendizado, e continuo{" "}
                    <strong>estudando diariamente</strong> para me aperfeiçoar
                    não somente como profissional, mas como pessoa.
                  </p>
                  <img src={fotoKaik} alt="foto Kaik" id="fotoKaik" />

                  <a
                    href="https://api.whatsapp.com/send?phone=+5521970117921&text=Olá,%20Kaik!%20Vim%20pelo%20seu%20portfólio!"
                    rel="noreferrer"
                    target="_blank"
                    style={{ textDecoration: "none" }}
                  >
                    <button onClick={() => console.log("connect")}>
                      Vamos trocar uma ideia! <ArrowRightCircle size={25} />
                    </button>
                  </a>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Imagem do cabeçalho" />
          </Col>
        </Row>
      </Container>
    </section>
  )
}
