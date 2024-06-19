import { useParams } from "react-router-dom";
import ProjectData from './../../assets/data/projects.json'
import ErrorPage from "../ErrorPage/ErrorPage"
import images, { ImageMap } from './../../assets/data/imageImports'
import { Link } from 'react-router-dom'
import './Project.scss'

interface Project {
  id: string
  title: string
  details: string[]
  subtitle: string
  image: keyof ImageMap
  shortDesc: string
  concept: string
  difficult: string
  technos: string[]
}

function ProjectPage() {
  const { projectId}  = useParams<{ projectId: string }>()
  const project = ProjectData.find(project => project.id === projectId) as Project | undefined
  if (!project || !project.image) {return <ErrorPage />}

  const ProjectImg = images[project.image]

  return(
    <div className="project-page">
      <div className="titles">
        <h1>{project.title}</h1>
        <h2>{project.shortDesc}</h2>
      </div>
      <img src={ProjectImg}></img>
      <div className="text">
        <h3>Concept;</h3><hr/>
        <p>{project.concept}</p>
        <h3>Difficultés;</h3><hr/>
        <p>{project.difficult}</p>
        <h3>Technologies utilisées;</h3><hr className="hr-skills"/>
        {project.technos.map((techno, index) => (
          <span key={index}>{techno}</span>
        ))}
        <h3>Compétences acquises;</h3><hr/>
        <ul>
        {project.details.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
        </ul><hr/><br/>
        <Link to={`https://github.com/Hyrull/${project.id}`}>Voir sur GitHub</Link>
      </div>
    </div>
  )
}

export default ProjectPage