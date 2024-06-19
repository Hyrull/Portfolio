import './AboutMe.scss'
import me from './../../assets/img/hyrul.webp'

function AboutMe() {
  return (
    <section id='about-me'>
      <div className='main-container'>
        <div className='me-content'>
          <img src={me} alt='Picture of Hyrul'/>
          <div className='me-text'>
            <div className='me-title'>
              <h2>Je suis un web dev junior.</h2>
              <h3>Et sinon, qui suis-je ?</h3>
            </div>
            <p>Doté d'une approche optimisée, et passionné, et d'un oeil soucieux du détail, je suis un développeur web junior.
            Autodidacte, je sais comment relever un défi, accomplir les objectifs et amener un projet à terme.
            Mes expériences passées - de la logistique en usine à l'ingénierie du son - m'ont permis de connaître mes besoin professionnels.
            Je suis donc en recherche d'un emploi me permettant de m'enrechir en compétences et de savoir dans le développement web.</p>
            <div className='contact'>
              <a href='mailto:placeholder@outlook.com'>Envoyez-moi un mail</a>
              <a href='https://wow.zamimg.com/uploads/screenshots/normal/1149837-sergent.jpg'>Téléchargez mon CV</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe