import HomeContent from '../../components/HomeContent/HomeContent'
import MyWorks from '../../components/MyWorks/MyWorks'
import MySkills from '../../components/MySkills/MySkills'
import AboutMe from '../../components/AboutMe/AboutMe'
import './Home.scss'

function Home() {
  return (
    <>
    <HomeContent />
    <MySkills />
    <MyWorks />
    <AboutMe />
    </>
  )
}

export default Home