import './Header.scss'
import { Link } from 'react-scroll'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header>
    <NavLink to='/'><h1>Hyrul</h1></NavLink>
    <nav>
        <Link to='my-skills' smooth={true} duration={500}>My skills</Link>
        <Link to='my-works' smooth={true} duration={500}>My works</Link>
        <Link to='about-me' smooth={true} duration={500}>About me</Link>
    </nav>
    </header>
  )
}

export default Header