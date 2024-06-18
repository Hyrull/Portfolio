import './HomeContent.scss'
import { NavLink } from 'react-router-dom'
import background from './../../assets/img/darkwaves.webp'

function HomeContent() {
  return (
    <div className='home-content'>
      <img src={background} alt='Image de fond'/>
      <div className='home-content-text'>
        <h3>Welcome home.</h3>
        <h1>I am a job-seeking junior web developer;</h1><br/>
        <h1>Based in France, Nouvelle-Aquitaine.</h1>
        <h3>Scroll to know more.</h3>
      </div>
      <div className='home-content-links'>
        <NavLink to='/'>My works</NavLink>
        <NavLink to='/'>More about me</NavLink>
      </div>
    </div>
  )
}

export default HomeContent