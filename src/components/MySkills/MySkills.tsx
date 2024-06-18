import './MySkills.scss'
import computer from './../../assets/img/frontend.svg'
import server from './../../assets/img/server.svg'
import { ProgressBar } from 'primereact/progressbar'

function MySkills() {
  return(
    <div className='my-skills'>
      <h2>I can work on both ends.</h2>
      <div className='backend-and-frontend'>
        <div className='backend-title'>
          <img src={server} alt='Server icon'></img>
          <h3>Backend;</h3>
        </div>
        <ul>
          <li>
            <span>Node.js</span>
            <ProgressBar value={80} />
          </li>
          <li>
            <span>Express.js</span>
            <ProgressBar value={80} />
          </li>
          <li>
            <span>Postman</span>
            <ProgressBar value={65} />
          </li>
          <li>
            <span>MongoDB</span>
            <ProgressBar value={75} />
          </li>
          <li>
            <span>Node.js</span>
            <ProgressBar value={75} />
          </li>
          <li>
            <span>C#</span>
            <ProgressBar value={25} />
          </li>
        </ul>
        <div className='frontend'>
          <div className='frontend-title'>
            <img src={computer} alt='Computer icon'></img>
            <h3>Frontend;</h3> 
          </div>
          <ul>
            <li>
              <span>HTML5</span>
              <ProgressBar value={95} />
            </li>
            <li>
              <span>CSS4</span>
              <ProgressBar value={95} />
            </li>
            <li>
              <span>JavaScript</span>
              <ProgressBar value={80} />
            </li>
            <li>
              <span>TypeScript</span>
              <ProgressBar value={85} />
            </li>
            <li>
              <span>React.js</span>
              <ProgressBar value={85} />
            </li>
            <li>
              <span>SEO Optimizations</span>
              <ProgressBar value={75} />
            </li>
          </ul>
        </div>
      </div>
      <p>Nothing is at 100% because I always leave room for improvement.</p>
    </div>
  )
}

export default MySkills