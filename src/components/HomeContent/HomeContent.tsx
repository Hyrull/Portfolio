import './HomeContent.scss'
import background from './../../assets/img/darkleaves.webp'

function HomeContent() {
  return (
    <div className='home-content'>
      <img src={background} alt='Image de fond'/>
      <h3>Welcome home.</h3>
      <h1>I am a job-seeking junior web developer.</h1>
    </div>
  )
}

export default HomeContent