import './Footer.scss'
import githubLogo from './../../assets/img/github.svg'
import linkedinLogo from './../../assets/img/linkedin.svg'

function Footer() {
  return (
    <footer>
      <h1>Website crafted by Hyrul</h1>
      <div className='networks'>
        <a href='https://github.com/hyrull'><img src={githubLogo}/></a>
        <a href='https://linkedin.com/placeholder'><img src={linkedinLogo}/></a>
      </div>
    </footer>
  )
}

export default Footer