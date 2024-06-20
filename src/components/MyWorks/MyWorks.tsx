import './MyWorks.scss'
import { Button } from 'primereact/button'
import { Card } from 'primereact/card'
import { Link } from 'react-router-dom'
import projectData from './../../assets/data/projects.json'

function MyWorks() {
  return (
    <section id='my-works'>
      <div className='main-container'>
        <h1>Mes projets passés et actuels:</h1>
        <h2>Et les compétences ainsi acquises</h2>
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
                <Link to={`/project/${project.id}`} className='glow-blue'>Découvrir</Link>
                <Link to={`https://github.com/Hyrull/${project.id}`} className='github-link'>Voir sur GitHub</Link>
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
              <Button label="Just you wait." className='just-you-wait'/>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default MyWorks