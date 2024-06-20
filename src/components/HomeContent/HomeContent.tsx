import './HomeContent.scss'
import { Link } from 'react-scroll'
import background from './../../assets/img/darkwaves.webp'

function HomeContent() {
  return (
    <section id='home-content'>
      <img src={background} alt='Image de fond'/>
      <div className='main-container'>
        <div className='home-content-text'>
          <h2 className='fade-in'>Bienvenue.</h2>
          <h1 className='fade-in-two'>Je suis un développeur web junior;</h1><br/>
          <h1 className='fade-in-three'>en recherche d'emploi en Nouvelle-Aquitaine.</h1>
          <h2 className='fade-in-four'>Scrollez pour me découvrir.</h2>
        </div>
        <div className='home-content-links'>
          <Link to='my-skills' smooth={true} duration={500} className='fade-in-five'>Compétences</Link>
          <Link to='my-works' smooth={true} duration={500} className='fade-in-six'>Projets</Link>
          <Link to='about-me' smooth={true} duration={500} className='fade-in-seven'>À propos</Link>
        </div>
      </div>
    </section>
  )
}

export default HomeContent