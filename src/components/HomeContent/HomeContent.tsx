import './HomeContent.scss'
import { Link } from 'react-scroll'
import background from './../../assets/img/darkwaves.webp'

function HomeContent() {
  return (
    <section id='home-content'>
      <img src={background} alt='Image de fond'/>
      <div className='main-container'>
        <div className='home-content-text'>
          <h2>Bienvenue.</h2>
          <h1>Je suis un développeur web junior;</h1><br/>
          <h1>en recherche d'emploi en Nouvelle-Aquitaine.</h1>
          <h2>Scrollez pour me découvrir.</h2>
        </div>
        <div className='home-content-links'>
          <Link to='my-skills' smooth={true} duration={500}>Compétences</Link>
          <Link to='my-works' smooth={true} duration={500}>Projets</Link>
          <Link to='about-me' smooth={true} duration={500}>À propos</Link>
        </div>
      </div>
    </section>
  )
}

export default HomeContent