import { NavBar } from "./components/NavBar"
import { Banner } from "./components/Banner"
import { Skills } from "./components/Skills"
import Projects from "./components/Projects"
import Footer from "./components/Footer"
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Contact from "./components/Contact"
import Services from "./components/Services"

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Services />
      <Contact />
      <Footer />
      <a
        href="https://api.whatsapp.com/send?phone=+5521970117921&text=Olá,%20Kaik!%20Vim%20pelo%20seu%20portfólio!"
        class="float"
        target="_blank"
      >
        <i class="fa fa-whatsapp my-float"></i>
      </a>
    </div>
  )
}

export default App
