import HomeContent from '../../components/HomeContent/HomeContent'
import MyWorks from '../../components/MyWorks/MyWorks'
import MySkills from '../../components/MySkills/MySkills'
import './Home.scss'

function Home() {
  return (
    <>
    <HomeContent />
    <MySkills />
    <MyWorks />
    </>
  )
}

export default Home