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
              <h2>I'm a junior web developer.</h2>
              <h3>But what about me?</h3>
            </div>
            <p>With a green, clean-coding approach and a keen eye for detail, I am an ever learning junior web developer.
            As an autodidact, I know how to face difficult challenges, achieve my goals, and bring a project to completion.
            My past experiences - from factory work to music production - helped me find what I professionally needed.
            I am now seeking a job that fulfills my thirst for more knowledge and skills in web development.</p>
            <div className='contact'>
              <a href='mailto:placeholder@outlook.com'>Send me an email</a>
              <a href='https://wow.zamimg.com/uploads/screenshots/normal/1149837-sergent.jpg'>Download my resume</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe