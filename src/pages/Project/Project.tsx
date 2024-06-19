import { useParams } from "react-router-dom";
import ProjectData from './../../assets/data/projects.json'
import './Project.scss'
import ErrorPage from "../ErrorPage/ErrorPage";

function ProjectPage() {
  const {projectId} = useParams()
  const project = ProjectData.find(project => project.id === projectId)
  if (!project) {return <ErrorPage />}

  return(
    <h1>Found! Project: {project.title}</h1>
  )
}

export default ProjectPage