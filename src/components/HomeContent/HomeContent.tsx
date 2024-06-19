import './HomeContent.scss'
import { Link } from 'react-scroll'
import background from './../../assets/img/darkwaves.webp'

function HomeContent() {
  return (
    <section id='home-content'>
      <img src={background} alt='Image de fond'/>
      <div className='main-container'>
        <div className='home-content-text'>
          <h3>Welcome home.</h3>
          <h1>I am a job-seeking junior web developer;</h1><br/>
          <h1>Based in France, Nouvelle-Aquitaine.</h1>
          <h3>Scroll to know more.</h3>
        </div>
        <div className='home-content-links'>
          <Link to='my-skills' smooth={true} duration={500}>My skills</Link>
          <Link to='my-works' smooth={true} duration={500}>My works</Link>
          <Link to='about-me' smooth={true} duration={500}>About me</Link>
        </div>
      </div>
    </section>
  )
}

export default HomeContent