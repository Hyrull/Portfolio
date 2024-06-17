import './HomeContent.scss'
import { NavLink } from 'react-router-dom'
import background from './../../assets/img/darkleavesgrading.png' // Courtesy of unsplash - photography by Brennan Burling
// import background from './../../assets/img/darkleaves2.webp' // Courtesy of unsplash - photography by Jeremy Bishop

function HomeContent() {
  return (
    <div className='home-content'>
      <img src={background} alt='Image de fond'/>
      <div className='home-content-text'>
        <h3>Welcome home.</h3>
        <h1>I am a job-seeking junior web developer;</h1><br/>
        <h1>Based in France, Nouvelle-Aquitaine.</h1>
      </div>
      <div className='home-content-links'>
        <NavLink to='/'>My works</NavLink>
        <NavLink to='/'>More about me</NavLink>
      </div>
    </div>
  )
}

export default HomeContent