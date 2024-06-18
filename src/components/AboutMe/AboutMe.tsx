import './AboutMe.scss'
import me from './../../assets/img/hyrul.webp'

function AboutMe() {
  return (
    <div className='about-me'>
      <h1>But what about me?</h1>
      <div className='me-content'>
        <img src={me} alt='Picture of Hyrul'/>
        <div className='me-text'>
          <p>With a green, clean-coding approach and a keen eye for detail, I am an ever learning junior web developer.</p>
          <p>As an autodidact, I know how to face difficult challenges, achieve my goals, and bring a project to completion.</p>
          <p>My past experiences - from factory work to music production - helped me find what I professionnally needed.</p>
          <p>I am now seeking a job that fulfills my thirst for more knowledge and skills in web development.</p>
          <div className='contact'>
            <a href='mailto:placeholder@outlook.com'>Send me an email</a>
            <a href='https://wow.zamimg.com/uploads/screenshots/normal/1149837-sergent.jpg'>Download my resume</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe