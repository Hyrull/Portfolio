import './MyWorks.scss'
import { Button } from 'primereact/button'
import { Card } from 'primereact/card'
import { Link } from 'react-router-dom'
import { GithubLinks } from '../../types/types'
import projectData from './../../assets/data/projects.json'

const githubRepo = ({ repo } : GithubLinks) => {
  window.open(`https://github.com/hyrull/${repo}`, '_blank')
}

function MyWorks() {
  return (
    <div id='my-works'>
      <h1>The projects I've worked on:</h1>
      <h2>And thus, the skills I've acquired</h2>
      <div className='all-cards'>

        {/* Mapping the full project data json */}

        {projectData.map(project => (
          <Card key={project.id} title={project.title} subTitle={project.subtitle}>
            <ul>
              {project.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
            <div className='card-buttons'>
              <Link to={`/project/${project.id}`}>Learn More</Link>
              <Button label='View on GitHub' onClick={() => githubRepo({ repo: project.id })} />
            </div>
          </Card>
        ))}

        {/* Manually made this card as there is no github project or dedicated page */}
        <Card 
        title='Et ensuite ?'
        subTitle='On continue'>
          <ul>
            <li>Développer la maîtrise de React</li>
            <li>Découvrir Next, Vue et Angular</li>
            <li>Développer mes connaissances de C#</li>
          </ul>
          <div className='card-buttons'>
            <Button label="Just you wait." />
          </div>
        </Card>
      </div>
    </div>
  )
}

export default MyWorks