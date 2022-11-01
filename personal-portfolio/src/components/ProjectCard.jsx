import { Col } from "react-bootstrap"

const ProjectCard = ({ title, description, imgUrl, projUrl }) => {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="Imagem do projeto" id="projectCardImg" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <a href={projUrl} rel="noreferrer" target="_blank">
            {description}
          </a>
        </div>
      </div>
    </Col>
  )
}
export default ProjectCard
